import { EnumStatusLista } from "../tipos/tipos-enum";

export default class ListaAtividades {

    constructor(
        public id_lista: number,
        public id_membro: number,
        public nome_lista: string,
        public status_lista: EnumStatusLista,
        public valor_mesada: number,
        public valor_descontado: number,
        public valor_total: number
    ) {

    }
}
