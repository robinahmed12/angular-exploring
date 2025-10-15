import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hideHeader = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Hide header if route starts with /dashboard
        this.hideHeader = event.url.startsWith('/dashboard');
      }
    });
  }
  title = 'project_01';
}
