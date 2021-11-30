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

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
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
	],
	providers: [],
    exports: [
        WelcomeComponent,
        InputNomeComponent,
        InputEmailComponent,
        InputSenhaComponent,
        PrimaryButtonComponent,
        CardItemListaComponent,
		SecondaryDarkButtonComponent,
    ]
})
export class ThemeModule { }
