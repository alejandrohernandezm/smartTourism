import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTourismComponent } from './main-tourism.component';

describe('MainTourismComponent', () => {
  let component: MainTourismComponent;
  let fixture: ComponentFixture<MainTourismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTourismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
