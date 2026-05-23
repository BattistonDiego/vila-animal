import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanhoTosaComponent } from './banho-tosa';

describe('BanhoTosa', () => {
  let component: BanhoTosaComponent;
  let fixture: ComponentFixture<BanhoTosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BanhoTosaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BanhoTosaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
