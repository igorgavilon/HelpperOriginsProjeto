import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {IDadosLogin} from "../common/interfaces/dados-login.interface";
import BaseResponse from "../common/models/classe-base-response";
import ResponseDataLogin from "../common/models/classe-response-data-login";

@Injectable({
    providedIn: 'root',
})
export class AutenticacaoService {

    private _autenticacaoUrl: string = "http://localhost:4444/v1/auth";
    public mostrarMenuEmitter = new EventEmitter<boolean>();

    constructor(private _httpClient: HttpClient) {

    }

    public login(dadosLogin: IDadosLogin): Observable<BaseResponse<ResponseDataLogin>> {
        return this._httpClient.post<BaseResponse<ResponseDataLogin>>(
            this._autenticacaoUrl,
            {
                "email": dadosLogin.email,
                "password": dadosLogin.senha
            }
        );

    }

    public salvarToken(token: string): void {
        localStorage.setItem('tokenUsuario', token);
    }

    public temTokenValido(): boolean {
        if(localStorage.getItem('tokenUsuario')) {
            return true;
        }
        return false;
    }

    public retornaToken(): string {
        return localStorage.getItem('tokenUsuario');
    }

    public retornaHeaderComToken(): HttpHeaders {
        return new HttpHeaders().set('Authorization', "Bearer " + this.retornaToken());
    }

}
