import { Component, Input, output } from '@angular/core'
import { Character } from '../../interfaces'

@Component({
	selector: 'tpn-list',
	templateUrl: './list.component.html',
	styleUrl: './list.component.sass'
})
export class ListComponent {
	@Input() characters: Character[] = []
	onDeleteCharacter = output<number>()

	deleteCharacter(index: number) {
		this.onDeleteCharacter.emit(index)
	}
}
