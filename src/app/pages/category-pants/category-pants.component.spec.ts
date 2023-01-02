import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPantsComponent } from './category-pants.component';

describe('CategoryPantsComponent', () => {
  let component: CategoryPantsComponent;
  let fixture: ComponentFixture<CategoryPantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryPantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryPantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
