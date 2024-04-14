import { Component, inject } from '@angular/core'
import { Character } from '../../interfaces'
import { TpnService } from '../../services/tpn.service'
import { first } from 'rxjs'

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrl: './main.component.sass'
})
export class MainComponent {
	private tpnService = inject(TpnService)
	characters$ = this.tpnService.getCharacters()

	addCharacter(character: Character) {
		this.tpnService
			.addCharacter(character)
			.pipe(first())
			.subscribe(() => {})
	}

	deleteCharacter(id: string) {
		this.tpnService
			.deleteCharacter(id)
			.pipe(first())
			.subscribe(() => {})
	}
}
