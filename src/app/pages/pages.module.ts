import { NgModule } from "@angular/core";
import { ThemeModule } from "../@theme/theme.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { ExampleComponent } from './example/example.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from "./material.module";

@NgModule({
	imports: [
        PagesRoutingModule,
        ThemeModule,
        MaterialModule,
	],
	declarations: [
		PagesComponent,
		ExampleComponent,
		LoginComponent,
	],
	providers: []
})
export class PagesModule { }
