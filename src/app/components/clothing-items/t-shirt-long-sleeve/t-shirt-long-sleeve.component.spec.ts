import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtLongSleeveComponent } from './t-shirt-long-sleeve.component';

describe('TShirtLongSleeveComponent', () => {
  let component: TShirtLongSleeveComponent;
  let fixture: ComponentFixture<TShirtLongSleeveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TShirtLongSleeveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TShirtLongSleeveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
