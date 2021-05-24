import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiunServiceComponent } from './premiun-service.component';

describe('PremiunServiceComponent', () => {
  let component: PremiunServiceComponent;
  let fixture: ComponentFixture<PremiunServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiunServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiunServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
