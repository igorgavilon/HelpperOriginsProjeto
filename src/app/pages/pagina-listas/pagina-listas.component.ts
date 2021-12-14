import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import IItemlista from 'src/app/@core/common/interfaces/item-lista.interface';
import IListaAtividades from 'src/app/@core/common/interfaces/lista-atividades.interface';
import Membro from 'src/app/@core/common/interfaces/membro.interface';
import { ListasService } from 'src/app/@core/services/listas.service';
import { GerenciarListasComponent } from './gerenciar-listas/gerenciar-listas.component';

@Component({
  selector: 'app-pagina-listas',
  templateUrl: './pagina-listas.component.html',
  styleUrls: ['./pagina-listas.component.scss']
})
export class PaginaListasComponent implements OnInit {
    public _listaMembros: Array<Membro>;
    public _listasDeAtividades: Array<IListaAtividades>;
    public _itensLista: Array<IItemlista>;
    public _lista_membro_selecionado: IListaAtividades;
    public _id_membro_selecionado: number;
    public _totalFaltas: number;
    public _mesada_membro_selecionado: number;
    public _descontos: number;
    public _total: number;

  constructor(private _listasService: ListasService, public bottomSheet: MatBottomSheet) {//public dialog: MatDialog) {
      this._descontos = 0;
      this._totalFaltas = 0;
  }

  ngOnInit(): void {
    this.carregarDadosDaPagina();
  }

  public carregarDadosDaPagina(): void {
    this._listaMembros = this._listasService.retornaTodosMembrosComListaAtiva();
    this._itensLista = [];
    if(this._listaMembros.length !== 0) {
        this.atualizarDadosMembroSelecionado(this._listaMembros[0].id_membro);
    }
  }

  public atualizarDadosMembroSelecionado(id_membro: number): void {
    this._id_membro_selecionado = id_membro;
    this._mesada_membro_selecionado = this._listaMembros.find((membro: Membro) => membro.id_membro === this._id_membro_selecionado).valor_mesada;
    this._lista_membro_selecionado = this._listasService.buscaListaEmAndamentoPeloIdMembro(this._id_membro_selecionado);
    this._itensLista = this._listasService.buscaItensListaPeloIdLista(this._lista_membro_selecionado.id_lista);
    this._descontos = 0;
    this._totalFaltas = 0;
    for(const item of this._itensLista){
        this._descontos += item.status_falta? item.valor_desconto: 0;
        this._totalFaltas += item.status_falta? 1: 0;
    }
    this._total = this._mesada_membro_selecionado - this._descontos;

  }

  public atualizarValoresDescontoETotal(valorCorrecao: number): void {
    this._descontos += valorCorrecao;
    this._totalFaltas -= valorCorrecao < 0 ? 1 : -1;
    this._total = this._mesada_membro_selecionado - this._descontos;
    this._listasService.atualizarValorDescontoLista(this._lista_membro_selecionado.id_lista, this._descontos);
  }

  public finalizarLista = (): void => {
    this._listasService.finalizarLista(this._lista_membro_selecionado);
    this.carregarDadosDaPagina();
  }

  public gerenciarListas(): void {
    const bottomSheetRef = this.bottomSheet.open(GerenciarListasComponent, {
        panelClass: 'bottom-sheet-container'
    });

    bottomSheetRef.afterDismissed().subscribe(() => {
        console.log('Bottom sheet has been dismissed.');
        //quando os dados estiverem vindo do backend
        //devo atualizar a página para refletir as alterações aqui
        // window.location.reload();
        this.carregarDadosDaPagina();
    });
  }

}
