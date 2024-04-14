import { Component, output } from '@angular/core'
import { Character } from '../../interfaces'

@Component({
	selector: 'tpn-add-character',
	templateUrl: './add-character.component.html',
	styleUrl: './add-character.component.sass'
})
export class AddCharacterComponent {
	onAddCharacter = output<Character>()
	character: Character = {
		id: '',
		name: '',
		grade: 0
	}

	addCharacter() {
		this.onAddCharacter.emit(this.character)
		this.character = { id: '', name: '', grade: 0 }
	}
}
