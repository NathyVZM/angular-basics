import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CounterModule } from './counter/counter.module'

// Orden de imports:
// 1. Javascript oficial
// 2. Angular ofical
// 3. Librerias de terceros
// 4. Nuestro codigo

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CounterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}

// Un modulo es una clase con un decorador. Es un agrupador.
// Encapsula funcionalidades y facilita compartir dichas funcionalidades
// Protege esas funcionalidades del mundo exterior

