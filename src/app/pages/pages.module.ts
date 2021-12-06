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
import { CardMembroResumoDescontosComponent } from "./pagina-listas/card-membro-resumo-descontos/card-membro-resumo-descontos.component";
import { CardListaTotalFaltasComponent } from "./pagina-listas/card-lista-total-faltas/card-lista-total-faltas.component";
import { PaginaMembrosComponent } from "./pagina-membros/pagina-membros.component";
import { CadastrarNovoMembroComponent } from "./pagina-membros/cadastrar-novo-membro/cadastrar-novo-membro.component";
import { CardMembroInfosComponent } from "./pagina-membros/card-membro-infos/card-membro-infos.component";
import { FormMembroComponent } from "./pagina-membros/form-membro/form-membro.component";

@NgModule({
	imports: [
        CommonModule,
        FormsModule,
        PagesRoutingModule,
        ThemeModule,
        MaterialModule,
        FormsModule,
	],
	declarations: [
		PagesComponent,
		ExampleComponent,
		LoginComponent,
        PaginaListasComponent,
        CardMembroResumoDescontosComponent,
        CardListaTotalFaltasComponent,
        PaginaMembrosComponent,
        CadastrarNovoMembroComponent,
        CardMembroInfosComponent,
        FormMembroComponent,
	],
    entryComponents: [
        CadastrarNovoMembroComponent,
    ],
	providers: []
})
export class PagesModule { }
