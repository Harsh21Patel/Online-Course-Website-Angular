import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasciComponent } from './datasci.component';

describe('DatasciComponent', () => {
  let component: DatasciComponent;
  let fixture: ComponentFixture<DatasciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatasciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
