import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  private errorMessage = '';

  private signUpForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  constructor() { }


  signUp() {
    if (this.signUpForm.value.password !== this.signUpForm.value.confirmPassword) {
      this.errorMessage = 'Password mismatch';
    } else {
      this.errorMessage = '';
      // navigate to dashboard
    }
  }

}
