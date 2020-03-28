import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PersonalDetails } from './personal-detail/personal-details.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsStoreService implements OnDestroy {

  private readonly initialState: PersonalDetails[] = [];

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
}
