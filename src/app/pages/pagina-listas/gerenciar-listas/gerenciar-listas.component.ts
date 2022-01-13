import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import ItemLista from 'src/app/@core/common/classes/classe-item-lista';
import ListaAtividades from 'src/app/@core/common/classes/classe-lista-atividades';
import {Atividade} from 'src/app/@core/common/interfaces/atividade.interface';
import {Membro} from 'src/app/@core/common/interfaces/membro.interface';
import { EnumStatusLista } from 'src/app/@core/common/tipos/tipos-enum';
import { AtividadesService } from 'src/app/@core/services/atividades.service';
import { ListasService } from 'src/app/@core/services/listas.service';
import { MembrosService } from 'src/app/@core/services/membros.service';

@Component({
  selector: 'app-gerenciar-listas',
  templateUrl: './gerenciar-listas.component.html',
  styleUrls: ['./gerenciar-listas.component.scss']
})
export class GerenciarListasComponent implements OnInit {
    public mostrarMensagemInformativa: boolean;
    public textoMensagemInformativa: string;
    public listaAtividades: Atividade[];
    public listaMembros: Membro[];
    public idMembroSelecionado: number;
    public membroSelecionado: Membro;
    public listaAtivaMembroSelecionado: ListaAtividades;
    public itensLista: ItemLista[];
    public modoReadOnly: boolean;
    public criarNovaLista: boolean;
    public modoEditarLista: boolean;
    public mostrarMensagemConfirmacao: boolean;
    public textoMensagemConfirmacao: string;
    public totalAtividadesLista: number;
    public acaoConfirmacaoAceita: () => void;

    constructor(
            private _listasService: ListasService,
            private _atividadesService: AtividadesService,
            private _membrosService: MembrosService,
            public bottomSheetRef: MatBottomSheetRef<GerenciarListasComponent>,
            @Inject(MAT_BOTTOM_SHEET_DATA) public dadosAtividade: any
        ) { }

    ngOnInit(): void {
        this.mostrarMensagemInformativa = false;
        this.mostrarMensagemConfirmacao = false;
        this.listaAtividades = this._atividadesService.retornaTodasAtividadesAtivas();
        this.atualizarInformacoesPagina();
    }

    public atualizarInformacoesPagina(): void {
        this.modoReadOnly = true;
        this.criarNovaLista = false;
        this.mostrarMensagemConfirmacao = false;
        this.modoEditarLista = false;
        this.listaMembros = this._membrosService.retornaTodosMembros();
        if(this.idMembroSelecionado !== undefined) {
            this.membroSelecionado = this._membrosService.retornaMembroPeloId(this.idMembroSelecionado);
            this.listaAtivaMembroSelecionado = this._listasService.buscaListaAtivaPeloIdMembro(this.idMembroSelecionado);
            if(this.listaAtivaMembroSelecionado) this.itensLista = this._listasService.buscaItensListaPeloIdLista(this.listaAtivaMembroSelecionado.id_lista);
        }
    }

    public fecharModal = (): void => {
        this.bottomSheetRef.dismiss();
    }

    public atualizarMembroSelecionado(id_membro: number): void {
        this.modoReadOnly = true;
        this.idMembroSelecionado = id_membro;
        this.membroSelecionado = this._membrosService.retornaMembroPeloId(this.idMembroSelecionado);
        this.listaAtivaMembroSelecionado = this._listasService.buscaListaAtivaPeloIdMembro(this.idMembroSelecionado);

        if(this.listaAtivaMembroSelecionado) this.itensLista = this._listasService.buscaItensListaPeloIdLista(this.listaAtivaMembroSelecionado.id_lista);
    }

    public criarLista(): void {
        this.modoReadOnly = false;
        this.modoEditarLista = false;
        this.criarNovaLista = true;
        const valorMesada: number = this._membrosService.retornaMembroPeloId(this.idMembroSelecionado).valor_mesada;
        this.listaAtivaMembroSelecionado = new ListaAtividades(
            null,
            this.idMembroSelecionado,
            null,
            EnumStatusLista.ESPERA,
            valorMesada,
            0,
            valorMesada
        );

        //limpa o array de itens da lista
        this.itensLista = [];
        //busca todas as atividades ativas = que não foram excluídas
        this.listaAtividades = this._atividadesService.retornaTodasAtividadesAtivas();
        //preenche o array de itens da nova lista
        for (const atividade of this.listaAtividades) {
            const novoItemLista = new ItemLista(
                null,
                0,
                atividade.id_atividade,
                false,
                false
            );
            this.itensLista.push(novoItemLista);
        }
        this.atualizarTotalAtividadesLista();

    }

    public confirmarInicioLista(): void {
        this.textoMensagemConfirmacao = "iniciar";
        this.acaoConfirmacaoAceita = this.iniciarLista;
        this.mostrarMensagemConfirmacao = true;
    }

    public iniciarLista = (): void => {
        this._listasService.iniciarLista(this.listaAtivaMembroSelecionado.id_lista);
        this.mostrarMensagemConfirmacao = false;
        this.textoMensagemInformativa = "Lista iniciada com sucesso!";
        this.mostrarMensagemInformativa = true;
    }


    //salva a lista e todos os itens associados a ela
    public salvarLista = (): void => {
        const itensListaSelecionados: ItemLista[] = this.itensLista.filter((item: ItemLista) => item.checkboxSelecionado === true);
        this._listasService.salvarLista(this.idMembroSelecionado, this.listaAtivaMembroSelecionado.nome_lista, itensListaSelecionados);
        this.textoMensagemInformativa = this.listaAtivaMembroSelecionado.id_lista ? "Lista salva com sucesso!" : "Lista criada com sucesso!";
        this.mostrarMensagemInformativa = true;
    }

    public editarLista(): void {
        this.modoReadOnly = false;
        this.modoEditarLista = true;

        this.itensLista = this._listasService.buscaItensListaPeloIdLista(this.listaAtivaMembroSelecionado.id_lista);

        //atualiza o número de atividades que estão selecionadas na lista
        this.atualizarTotalAtividadesLista();

        //busca todas as atividades ativas = que não foram excluídas
        this.listaAtividades = this._atividadesService.retornaTodasAtividadesAtivas();

        //seleciona somente as atividades que ainda não pertencem à lista
        //dessa forma o usuário pode selecionar novas atividades para a lista
        for(const itemLista of this.itensLista) {
            this.listaAtividades = this.listaAtividades.filter((atividade: Atividade) => atividade.id_atividade !== itemLista.id_atividade);
        }

        //preenche o array de itens da nova lista
        for (const atividade of this.listaAtividades) {
            const novoItemLista = new ItemLista(
                null,
                0,
                atividade.id_atividade,
                false,
                false
            );
            this.itensLista.push(novoItemLista);
        }
    }

    public confirmarExclusaoLista(): void {
        this.textoMensagemConfirmacao = "excluir";
        this.acaoConfirmacaoAceita = this.excluirLista;
        this.mostrarMensagemConfirmacao = true;
    }

    public excluirLista = (): void => {
        this._listasService.excluirLista(this.listaAtivaMembroSelecionado.id_lista);
        this.mostrarMensagemConfirmacao = false;
        this.textoMensagemInformativa = "Lista excluída com sucesso!";
        this.mostrarMensagemInformativa = true;
    }

    public atualizarCheckBox = (): void => {
        this.atualizarTotalAtividadesLista();
    }

    public atualizarTotalAtividadesLista(): void {
        const itensSelecionados: ItemLista[] = this.itensLista.filter((item) => item.checkboxSelecionado === true);
        this.totalAtividadesLista = itensSelecionados.length;
    }

    public finalizarMensagemInformativa(): void {
        this.mostrarMensagemInformativa = false;
        this.atualizarInformacoesPagina();
    }

    public finalizarMensagemConfirmacao(): void {
        this.mostrarMensagemConfirmacao = false;
        this.atualizarInformacoesPagina();
    }

}
