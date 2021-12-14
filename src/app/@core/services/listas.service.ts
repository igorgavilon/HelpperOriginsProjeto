import { Injectable } from "@angular/core";
import ListaAtividades from "../common/classes/classe-lista-atividades";
import Atividade from "../common/interfaces/atividade.interface";
import IItemlista from "../common/interfaces/item-lista.interface";
import IListaAtividades from "../common/interfaces/lista-atividades.interface";
import Membro from "../common/interfaces/membro.interface";
import { EnumStatusLista } from "../common/tipos/tipos-enum";
import { MembrosService } from "./membros.service";

@Injectable({
    providedIn: 'root',
})
export class ListasService {

    constructor(private _membrosService: MembrosService) {

    }

    public retornaTodasListas(): Array<IListaAtividades> {
        return Listas;
    }

    public retornaListaPeloId(id: number): IListaAtividades {
        return Listas.find((lista: IListaAtividades) => lista.id_lista === id);
    }

    public retornaListasAtivas(): Array<IListaAtividades> {
        return Listas.filter((lista: IListaAtividades) => lista.status_lista === EnumStatusLista.ANDAMENTO);
    }

    public retornaTodosMembrosComListaAtiva(): Array<Membro> {
        let arrayMembros: Array<Membro> = [];
        const listasAtivas: Array<IListaAtividades> = this.retornaListasAtivas();

        for(const lista of listasAtivas) {
            const membro: Membro = Membros.find((membroAtual: Membro) => membroAtual.id_membro === lista.id_membro);
            arrayMembros.push(membro);
        }
        return arrayMembros;
    }

    public buscaListaEmAndamentoPeloIdMembro(id_membro: number): IListaAtividades {
        return Listas.find((lista: IListaAtividades) => (lista.id_membro === id_membro && lista.status_lista === EnumStatusLista.ANDAMENTO));
    }

    public buscaListaAtivaPeloIdMembro(id_membro: number): IListaAtividades {
        return Listas.find((lista: IListaAtividades) => (lista.id_membro === id_membro && lista.status_lista !== EnumStatusLista.FINALIZADA));
    }

    public buscaItensListaPeloIdLista(id_lista: number): Array<IItemlista> {

        return ItensLista.filter((item: IItemlista) => item.id_lista === id_lista);
    }

    public removerTodosItensListaPeloIdLista(idLista: number): void {
        ItensLista = ItensLista.filter((item: IItemlista) => item.id_lista !== idLista);
    }

    public buscaAtividadePeloId(id_atividade :number): Atividade {
        return Atividades.find((atividade: Atividade) => atividade.id_atividade === id_atividade);
    }

    public atualizarValorDescontoLista(idLista: number, valorDesconto: number): void {
        let lista: IListaAtividades = this.retornaListaPeloId(idLista);
        lista.valor_descontado = valorDesconto;
    }

    public atualizarItemDaLista(item: IItemlista, status: boolean): void {
        if(status !== undefined) {
            ItensLista
            .filter((itemAtual: IItemlista) => itemAtual.id_lista === item.id_lista && itemAtual.id_atividade === item.id_atividade)
            .map((objetoItem: IItemlista) => objetoItem.status_falta = status);
        }
    }

    public salvarItensLista(idLista: number, itemLista: IItemlista[]): void {
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

    public finalizarLista(listaFinalizada: IListaAtividades): void {
        Listas.filter((listaAtual: IListaAtividades) => listaAtual.id_lista === listaFinalizada.id_lista)
        .map((objetoLista: IListaAtividades) => objetoLista.status_lista = EnumStatusLista.FINALIZADA);
    }

    public iniciarLista(idLista: number): void {
        Listas.filter((lista: IListaAtividades) => lista.id_lista === idLista)
        .map((lista: IListaAtividades) => lista.status_lista = EnumStatusLista.ANDAMENTO);
    }

    public salvarLista(idMembro: number, nomeLista: string, itensLista: IItemlista[]): void {
        const listaAtiva: IListaAtividades = this.buscaListaAtivaPeloIdMembro(idMembro);
        let idAtual: number;
        if(listaAtiva) {
            idAtual = listaAtiva.id_lista;
            listaAtiva.nome_lista = nomeLista;
            this.removerTodosItensListaPeloIdLista(idAtual);
        }else {
            const arrayListasDeAtividades: Array<IListaAtividades> = this.retornaTodasListas();
            //se for a primeira lista a ser cadastrada seu índice será zero
            idAtual = 0;
            //se não for a primeira lista o arrayListasDeAtividades não será vazio
            //então atualiza o idAtual
            if(arrayListasDeAtividades.length !== 0) {
                //busca o último id que foi cadastrado
                const ultimoId: number = arrayListasDeAtividades.map((item: IListaAtividades) => item.id_lista)
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
        Listas = Listas.filter((lista: IListaAtividades) => lista.id_lista !== idLista);
    }

}

var Membros: Array<Membro> = [
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
]

var Atividades: Array<Atividade> = [
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
]

var Listas: Array<IListaAtividades> = [
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
]

var ItensLista: Array<IItemlista> = [
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
]
