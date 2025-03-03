import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardrobePageComponent } from './wardrobe-page.component';

describe('WardrobePageComponent', () => {
  let component: WardrobePageComponent;
  let fixture: ComponentFixture<WardrobePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WardrobePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WardrobePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
