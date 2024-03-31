import { Component } from '@angular/core'
import { Character } from '../../interfaces'

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrl: './main.component.sass'
})
export class MainComponent {
	characters: Character[] = [
		{ name: 'Emma', grade: 300 },
		{ name: 'Norman', grade: 300 },
		{ name: 'Ray', grade: 300 }
	]

	addCharacter(character: Character) {
		this.characters.push(character)
	}

	deleteCharacter(index: number) {
		this.characters.splice(index, 1)
		console.log(index)
	}
}
