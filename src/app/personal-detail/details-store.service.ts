import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PersonalDetails } from './personal-detail/personal-details.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsStoreService implements OnDestroy {

  private detailsSubbject$: BehaviorSubject<PersonalDetails> = new BehaviorSubject<PersonalDetails>(null);
  readonly details$: Observable<PersonalDetails> = this.detailsSubbject$.asObservable();

  setDetails(details: PersonalDetails): void {
    this.detailsSubbject$.next(details);
  }

  ngOnDestroy(): void {
    // avoid memory leaks
    this.detailsSubbject$.complete();
  }
}
