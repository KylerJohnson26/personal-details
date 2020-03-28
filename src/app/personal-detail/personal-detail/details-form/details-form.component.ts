import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PersonalDetails } from '../personal-details.model';
import { FormBuilder, Validators, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent implements OnInit {

  @Output() detailsAdded = new EventEmitter<PersonalDetails>();
  personalDetailsForm: FormGroup;
  error: string;

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
    // since one friend is required, never let user delete all friend inputs
    if (i > 0) {
      this.friends.removeAt(i);
    }
  }

  resetForm(): void {
    this.personalDetailsForm.reset();
    // reset form with only one input in friends section
    const defaultFormControl = new FormControl('', Validators.required);
    this.personalDetailsForm.setControl('friends', new FormArray([defaultFormControl]));
    this.error = undefined;
  }

  onSubmit(): void {
    if (this.personalDetailsForm.valid) {
      this.error = undefined;
      this.detailsAdded.emit(this.personalDetailsForm.value);
    } else {
      this.error = 'Please ensure the form above has been completed and all errors have been resolved';
    }
  }

}
