import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
   hasUnsavedChanges = true;

  canDeactivate(): boolean {
    return !this.hasUnsavedChanges || confirm('Discard changes and leave?');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
