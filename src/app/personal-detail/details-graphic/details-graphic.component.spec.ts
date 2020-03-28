import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGraphicComponent } from './details-graphic.component';

describe('DetailsGraphicComponent', () => {
  let component: DetailsGraphicComponent;
  let fixture: ComponentFixture<DetailsGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
