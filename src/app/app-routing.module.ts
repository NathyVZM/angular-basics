import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
	{ path: '', redirectTo: 'the-promised-neverland', pathMatch: 'full' },
	{
		path: 'heroes',
		loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
	},
	{
		path: 'the-promised-neverland',
		loadChildren: () => import('./tpn/tpn.module').then(m => m.TpnModule)
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}

