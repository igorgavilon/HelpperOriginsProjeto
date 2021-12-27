import { Injectable } from "@angular/core";
import ItemLista from "../common/classes/classe-item-lista";
import ListaAtividades from "../common/classes/classe-lista-atividades";
import {Atividade} from "../common/interfaces/atividade.interface";
import {Membro} from "../common/interfaces/membro.interface";
import { EnumStatusLista } from "../common/tipos/tipos-enum";
import { MembrosService } from "./membros.service";

@Injectable({
    providedIn: 'root',
})
export class ListasService {

    constructor(private _membrosService: MembrosService) {

    }

    public retornaTodasListas(): ListaAtividades[] {
        return Listas;
    }

    public retornaListaPeloId(id: number): ListaAtividades {
        return Listas.find((lista: ListaAtividades) => lista.id_lista === id);
    }

    public retornaListasAtivas(): ListaAtividades[] {
        return Listas.filter((lista: ListaAtividades) => lista.status_lista === EnumStatusLista.ANDAMENTO);
    }

    public retornaListasFinalizadas(): ListaAtividades[] {
        return Listas.filter((lista: ListaAtividades) => lista.status_lista === EnumStatusLista.FINALIZADA);
    }

    public retornaListasFinalizadasPeloIdMembro(idMembro: number): ListaAtividades[] {
        return Listas.filter((lista: ListaAtividades) => (lista.status_lista === EnumStatusLista.FINALIZADA) && (lista.id_membro === idMembro));
    }

    public retornaTodosMembrosComListaAtiva(): Membro[] {
        const arrayMembros: Membro[] = [];
        const listasAtivas: ListaAtividades[] = this.retornaListasAtivas();

        for(const lista of listasAtivas) {
            const membro: Membro = Membros.find((membroAtual: Membro) => membroAtual.id_membro === lista.id_membro);
            arrayMembros.push(membro);
        }
        return arrayMembros;
    }

    public retornaTodosMembrosComListaFinalizada(): Membro[] {
        const arrayMembros: Membro[] = [];
        const listasFinalizadas: ListaAtividades[] = this.retornaListasFinalizadas();

        for(const lista of listasFinalizadas) {
            const membro: Membro = Membros.find((membroAtual: Membro) => membroAtual.id_membro === lista.id_membro);
            arrayMembros.push(membro);
        }
        //elimina itens duplicados do arrayMembros
        return arrayMembros.filter((membro, indice) => arrayMembros.indexOf(membro) === indice);
    }

    public buscaListaEmAndamentoPeloIdMembro(id_membro: number): ListaAtividades {
        return Listas.find((lista: ListaAtividades) => (lista.id_membro === id_membro && lista.status_lista === EnumStatusLista.ANDAMENTO));
    }

    public buscaListaAtivaPeloIdMembro(id_membro: number): ListaAtividades {
        return Listas.find((lista: ListaAtividades) => (lista.id_membro === id_membro && lista.status_lista !== EnumStatusLista.FINALIZADA));
    }

    public buscaItensListaPeloIdLista(id_lista: number): ItemLista[] {

        return ItensLista.filter((item: ItemLista) => item.id_lista === id_lista);
    }

    public removerTodosItensListaPeloIdLista(idLista: number): void {
        ItensLista = ItensLista.filter((item: ItemLista) => item.id_lista !== idLista);
    }

    public buscaAtividadePeloId(id_atividade :number): Atividade {
        return Atividades.find((atividade: Atividade) => atividade.id_atividade === id_atividade);
    }

    public atualizarValorDescontoLista(idLista: number, valorDesconto: number): void {
        const lista: ListaAtividades = this.retornaListaPeloId(idLista);
        lista.valor_descontado = valorDesconto;
    }

    public atualizarItemDaLista(item: ItemLista, status: boolean): void {
        if(status !== undefined) {
            ItensLista
            .filter((itemAtual: ItemLista) => itemAtual.id_lista === item.id_lista && itemAtual.id_atividade === item.id_atividade)
            .map((objetoItem: ItemLista) => objetoItem.status_falta = status);
        }
    }

    public salvarItensLista(idLista: number, itemLista: ItemLista[]): void {
        for(const item of itemLista) {
            ItensLista.push(
                {
                    id_lista: idLista,
                    id_atividade: item.id_atividade,
                    valor_desconto: item.valor_desconto,
                    status_falta: item.status_falta,
                    checkboxSelecionado: true
                }
            );
        }
    }

    public finalizarLista(listaFinalizada: ListaAtividades): void {
        Listas.filter((listaAtual: ListaAtividades) => listaAtual.id_lista === listaFinalizada.id_lista)
        .map((objetoLista: ListaAtividades) => objetoLista.status_lista = EnumStatusLista.FINALIZADA);
    }

    public iniciarLista(idLista: number): void {
        Listas.filter((lista: ListaAtividades) => lista.id_lista === idLista)
        .map((lista: ListaAtividades) => lista.status_lista = EnumStatusLista.ANDAMENTO);
    }

    public salvarLista(idMembro: number, nomeLista: string, itensLista: ItemLista[]): void {
        const listaAtiva: ListaAtividades = this.buscaListaAtivaPeloIdMembro(idMembro);
        let idAtual: number;
        if(listaAtiva) {
            idAtual = listaAtiva.id_lista;
            listaAtiva.nome_lista = nomeLista;
            this.removerTodosItensListaPeloIdLista(idAtual);
        }else {
            const arrayListasDeAtividades: ListaAtividades[] = this.retornaTodasListas();
            //se for a primeira lista a ser cadastrada seu índice será zero
            idAtual = 0;
            //se não for a primeira lista o arrayListasDeAtividades não será vazio
            //então atualiza o idAtual
            if(arrayListasDeAtividades.length !== 0) {
                //busca o último id que foi cadastrado
                const ultimoId: number = arrayListasDeAtividades.map((item: ListaAtividades) => item.id_lista)
                .reduce((anterior: number, atual: number) => Math.max(anterior, atual));
                //incrementa o último id para definir o id do membro que será criado
                idAtual = ultimoId+1;
            }
            const membro: Membro = this._membrosService.retornaMembroPeloId(idMembro);

            Listas.push(
                {
                    id_lista: idAtual,
                    id_membro: idMembro,
                    nome_lista: nomeLista,
                    status_lista: EnumStatusLista.ESPERA,
                    valor_mesada: membro.valor_mesada,
                    valor_descontado: 0,
                    valor_total: membro.valor_mesada
                }
            );
            this.removerTodosItensListaPeloIdLista(idAtual);

        }
        this.salvarItensLista(idAtual, itensLista);
    }

    public excluirLista(idLista: number): void {
        this.removerTodosItensListaPeloIdLista(idLista);
        Listas = Listas.filter((lista: ListaAtividades) => lista.id_lista !== idLista);
    }

}

const Membros: Membro[] = [
    {
        id_membro: 1,
        nome: "Luisa Sousa",
        imagem_avatar: {
            arquivo: null,
            url: "imagem_luisa.png"
        },
        data_nascimento: "01/01/2010",
        valor_mesada: 1000
    },
    {
        id_membro: 2,
        nome: "Clébin Sousa",
        imagem_avatar: {
            arquivo: null,
            url: "imagem_clebin.png"
        },
        data_nascimento: "01/01/2012",
        valor_mesada: 400
    },
    {
        id_membro: 3,
        nome: "Julinha Sousa",
        imagem_avatar: {
            arquivo: null,
            url: "imagem_julinha.png"
        },
        data_nascimento: "01/01/2014",
        valor_mesada: 500
    }
];

const Atividades: Atividade[] = [
    {
        id_atividade: 1,
        descricao: "Faucibus sit dictumst rhoncus ipsum amet egestas tempus eu risus. In sit.",
        ativo: true
    },
    {
        id_atividade: 2,
        descricao: "Felis id etiam sed morbi eros, nulla molestie. Vitae at convallis ac integer et.",
        ativo: true
    },
    {
        id_atividade: 3,
        descricao: "Nisl sapien aliquam eget dolor aliquet tincidunt vitae arcu. Ut eleifend.",
        ativo: true
    },
    {
        id_atividade: 4,
        descricao: "Montes, ultricies non ut aliquam malesuada quisque suspendisse. Ligula sed.",
        ativo: true
    },
    {
        id_atividade: 5,
        descricao: "Ornare sit velit vitae mauris cursus ipsum a potenti fermentum. Malesuada.",
        ativo: true
    },
    {
        id_atividade: 6,
        descricao: "Pulvinar aliquam elementum vitae vitae, massa. Quis rhoncus habitant ut.",
        ativo: true
    }
];

let Listas: ListaAtividades[] = [
    {
        id_lista: 1,
        id_membro: 1,
        nome_lista: "Lista de Novembro",
        status_lista: EnumStatusLista.ANDAMENTO,
        valor_mesada: 1000,
        valor_descontado: 0,
        valor_total: 1000
    },
    {
        id_lista: 2,
        id_membro: 2,
        nome_lista: "Lista de Natal",
        status_lista: EnumStatusLista.ANDAMENTO,
        valor_mesada: 200,
        valor_descontado: 0,
        valor_total: 200
    },
];

let ItensLista: ItemLista[] = [
    {
        id_lista: 1,
        id_atividade: 1,
        valor_desconto: 10,
        status_falta: true,
        checkboxSelecionado: true
    },
    {
        id_lista: 1,
        id_atividade: 3,
        valor_desconto: 5,
        status_falta: false,
        checkboxSelecionado: true
    },
    {
        id_lista: 1,
        id_atividade: 6,
        valor_desconto: 15,
        status_falta: false,
        checkboxSelecionado: true
    },
    {
        id_lista: 2,
        id_atividade: 6,
        valor_desconto: 5,
        status_falta: true,
        checkboxSelecionado: true
    },
    {
        id_lista: 2,
        id_atividade: 2,
        valor_desconto: 20,
        status_falta: false,
        checkboxSelecionado: true
    },
    {
        id_lista: 2,
        id_atividade: 4,
        valor_desconto: 10,
        status_falta: false,
        checkboxSelecionado: true
    },
];
