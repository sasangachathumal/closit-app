import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizerPageComponent } from './customizer-page.component';

describe('CustomizerPageComponent', () => {
  let component: CustomizerPageComponent;
  let fixture: ComponentFixture<CustomizerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
