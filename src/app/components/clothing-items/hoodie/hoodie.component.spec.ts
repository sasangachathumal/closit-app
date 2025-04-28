import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoodieComponent } from './hoodie.component';

describe('HoodieComponent', () => {
  let component: HoodieComponent;
  let fixture: ComponentFixture<HoodieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoodieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoodieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
