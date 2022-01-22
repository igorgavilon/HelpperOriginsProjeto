import { IArquivoImagem } from "./arquivo-imagem.interface";
import { Membro } from "./membro.interface";

export interface IDadosMembro {
    membro: Membro;
    arquivoImagemAvatar: IArquivoImagem;
}