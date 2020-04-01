import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGraphicComponent } from './details-graphic.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';

describe('DetailsGraphicComponent', () => {
  let component: DetailsGraphicComponent;
  let fixture: ComponentFixture<DetailsGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsGraphicComponent ],
      imports: [ AngularMaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsGraphicComponent);
    component = fixture.componentInstance;
    component.data = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
