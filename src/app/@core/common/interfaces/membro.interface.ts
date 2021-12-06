import IArquivoImagem from "./arquivo-imagem.interface";

export default interface Membro {
    id_membro: number;
    nome: string;
    imagem_avatar: IArquivoImagem;
    data_nascimento: string;
    valor_mesada: number;
}
