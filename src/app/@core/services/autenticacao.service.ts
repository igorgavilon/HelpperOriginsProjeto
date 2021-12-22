import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import IDadosLogin from "../common/interfaces/dados-login.interface";

@Injectable({
    providedIn: 'root',
})
export class AutenticacaoService {

    private _autenticacaoUrl: string = "http://localhost:4444/v1/auth";

    constructor(private _httpClient: HttpClient) {

    }

    public login(dadosLogin: IDadosLogin): Observable<any> {
        return this._httpClient.post(
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

}
