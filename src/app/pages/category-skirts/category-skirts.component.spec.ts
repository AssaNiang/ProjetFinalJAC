import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySkirtsComponent } from './category-skirts.component';

describe('CategorySkirtsComponent', () => {
  let component: CategorySkirtsComponent;
  let fixture: ComponentFixture<CategorySkirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySkirtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorySkirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
