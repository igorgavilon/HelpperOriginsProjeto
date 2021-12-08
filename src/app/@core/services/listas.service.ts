import { Injectable } from "@angular/core";
import Atividade from "../common/interfaces/atividade.interface";
import Itemlista from "../common/interfaces/item-lista.interface";
import ListaAtividades from "../common/interfaces/lista-atividades.interface";
import Membro from "../common/interfaces/membro.interface";
import { EnumStatusLista } from "../common/tipos/tipos-enum";

@Injectable({
    providedIn: 'root',
})
export class ListasService {

    public retornaTodosMembros(): Array<Membro> {
        return Membros;
    }

    public retornaListasAtivas(): Array<ListaAtividades> {
        return Listas.filter((lista: ListaAtividades) => lista.status_lista === EnumStatusLista.ANDAMENTO);
    }

    public retornaTodosMembrosComListaAtiva(): Array<Membro> {
        let arrayMembros: Array<Membro> = [];
        const listasAtivas: Array<ListaAtividades> = this.retornaListasAtivas();

        for(const lista of listasAtivas) {
            const membro: Membro = Membros.find((membroAtual: Membro) => membroAtual.id_membro === lista.id_membro);
            arrayMembros.push(membro);
        }
        return arrayMembros;
    }

    public buscaListaAtivaPeloIdMembro(id_membro: number): ListaAtividades {
        return Listas.find((lista: ListaAtividades) => (lista.id_membro === id_membro && lista.status_lista === EnumStatusLista.ANDAMENTO));
    }

    public buscaItensListaPeloIdLista(id_lista: number): Array<Itemlista> {

        return ItensLista.filter((item: Itemlista) => item.id_lista === id_lista);
    }

    public buscaAtividadePeloId(id_atividade :number): Atividade {
        return Atividades.find((atividade: Atividade) => atividade.id_atividade === id_atividade);
    }

    public atualizarItemDaLista(item: Itemlista, status: boolean): void {
        if(status !== undefined) {
            ItensLista
            .filter((itemAtual: Itemlista) => itemAtual.id_lista === item.id_lista && itemAtual.id_atividade === item.id_atividade)
            .map((objetoItem: Itemlista) => objetoItem.status_falta = status);
        }

    }

    public finalizarLista(listaFinalizada: ListaAtividades): void {
        Listas.filter((listaAtual: ListaAtividades) => listaAtual.id_lista === listaFinalizada.id_lista)
        .map((objetoLista: ListaAtividades) => objetoLista.status_lista = EnumStatusLista.FINALIZADA);
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

var Listas: Array<ListaAtividades> = [
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

var ItensLista: Array<Itemlista> = [
    {
        id_lista: 1,
        id_atividade: 1,
        valor_desconto: 10,
        status_falta: true
    },
    {
        id_lista: 1,
        id_atividade: 3,
        valor_desconto: 5,
        status_falta: false
    },
    {
        id_lista: 1,
        id_atividade: 6,
        valor_desconto: 15,
        status_falta: false
    },
    {
        id_lista: 2,
        id_atividade: 6,
        valor_desconto: 5,
        status_falta: true
    },
    {
        id_lista: 2,
        id_atividade: 2,
        valor_desconto: 20,
        status_falta: false
    },
    {
        id_lista: 2,
        id_atividade: 4,
        valor_desconto: 10,
        status_falta: false
    },
]
