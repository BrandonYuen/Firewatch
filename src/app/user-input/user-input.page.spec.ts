import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputPage } from './user-input.page';

describe('UserInputPage', () => {
  let component: UserInputPage;
  let fixture: ComponentFixture<UserInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInputPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
