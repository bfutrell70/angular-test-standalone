import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChild } from './first-child';

describe('FirstChild', () => {
  let component: FirstChild;
  let fixture: ComponentFixture<FirstChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
