import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChild } from './second-child';

describe('SecondChild', () => {
  let component: SecondChild;
  let fixture: ComponentFixture<SecondChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
