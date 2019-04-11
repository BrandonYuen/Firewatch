import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedWarningPage } from './detailed-warning.page';

describe('DetailedWarningPage', () => {
  let component: DetailedWarningPage;
  let fixture: ComponentFixture<DetailedWarningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedWarningPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedWarningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
