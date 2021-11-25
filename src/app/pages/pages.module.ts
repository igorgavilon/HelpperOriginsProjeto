import { NgModule } from "@angular/core";
import { ThemeModule } from "../@theme/theme.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { ExampleComponent } from './example/example.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from "./material.module";
import { PaginaListasComponent } from "./pagina-listas/pagina-listas.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
	imports: [
        CommonModule,
        FormsModule,
        PagesRoutingModule,
        ThemeModule,
        MaterialModule,
	],
	declarations: [
		PagesComponent,
		ExampleComponent,
		LoginComponent,
        PaginaListasComponent,
	],
	providers: []
})
export class PagesModule { }
