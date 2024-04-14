import { Injectable } from '@angular/core'
import { Character } from '../interfaces'
import { EMPTY, of } from 'rxjs'
import { v4 as uuid } from 'uuid'

@Injectable({
	providedIn: 'root'
})
export class TpnService {
	private characters: Character[] = [
		{ id: uuid(), name: 'Emma', grade: 300 },
		{ id: uuid(), name: 'Norman', grade: 300 },
		{ id: uuid(), name: 'Ray', grade: 300 }
	]

	getCharacters() {
		return of(this.characters)
	}

	addCharacter(character: Character) {
		const newCharacter: Character = { ...character, id: uuid() }
		this.characters.push(newCharacter)
		return of(newCharacter)
	}

	deleteCharacter(id: string) {
		const index = this.characters.findIndex(character => character.id === id)
		if (index === -1) return EMPTY
		const [deletedCharacter] = this.characters.splice(index, 1)
		return of(deletedCharacter)
	}
}
