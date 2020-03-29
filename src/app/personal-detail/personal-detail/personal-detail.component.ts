import { Component, OnInit } from '@angular/core';
import { PersonalDetails } from './personal-details.model';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetailsStoreService } from '../details-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss'],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class PersonalDetailComponent implements OnInit {

  details$: Observable<PersonalDetails[]>;

  constructor(
    private detailsStoreService: DetailsStoreService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.details$ = this.detailsStoreService.details$;
  }

  onDetailsAdded(personalDetails: PersonalDetails) {
    this.detailsStoreService.setDetails(personalDetails);
    this.snackbar.open('Details added!', '', {
      duration: 3000
    });
    console.log(personalDetails);
  }

}
