import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendClothingListComponent } from './recommend-clothing-list.component';

describe('RecommendClothingListComponent', () => {
  let component: RecommendClothingListComponent;
  let fixture: ComponentFixture<RecommendClothingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendClothingListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendClothingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
