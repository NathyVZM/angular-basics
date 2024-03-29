import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HeroesRoutingModule } from './heroes-routing.module'
import { HeroesComponent } from './heroes.component'
import { HeroComponent } from './hero/hero.component'
import { ListComponent } from './list/list.component'

// Ordernar los imports y declaraciones por orden alfabetico
// Se pueden ordernar con la opcion de VSCode de `Sort lines ascending`
@NgModule({
	declarations: [
		HeroComponent,
		HeroesComponent,
		ListComponent
	],
	imports: [CommonModule, HeroesRoutingModule]
})
export class HeroesModule {}

// git checkout -- .
// Reestablece el codigo al ultimo commit
