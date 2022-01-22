import {IArquivoImagem} from "./arquivo-imagem.interface";

export interface Membro {
    id: string;
    name: string;
    birthdate: string;
    allowance: number;
    avatar: string;
    status: boolean;
    createdAt: string;
    updatedAt: string;
}
