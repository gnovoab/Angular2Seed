import { Component } from '@angular/core';

@Component({
  selector: 'my-dashboard',
	templateUrl: 'app/components/dashboard/dashboard.component.html'
})
export class DashboardComponent {
	name = 'john';
	message = '';

	sayHello() {
		this.message = 'Hello ' + this.name + '!';
	}
}
