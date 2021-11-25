import { NgModule } from "@angular/core";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { InputNomeComponent } from './components/input-nome/input-nome.component';
import { MaterialModule } from "../pages/material.module";
import { InputEmailComponent } from './components/input-email/input-email.component';
import { InputSenhaComponent } from './components/input-senha/input-senha.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        MaterialModule,
        ReactiveFormsModule,
	],
	declarations: [
		WelcomeComponent,
		InputNomeComponent,
		InputEmailComponent,
		InputSenhaComponent,
		PrimaryButtonComponent,
	],
	providers: [],
    exports: [
        WelcomeComponent,
        InputNomeComponent,
        InputEmailComponent,
        InputSenhaComponent,
        PrimaryButtonComponent,
    ]
})
export class ThemeModule { }
