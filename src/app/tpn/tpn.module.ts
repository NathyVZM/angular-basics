import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TpnRoutingModule } from './tpn-routing.module'
import { TpnComponent } from './tpn.component'
import { MainComponent } from './pages/main/main.component'
import { ListComponent } from './components/list/list.component'
import { AddCharacterComponent } from './components/add-character/add-character.component'
import { FormsModule } from '@angular/forms'

@NgModule({
	declarations: [
		MainComponent,
		TpnComponent,
		ListComponent,
		AddCharacterComponent
	],
	imports: [CommonModule, TpnRoutingModule, FormsModule]
})
export class TpnModule {}
