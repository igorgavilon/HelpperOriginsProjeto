import { Injectable } from "@angular/core";
import Membro from "../common/interfaces/membro.interface";

@Injectable({
    providedIn: 'root',
})
export class MembrosService {

    public retornaTodosMembros(): Membro[] {
        return Membros;
    }

    public retornaMembroPeloId(idMembro: number): Membro {
        return Membros.find((membroAtual: Membro) => membroAtual.id_membro === idMembro);
    }

    public salvarMembro(membro: Membro): void {
        const arrayMembros: Membro[]= this.retornaTodosMembros();

        //se o membro já existe, possui um id
        //serão atualizados os dados de um membro já existente
        if(membro.id_membro !== null) {
            const indice = arrayMembros.findIndex((membroAtual: Membro) => membroAtual.id_membro === membro.id_membro);
            arrayMembros[indice] = membro;
            // Membros = arrayMembros;
        }else {//se o membro não possui um id, ele é um novo membro
            //serão salvos os dados do novo membro

            //se for o primeiro membro a ser cadastrado seu índice será zero
            let idAtual: number = 0;
            //se não for o primeiro membro o arrayMembros não será vazio
            //então atualiza o idAtual
            if(arrayMembros.length !== 0) {
                //busca o último id que foi cadastrado
                const ultimoId: number = arrayMembros.map((item: Membro) => item.id_membro).reduce((anterior: number, atual: number) => Math.max(anterior, atual));
                //incrementa o último id para definir o id do membro que será criado
                idAtual = ultimoId+1;
            }

            //guarda os dados do membro que vieram do formulário
            const {nome, imagem_avatar, data_nascimento, valor_mesada} = membro;
            //adiciona o novo cliente no array de clientes
            Membros.push({id_membro: idAtual, nome: nome, imagem_avatar: imagem_avatar, data_nascimento: data_nascimento, valor_mesada: valor_mesada});



        }
    }

    public excluirMembroPeloId(id: number): void {
        Membros = Membros.filter((itemAtual: Membro) => itemAtual.id_membro !== id);
    }

    // public salvar(cliente: ICliente): void {
    //     const arrayClientes: ICliente[]= this.retornaTodosClientes();

    //     //se o cliente já existe, possui um id
    //     //serão atualizados os dados de um cliente já existente
    //     if(cliente.id !== null) {
    //         const indice = arrayClientes.findIndex((clienteAtual: ICliente) => clienteAtual.id === cliente.id);
    //         arrayClientes[indice] = cliente;
    //     }else {//se o cliente não possui um id, ele é um novo cliente
    //         //serão salvos os dados do novo cliente

    //         //se for o primeiro cliente a ser cadastrado seu índice será zero
    //         let idAtual: number = 0;
    //         //se não for o primeiro cliente o arrayClientes não será vazio
    //         //então atualiza o idAtual
    //         if(arrayClientes.length !== 0) {
    //             //busca o último id que foi cadastrado
    //             const ultimoId: number = arrayClientes.map((item: ICliente) => item.id).reduce((anterior: number, atual: number) => Math.max(anterior, atual));
    //             //incrementa o último id para definir o id do cliente que será criado
    //             idAtual = ultimoId+1;
    //         }

    //         //guarda os dados do cliente que vieram do formulário
    //         const {nome, email, telefone, status} = cliente;
    //         //adiciona o novo cliente no array de clientes
    //         arrayClientes.push({id: idAtual, nome: nome, email: email, telefone: telefone, status: status});
    //     }

    //     localStorage.setItem('clientesArray', JSON.stringify(arrayClientes));

    //     //volta para a tela de listagem do cliente
    //     this.irRotaListagemCliente();
    // }

}

let Membros: Membro[] = [
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
