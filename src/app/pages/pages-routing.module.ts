import { ExampleComponent } from './example/example.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { LoginComponent } from './login/login.component';
import { PaginaListasComponent } from './pagina-listas/pagina-listas.component';
import { PaginaMembrosComponent } from './pagina-membros/pagina-membros.component';
import { PaginaAtividadesComponent } from './pagina-atividades/pagina-atividades.component';
import { PaginaHistoricoComponent } from './pagina-historico/pagina-historico.component';
import {AuthGuard} from '../@core/guards/auth.guard';
import { LoginGuard } from '../@core/guards/login.guard';

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
				canActivate: [LoginGuard]
			},
            {
				path: 'listas',
				component: PaginaListasComponent,
				canActivate: [AuthGuard]
			},
            {
				path: 'membros',
				component: PaginaMembrosComponent,
				canActivate: [AuthGuard]
			},
            {
				path: 'atividades',
				component: PaginaAtividadesComponent,
				canActivate: [AuthGuard]
			},
            {
				path: 'historico',
				component: PaginaHistoricoComponent,
				canActivate: [AuthGuard]
			},
        ],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule { }
