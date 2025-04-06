import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeatherShoesComponent } from './leather-shoes.component';

describe('LeatherShoesComponent', () => {
  let component: LeatherShoesComponent;
  let fixture: ComponentFixture<LeatherShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeatherShoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeatherShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
