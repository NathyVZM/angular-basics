import { Component } from '@angular/core'

@Component({
	selector: 'app-counter',
	templateUrl: './counter.component.html',
	styleUrl: './counter.component.sass'
})
export class CounterComponent {
	counter = 10

	increment() {
		this.counter++
	}

	decrement() {
		this.counter--
	}

	reset() {
		this.counter = 10
	}
}
