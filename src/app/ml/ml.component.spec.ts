import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlComponent } from './ml.component';

describe('MlComponent', () => {
  let component: MlComponent;
  let fixture: ComponentFixture<MlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
