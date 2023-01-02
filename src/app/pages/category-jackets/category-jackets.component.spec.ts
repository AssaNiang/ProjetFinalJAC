import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryJacketsComponent } from './category-jackets.component';

describe('CategoryJacketsComponent', () => {
  let component: CategoryJacketsComponent;
  let fixture: ComponentFixture<CategoryJacketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryJacketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryJacketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
