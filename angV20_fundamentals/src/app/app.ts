import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './01_components/users/users';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Users , Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angV20_fundamentals');
}
