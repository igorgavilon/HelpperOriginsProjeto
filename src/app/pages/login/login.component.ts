import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/@core/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
    public usuarioAutenticado: boolean = false;
    public mensagemErro: string;

  constructor(private _autenticacaoService: AutenticacaoService, private _rota: Router) { }

  public login(form: NgForm): void {
    console.log(form.value);

    this.usuarioAutenticado = this._autenticacaoService.login(form.value);
    if(this.usuarioAutenticado) {
        this._rota.navigate(['/pages/listas']);
    }else {
        this.mensagemErro = "Usuário Não Autenticado! E-mail ou senha incorretos!";
    }
}


}
