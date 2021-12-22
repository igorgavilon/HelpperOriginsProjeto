import { EnumStatusLista } from "../tipos/tipos-enum";

export interface ListaAtividades {
    id_lista: number;
    id_membro: number;
    nome_lista: string;
    status_lista: EnumStatusLista;
    valor_mesada: number;
    valor_descontado: number;
    valor_total: number;
}
