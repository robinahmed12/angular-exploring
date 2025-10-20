import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  donateForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.donateForm = new FormGroup({
      userData: new FormGroup({
        fullname: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
        ]),
        email: new FormControl(null, [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
        phone: new FormControl(null, [
          Validators.required,
          Validators.pattern('^[0-9]{10,15}$'),
        ]),
      }),

      amount: new FormControl(null, [Validators.required, Validators.min(1)]),
      otherAmount: new FormControl(null),
      purpose: new FormControl([], [Validators.required]),
      paymentMethod: new FormControl([], [Validators.required]),
      tnxId: new FormControl(null, [Validators.required]),
      note: new FormControl(null),

      phoneNumbers: new FormArray([]),
    });
  }

  onSubmit() {
    console.log(this.donateForm.value);
  }
  get phoneNumbers(): FormArray {
    return this.donateForm.get('phoneNumbers') as FormArray;
  }

  addPhone() {
    const control = new FormControl(null, [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
    ]);
    (this.donateForm.get('phoneNumbers') as FormArray).push(control);
  }

  get email() {
  return (this.donateForm.get('userData') as FormGroup).get('email');
}
}
