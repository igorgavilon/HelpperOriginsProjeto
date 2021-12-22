import { Injectable } from "@angular/core";
import Atividade from "../common/interfaces/atividade.interface";

@Injectable({
    providedIn: 'root',
})
export class AtividadesService {
    public retornaTodasAtividades(): Array<Atividade> {
        return Atividades;
    }

    public retornaTodasAtividadesAtivas(): Array<Atividade> {
        return Atividades.filter((atividade: Atividade) => atividade.ativo === true);
    }

    public excluirAtividadePeloId(id: number): void {
        const arrayAtividades: Atividade[] = this.retornaTodasAtividades();
        const indice = arrayAtividades.findIndex((itemAtual: Atividade) => itemAtual.id_atividade === id);
        arrayAtividades[indice].ativo = false;

    }

    public retornaAtividadePeloId(id: number): Atividade {
        return Atividades.find((itemAtual: Atividade) => itemAtual.id_atividade === id);
    }

    public salvarAtividade(atividade: Atividade): void {

        const arrayAtividades: Atividade[] = this.retornaTodasAtividades();

        //se a atividade já existe, possui um id
        //serão atualizados os dados de uma atividade já existente
        if(atividade.id_atividade !== null) {
            const indice = arrayAtividades.findIndex((itemAtual: Atividade) => itemAtual.id_atividade === atividade.id_atividade);
            arrayAtividades[indice] = atividade;
        }else {//se a atividade não possui um id, ela é uma nova atividade
            //serão salvos os dados da nova atividade

            //se for a primeira atividade a ser cadastrada seu índice será zero
            let idAtual: number = 0;
            //se não for a primeira atividade o arrayAtividades não será vazio
            //então atualiza o idAtual
            if(arrayAtividades.length !== 0) {
                //busca o último id que foi cadastrado
                const ultimoId: number = arrayAtividades.map((item: Atividade) => item.id_atividade).reduce((anterior: number, atual: number) => Math.max(anterior, atual));
                //incrementa o último id para definir o id da atividade que será criada
                idAtual = ultimoId+1;
            }

            //guarda os dados da atividade que vieram do formulário
            const {descricao, ativo} = atividade;
            //adiciona a nova atividade no array de atividades
            Atividades.push({id_atividade: idAtual, descricao: descricao, ativo: ativo});



        }
    }
}

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
