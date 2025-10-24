import { Component, Input } from '@angular/core';
import { dummyTasks } from '../../typed/tasks.model';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  tasks = dummyTasks
  @Input() userId: any;

  get SelectedUserTask (){
    return this.tasks.filter(task => task.userId === this.userId)
  }

}
