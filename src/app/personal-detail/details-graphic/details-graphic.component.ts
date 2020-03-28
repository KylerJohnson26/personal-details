import { Component, OnInit } from '@angular/core';
import { DetailsStoreService } from '../details-store.service';
import { Observable } from 'rxjs';
import { PersonalDetails } from '../personal-detail/personal-details.model';

@Component({
  selector: 'app-details-graphic',
  templateUrl: './details-graphic.component.html',
  styleUrls: ['./details-graphic.component.scss']
})
export class DetailsGraphicComponent implements OnInit {

  details$: Observable<PersonalDetails[]>;

  constructor(
    private detailStoreService: DetailsStoreService
  ) { }

  ngOnInit() {
    this.details$ = this.detailStoreService.details$;
  }

}
