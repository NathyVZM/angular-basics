import { TitleCasePipe } from '@angular/common'
import { Component } from '@angular/core'

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrl: './hero.component.sass',
	providers: [TitleCasePipe]
})
export class HeroComponent {
	name = 'phoenix'
	age = 30
	showNameButton = true
	showAgeButton = true

	constructor(private titleCasePipe: TitleCasePipe) {}

	get getDescription() {
		return `${this.titleCasePipe.transform(this.name)} - ${this.age}`
	}

	changeName(_name: string) {
		this.name = _name
		this.showNameButton = false
	}

	changeAge(_age: number) {
		if (_age <= 0) return
		this.age = _age
		this.showAgeButton = false
	}

	reset() {
		this.name = 'phoenix'
		this.age = 30
		this.showNameButton = true
		this.showAgeButton = true
	}
}
