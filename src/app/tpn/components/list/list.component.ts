import { Component, Input, output } from '@angular/core'
import { Character } from '../../interfaces'
import { Observable } from 'rxjs'

@Component({
	selector: 'tpn-list',
	templateUrl: './list.component.html',
	styleUrl: './list.component.sass'
})
export class ListComponent {
	@Input() characters!: Observable<Character[]>
	onDeleteCharacter = output<string>()

	deleteCharacter(id: string) {
		this.onDeleteCharacter.emit(id)
	}
}
