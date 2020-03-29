import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-details-graphic',
  templateUrl: './details-graphic.component.html',
  styleUrls: ['./details-graphic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsGraphicComponent implements OnInit, OnChanges {

  @Input() data: any;

  constructor(
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

  ngOnChanges() {
    console.log(this.data);
  }

}
