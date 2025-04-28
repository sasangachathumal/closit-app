import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtLongSleeveComponent } from './shirt-long-sleeve.component';

describe('ShirtLongSleeveComponent', () => {
  let component: ShirtLongSleeveComponent;
  let fixture: ComponentFixture<ShirtLongSleeveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShirtLongSleeveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShirtLongSleeveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
