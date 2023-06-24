import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocadComponent } from './autocad.component';

describe('AutocadComponent', () => {
  let component: AutocadComponent;
  let fixture: ComponentFixture<AutocadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
