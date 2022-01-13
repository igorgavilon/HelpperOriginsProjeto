/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AutenticacaoService } from "../services/autenticacao.service";

@Injectable()
export class LoginGuard implements CanActivate{

    constructor(private _autenticacaoService: AutenticacaoService, private _rota: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean
    {
        if(!this._autenticacaoService.temTokenValido()) {
            return true;
        }

        this._rota.navigate(['/pages/listas']);

        return false;
    }

}