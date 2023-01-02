import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTshirtsComponent } from './category-tshirts.component';

describe('CategoryTshirtsComponent', () => {
  let component: CategoryTshirtsComponent;
  let fixture: ComponentFixture<CategoryTshirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryTshirtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryTshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
