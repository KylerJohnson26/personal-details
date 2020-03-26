import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalDetails } from './personal-details.model';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  @Output() detailsAdded = new EventEmitter<PersonalDetails>();
  personalDetailsForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildPersonalDetailsForm();
  }

  buildPersonalDetailsForm(): void {
    this.personalDetailsForm = this.formBuilder.group({
      name: ['', Validators.required],
      friends: ['', Validators.required],
      age: ['', Validators.required],
      weight: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.personalDetailsForm.value);
  }

}
