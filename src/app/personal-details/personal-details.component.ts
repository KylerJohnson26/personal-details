import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { PersonalDetails } from './personal-details.model';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class PersonalDetailsComponent implements OnInit {

  @Output() detailsAdded = new EventEmitter<PersonalDetails>();
  personalDetailsForm: FormGroup;
  error: string;
  hasSubmitted = false;

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildPersonalDetailsForm();
  }

  buildPersonalDetailsForm(): void {
    this.personalDetailsForm = this.formBuilder.group({
      name: ['', Validators.required],
      friends: this.formBuilder.array([
        new FormControl('', Validators.required)
      ]),
      age: ['', Validators.required],
      weight: ['', Validators.required]
    });
  }

  // convenience method to get form controls
  get formControls() {
    return this.personalDetailsForm.controls;
  }

  // convenience method to get friends FormArray
  get friends(): FormArray {
    return this.formControls.friends as FormArray;
  }

  newFriend(): FormControl {
    return this.formBuilder.control('', Validators.required);
  }

  addAnotherFriend() {
    this.friends.push(this.newFriend());
  }

  removeFriend(i: number) {
    this.friends.removeAt(i);
  }

  resetForm(): void {
    this.personalDetailsForm.reset();
    // reset form with only one input in friends section
    const defaultFormControl = new FormControl('', Validators.required);
    this.personalDetailsForm.controls.friends = new FormArray([defaultFormControl]);
  }

  onSubmit(): void {
    if (this.personalDetailsForm.valid) {
      this.detailsAdded.emit(this.personalDetailsForm.value);
    }
  }

}
