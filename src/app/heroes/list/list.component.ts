import { Component } from '@angular/core'

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrl: './list.component.sass'
})
export class ListComponent {
	heroes = ['Phoenix', 'Psylocke', 'Iron Man', 'Thor', 'Sif']
	deletedHero? = ''

	deleteLastHero() {
		this.deletedHero = this.heroes.pop()
	}
}
