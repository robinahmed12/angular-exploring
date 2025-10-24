import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './01_components/users/users';
import { Header } from './components/header/header';
import { DUMMY_USERS } from './typed/user.model';
import { Tasks } from './01_components/tasks/tasks';
import { dummyTasks } from './typed/tasks.model';

@Component({
  selector: 'app-root',
  imports: [Users, Header, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angV20_fundamentals');
  selectedUserId = 'u1';

  users = DUMMY_USERS;
  tasks = dummyTasks

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: any) {
     this.selectedUserId = id;
  }


}
