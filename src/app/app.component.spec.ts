import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailsStoreService } from './personal-detail/details-store.service';
import { PersonalDetailComponent } from './personal-detail/personal-detail/personal-detail.component';
import { PersonalDetailModule } from './personal-detail/personal-detail.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    const routes: Routes = [
      { path: '', pathMatch: 'full', redirectTo: 'personal-details' },
      { path: 'personal-details', component: PersonalDetailComponent },
      { path: '**', redirectTo: '' }
    ];

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        PersonalDetailModule,
        RouterModule.forRoot(routes)
      ],
      providers: [DetailsStoreService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
