import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PersonalDetails } from './personal-detail/personal-details.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsStoreService implements OnDestroy {
  private readonly initialState: PersonalDetails[] = this.getSeedData();

  private detailsSubbject$: BehaviorSubject<PersonalDetails[]> = new BehaviorSubject<PersonalDetails[]>(this.initialState);
  readonly details$: Observable<PersonalDetails[]> = this.detailsSubbject$.asObservable();

  setDetails(details: PersonalDetails): void {
    const updatedState = [...this.detailsSubbject$.value, details];
    this.detailsSubbject$.next(updatedState);
  }

  ngOnDestroy(): void {
    // avoid memory leaks
    this.detailsSubbject$.complete();
  }

  getSeedData(): PersonalDetails[] {
    return [
      {
        name: 'Jason Bourne',
        age: 33,
        weight: 175,
        friends: ['Marie', 'Alex']
      },
      {
        name: 'Jason Bourne',
        age: 44,
        weight: 175,
        friends: ['Marie', 'Alex', 'Tony']
      },
      {
        name: 'Jason Bourne',
        age: 18,
        weight: 175,
        friends: [
          'Marie',
          'Alex',
          'Alex',
          'Alex',
          'Alex',
          'Alex',
          'Alex',
          'Alex'
        ]
      },
      {
        name: 'Jason Bourne',
        age: 33,
        weight: 175,
        friends: ['Marie', 'Alex']
      },
      {
        name: 'Jason Bourne',
        age: 26,
        weight: 175,
        friends: ['Marie', 'Alex', 'Marie', 'Alex', 'Gary', 'Shawn']
      },
      {
        name: 'Jason Bourne',
        age: 27,
        weight: 175,
        friends: ['Marie', 'Alex', 'Gary', 'Shawn']
      },
      {
        name: 'Jason Bourne',
        age: 33,
        weight: 175,
        friends: ['Marie', 'Alex']
      },
      {
        name: 'Andrew Bourne',
        age: 15,
        weight: 175,
        friends: ['Alex']
      },
      {
        name: 'John Bourne',
        age: 24,
        weight: 175,
        friends: ['Marie', 'Alex', 'Gary', 'Shawn', 'Jeff', 'Drew', 'Ashley']
      }
    ];
  }
}
