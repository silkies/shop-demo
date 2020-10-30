import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSharingComponent } from './social-sharing.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';

describe('SocialSharingComponent', () => {
  let component: SocialSharingComponent;
  let fixture: ComponentFixture<SocialSharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialSharingComponent ],
      imports: [ ShareButtonsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
