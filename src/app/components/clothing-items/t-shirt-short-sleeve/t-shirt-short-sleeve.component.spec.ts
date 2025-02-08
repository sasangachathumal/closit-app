import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtShortSleeveComponent } from './t-shirt-short-sleeve.component';

describe('TShirtShortSleeveComponent', () => {
  let component: TShirtShortSleeveComponent;
  let fixture: ComponentFixture<TShirtShortSleeveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TShirtShortSleeveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TShirtShortSleeveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
