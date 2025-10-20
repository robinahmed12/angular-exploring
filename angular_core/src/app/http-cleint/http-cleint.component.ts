import { HttpRequestService } from './../services/http-request.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-http-cleint',
  templateUrl: './http-cleint.component.html',
  styleUrls: ['./http-cleint.component.scss'],
})
export class HttpCleintComponent implements OnInit {
  userForm!: FormGroup;
  isSubmitting = false;
  users: any[] = [];

  constructor(
    private fb: FormBuilder,
    private httpRequestService: HttpRequestService
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: [''],
      password: [''],
      address: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
    });
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.httpRequestService.getUserData().subscribe({
      next: (users) => {
        this.users = users;
        console.log('Users with IDs:', this.users);
      },
      error: (err) => console.error('Error:', err),
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.isSubmitting = true;
      this.httpRequestService.postUserData(this.userForm.value).subscribe({
        next: (res) => {
          console.log('Data saved:', res);
          this.isSubmitting = false;
        },
        error: (err) => {
          console.error('Error:', err);
          this.isSubmitting = false;
        },
      });
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  handleDelete(id: any) {
    const confirmed = window.confirm('Are you sure you want to delete this user?');

  if (confirmed) {
    this.httpRequestService.deleteUser(id).subscribe({
      next: () => {
        console.log('User deleted:', id);
        this.users = this.users.filter(user => user.id !== id);
      },
      error: (err) => console.error('Error deleting user:', err),
    });
  }
  }

  handleEdit(id: any){
    
  }
}
