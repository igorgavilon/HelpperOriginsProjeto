import { ExampleComponent } from './example/example.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { LoginComponent } from './login/login.component';
import { PaginaListasComponent } from './pagina-listas/pagina-listas.component';
import { PaginaMembrosComponent } from './pagina-membros/pagina-membros.component';

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
        ],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule { }
