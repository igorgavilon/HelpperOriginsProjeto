import { NgModule } from "@angular/core";
import { ThemeModule } from "../@theme/theme.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { ExampleComponent } from './example/example.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from "./material.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
	imports: [
        CommonModule,
        PagesRoutingModule,
        ThemeModule,
        MaterialModule,
        FormsModule,
	],
	declarations: [
		PagesComponent,
		ExampleComponent,
		LoginComponent,
	],
	providers: []
})
export class PagesModule { }
