import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('userForm') signupForm!: NgForm;

  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: "",
    address: {
      street: '',
      city: '',
      zip: '',
    },
  };

  onSubmit(form: NgForm) {
    if (form.valid && this.user.password === this.user.confirmPassword) {
      alert('registration successful');
      console.log('Form submitted:', this.user);
    }

    this.signupForm.reset();
  }

  constructor() {}

  ngOnInit(): void {}
}
