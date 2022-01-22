import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IArquivoImagem } from "../common/interfaces/arquivo-imagem.interface";
import {Membro} from "../common/interfaces/membro.interface";
import BaseResponse from "../common/models/classe-base-response";
import ResponseDataExcluirMembro from "../common/models/classe-response-data-excluir-membro";
import ResponseDataMembros from "../common/models/classe-response-data-membros";
import { AutenticacaoService } from "./autenticacao.service";

@Injectable({
    providedIn: 'root',
})
export class MembrosService {
    private _urlBase: string = "http://localhost:4444/v1/member";

    constructor(private _httpClient: HttpClient, private _autenticacaoService: AutenticacaoService) {}

    public retornaTodosMembros(): Observable<BaseResponse<ResponseDataMembros>> {
        return this._httpClient.get<BaseResponse<ResponseDataMembros>>(
            this._urlBase + "?page=1&size=100&orderBy=ASC",
            {headers: this._autenticacaoService.retornaHeaderComToken()}
        );
    }

    public retornaAvatarMembroPeloId(idMembro: string): Observable<File> {
        return this._httpClient.get<File>(
            this._urlBase + `/avatar/${idMembro}`,
            {headers: this._autenticacaoService.retornaHeaderComToken(), responseType: 'blob' as 'json'}
        );
    }

    public retornaMembroPeloId(idMembro: number): Membro {
        return Membros.find((membroAtual: Membro) => membroAtual.id === idMembro);
    }

    public salvarMembro(membro: Membro): Observable<Object> {
        //se o membro já existe, possui um id
        //serão atualizados os dados de um membro já existente
        if(membro.id !== null) {            
            return this._httpClient.put(
                this._urlBase,
                {
                    "id": membro.id,
                    "name": membro.name,
                    "birthdate": membro.birthdate,
                    "allowance": membro.allowance
                },
                {headers: this._autenticacaoService.retornaHeaderComToken()}
            );
        }else {//se o membro não possui um id, ele é um novo membro
            //serão salvos os dados do novo membro

            return this._httpClient.post<Object>(
                this._urlBase,
                {
                    "name": membro.name,
                    "birthdate": membro.birthdate,
                    "allowance": membro.allowance
                },
                {headers: this._autenticacaoService.retornaHeaderComToken()}
            );

        }
    }

    public salvarAvatarMembro(idMembro: string, imagemAvatar: IArquivoImagem): Observable<Object> {
        const formData = new FormData();
        formData.append('upload', imagemAvatar.arquivo);
        
        return this._httpClient.post<Object>(
            this._urlBase + `/${idMembro}/avatar`,
            formData,
            {headers: this._autenticacaoService.retornaHeaderComToken2()});
    }

    public excluirMembroPeloId(idMembro: string): Observable<BaseResponse<ResponseDataExcluirMembro>> {
        return this._httpClient.delete<BaseResponse<ResponseDataExcluirMembro>>(
            this._urlBase + `/${idMembro}`,
            {headers: this._autenticacaoService.retornaHeaderComToken()}
        );
    }
}

let Membros: Membro[] = [
    {
        id: 1,
        nome: "Luisa Sousa",
        imagem_avatar: {
            arquivo: null,
            url: "imagem_luisa.png"
        },
        data_nascimento: "2010-01-01",
        valor_mesada: 1000
    },
    {
        id: 2,
        nome: "Clébin Sousa",
        imagem_avatar: {
            arquivo: null,
            url: "imagem_clebin.png"
        },
        data_nascimento: "2012-01-01",
        valor_mesada: 400
    },
    {
        id_membro: 3,
        nome: "Julinha Sousa",
        imagem_avatar: {
            arquivo: null,
            url: "imagem_julinha.png"
        },
        data_nascimento: "2014-01-01",
        valor_mesada: 500
    }
];
