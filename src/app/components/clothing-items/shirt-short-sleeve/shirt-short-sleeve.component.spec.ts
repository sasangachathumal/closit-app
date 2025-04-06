import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtShortSleeveComponent } from './shirt-short-sleeve.component';

describe('ShirtShortSleeveComponent', () => {
  let component: ShirtShortSleeveComponent;
  let fixture: ComponentFixture<ShirtShortSleeveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShirtShortSleeveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShirtShortSleeveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
