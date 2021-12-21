import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class AutenticacaoService {

    private _autenticacaoUrl: string = "http://localhost:4444/v1/auth";

    constructor(private _httpClient: HttpClient) {

    }

    public login(dadosLogin: any): Observable<any> {
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
