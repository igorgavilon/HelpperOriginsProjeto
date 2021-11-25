import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class AutenticacaoService {

    public login(dadosLogin: any): boolean {
        if(dadosLogin.email === "delta@squad.com" && dadosLogin.senha === "delta") {
            return true;
        }
        return false;
    }

}
