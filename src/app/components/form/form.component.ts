import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formTemplate!: FormGroup;
  firstName!: FormControl;
  lastName!: FormControl;
  email!: FormControl;
  phone!: FormControl;
  companyName!: FormControl;
  industry!: FormControl;
  revenue!: FormControl;

  submitted: boolean = false;

  createFormControls() {
    this.firstName = new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
    ]);
    this.lastName = new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*'),
      Validators.maxLength(20),
    ]);
    this.phone = new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
    ]);
    this.companyName = new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]);
    this.industry = new FormControl('', [
      Validators.required,
      Validators.maxLength(15),
    ]);
    this.revenue = new FormControl('', [
      Validators.required,
      Validators.maxLength(15),
    ]);
  }

  createForm() {
    this.formTemplate = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      companyname: this.companyName,
      industry: this.industry,
      revenue: this.revenue,
    });
  }

  constructor() {}

  onSubmit() {
    this.submitted = true;
    console.log(this.formTemplate);
  }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }
}
