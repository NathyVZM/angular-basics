import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TpnComponent } from './tpn.component'
import { MainComponent } from './pages/main/main.component'

const routes: Routes = [
	{
		path: '',
		component: TpnComponent,
		title: 'TPN',
		children: [
			{
				path: '',
				component: MainComponent,
				title: 'TPN - Main'
			}
		]
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TpnRoutingModule {}
