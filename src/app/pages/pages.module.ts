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
import { EditarDadosMembroComponent } from "./pagina-membros/editar-dados-membro/editar-dados-membro.component";
import { ExcluirMembroComponent } from "./pagina-membros/excluir-membro/excluir-membro.component";
import { PaginaAtividadesComponent } from "./pagina-atividades/pagina-atividades.component";
import { CardAtividadeInfosComponent } from "./pagina-atividades/card-atividade-infos/card-atividade-infos.component";
import { ExcluirAtividadeComponent } from "./pagina-atividades/excluir-atividade/excluir-atividade.component";
import { CadastrarNovaAtividadeComponent } from "./pagina-atividades/cadastrar-nova-atividade/cadastrar-nova-atividade.component";
import { EditarDadosAtividadeComponent } from "./pagina-atividades/editar-dados-atividade/editar-dados-atividade.component";
import { FormAtividadeComponent } from "./pagina-atividades/form-atividade/form-atividade.component";

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
        EditarDadosMembroComponent,
        ExcluirMembroComponent,
        PaginaAtividadesComponent,
        CadastrarNovaAtividadeComponent,
        CardAtividadeInfosComponent,
        FormAtividadeComponent,
        EditarDadosAtividadeComponent,
        ExcluirAtividadeComponent,
	],
    entryComponents: [
        CadastrarNovoMembroComponent,
        EditarDadosMembroComponent,
        ExcluirMembroComponent,
        CadastrarNovaAtividadeComponent,
        EditarDadosAtividadeComponent,
        ExcluirAtividadeComponent,
    ],
	providers: []
})
export class PagesModule { }
