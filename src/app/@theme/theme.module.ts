import { NgModule } from "@angular/core";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { InputNomeComponent } from './components/input-nome/input-nome.component';
import { MaterialModule } from "../pages/material.module";
import { InputEmailComponent } from './components/input-email/input-email.component';
import { InputSenhaComponent } from './components/input-senha/input-senha.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardItemListaComponent } from './components/card-item-lista/card-item-lista.component';
import { SecondaryDarkButtonComponent } from './components/secondary-dark-button/secondary-dark-button.component';
import { BotaoStatusFaltaComponent } from './components/botao-status-falta/botao-status-falta.component';
import { CommonModule } from "@angular/common";
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from "@angular/material/dialog";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from "@angular/router";
import { InputNascimentoComponent } from './components/input-nascimento/input-nascimento.component';
import { InputValorMesadaComponent } from './components/input-valor-mesada/input-valor-mesada.component';
import { InputArquivoImagemComponent } from './components/input-arquivo-imagem/input-arquivo-imagem.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
	],
	declarations: [
		WelcomeComponent,
		InputNomeComponent,
		InputEmailComponent,
		InputSenhaComponent,
		PrimaryButtonComponent,
		CardItemListaComponent,
		SecondaryDarkButtonComponent,
		BotaoStatusFaltaComponent,
		ModalComponent,
		NavBarComponent,
		InputNascimentoComponent,
		InputValorMesadaComponent,
		InputArquivoImagemComponent,
	],
    entryComponents: [],
	providers: [],
    exports: [
        WelcomeComponent,
        InputNomeComponent,
        InputEmailComponent,
        InputSenhaComponent,
        PrimaryButtonComponent,
        CardItemListaComponent,
		SecondaryDarkButtonComponent,
        ModalComponent,
        NavBarComponent,
        InputNascimentoComponent,
        InputValorMesadaComponent,
        InputArquivoImagemComponent,
    ]
})
export class ThemeModule { }
