import { Component } from '@angular/core'
import { Character } from '../../interfaces'

@Component({
	selector: 'tpn-add-character',
	templateUrl: './add-character.component.html',
	styleUrl: './add-character.component.sass'
})
export class AddCharacterComponent {
	character: Character = {
		name: '',
		grade: 0
	}

	addCharacter() {
		Object.assign(this.character, {
			name: '',
			grade: 0
		})
	}
}
