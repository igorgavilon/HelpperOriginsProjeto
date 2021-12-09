import { ExampleComponent } from './example/example.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { LoginComponent } from './login/login.component';
import { PaginaListasComponent } from './pagina-listas/pagina-listas.component';
import { PaginaMembrosComponent } from './pagina-membros/pagina-membros.component';
import { PaginaAtividadesComponent } from './pagina-atividades/pagina-atividades.component';

const routes: Routes = [
	{
		path: '',
		component: PagesComponent,
        children: [
			{
				path: 'example',
				component: ExampleComponent,
			},
            {
				path: 'login',
				component: LoginComponent,
			},
            {
				path: 'listas',
				component: PaginaListasComponent,
			},
            {
				path: 'membros',
				component: PaginaMembrosComponent,
			},
            {
				path: 'atividades',
				component: PaginaAtividadesComponent,
			},

        ],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule { }
