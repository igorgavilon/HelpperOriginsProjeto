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
    public mensagemErro: string = "";

  constructor(private _autenticacaoService: AutenticacaoService, private _rota: Router) { }

  public login(form: NgForm): void {
    this._autenticacaoService.login(form.value).subscribe({
      next: resposta => {
        this._autenticacaoService.salvarToken(resposta.data.Token);
        this.verificaAutenticacao(resposta.status);
      },
      error: erro => {
        console.log("Erro ao efetuar o login: ", erro.error)
        this.verificaAutenticacao(erro.error.status);
      }
    });
  }

  public verificaAutenticacao(status: boolean): void {
    this.usuarioAutenticado = status;
    if(this.usuarioAutenticado) {
      this._rota.navigate(['/pages/listas']);
    }else {
        this.mensagemErro = "Usuário Não Autenticado! E-mail ou senha incorretos!";
    }

  }

}
