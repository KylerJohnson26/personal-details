import { Component, OnInit } from '@angular/core';
import { PersonalDetails } from './personal-details.model';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetailsStoreService } from '../details-store.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss'],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class PersonalDetailComponent implements OnInit {

  details$: Observable<ChartData[]>;

  constructor(
    private detailsStoreService: DetailsStoreService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.details$ = this.detailsStoreService.details$.pipe(
      map((data: PersonalDetails[]) => this.prepareDataForChart(data))
    );
  }

  onDetailsAdded(personalDetails: PersonalDetails) {
    this.detailsStoreService.setDetails(personalDetails);
    this.snackbar.open('Details added!', '', {
      duration: 3000
    });
    console.log(personalDetails);
  }

  prepareDataForChart(data: PersonalDetails[]): ChartData[] {

    data.sort((a, b) => a.age - b.age);

    const formattedData: ChartData = {
      name: '',
      series: []
    };

    data.map((details: PersonalDetails) => {
      formattedData.series.push({
        name: details.age.toString(),
        value: details.friends.length
      });
    });
    console.log(formattedData);
    return [...[], formattedData];
  }

}

export interface ChartData {
  name: string;
  series: SeriesDefinition[];
}

export interface SeriesDefinition {
  name: string;
  value: number;
}
