import { Component, OnInit } from "@angular/core";
import { AutenticacaoService } from "../@core/services/autenticacao.service";

@Component({
	selector: 'app-pages',
	styleUrls: ['pages.component.scss'],
	templateUrl: 'pages.component.html',
})
export class PagesComponent implements OnInit{

	public mostrarMenu: boolean = false;

	constructor(private _autenticacaoService: AutenticacaoService) {

	}

	ngOnInit(): void {
		//caso recarregue a página e o usuário ainda esteja logado
		this.mostrarMenu = this._autenticacaoService.temTokenValido();
		//fica aguardando atualizações no status de mostrar o menu
		this._autenticacaoService.mostrarMenuEmitter.subscribe(
			mostrar => this.mostrarMenu = mostrar
		);
	}

}
