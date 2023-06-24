import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandcppComponent } from './candcpp.component';

describe('CandcppComponent', () => {
  let component: CandcppComponent;
  let fixture: ComponentFixture<CandcppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandcppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandcppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
