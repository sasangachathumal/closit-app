import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouserComponent } from './trouser.component';

describe('TrouserComponent', () => {
  let component: TrouserComponent;
  let fixture: ComponentFixture<TrouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrouserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
