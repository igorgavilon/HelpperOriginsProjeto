import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Atividade from "../common/interfaces/atividade.interface";
import BaseResponse from "../common/models/classe-base-response";
import ResponseDataAtividades from "../common/models/classe-response-data-atividades";
import ResponseDataExcluirAtividade from "../common/models/classeresponse-data-excluir-atividade";
import { AutenticacaoService } from "./autenticacao.service";

@Injectable({
    providedIn: 'root',
})
export class AtividadesService {
    private _urlBase: string = "http://localhost:4444/v1/task";

    constructor(private _httpClient: HttpClient, private _autenticacaoService: AutenticacaoService) {}

    public retornaTodasAtividadesAtivas(): Observable<BaseResponse<ResponseDataAtividades>> {
        return this._httpClient.get<BaseResponse<ResponseDataAtividades>>(
            this._urlBase + "?page=1&size=100&orderBy=ASC",
            {headers: this._autenticacaoService.retornaHeaderComToken()}
        );

    }

    public excluirAtividadePeloId(id: string): Observable<BaseResponse<ResponseDataExcluirAtividade>> {
        return this._httpClient.patch<BaseResponse<ResponseDataExcluirAtividade>>(
            `${this._urlBase}/${id}`,
            {},
            {headers: this._autenticacaoService.retornaHeaderComToken()}
        );
    }

    public salvarAtividade(atividade: Atividade): Observable<Object> {

        //se a atividade já existe, possui um id
        //serão atualizados os dados de uma atividade já existente
        if(atividade.id !== null) {
            return this._httpClient.put(
                this._urlBase,
                {
                    "id": atividade.id,
                    "description": atividade.description
                },
                {headers: this._autenticacaoService.retornaHeaderComToken()}
            );
        }else {//se a atividade não possui um id, ela é uma nova atividade
            //serão salvos os dados da nova atividade

            return this._httpClient.post(
                this._urlBase,
                {
                    "description": atividade.description
                },
                {headers: this._autenticacaoService.retornaHeaderComToken()}
            );
        }
    }
}
