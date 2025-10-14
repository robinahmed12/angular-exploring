import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagRecipeComponent } from './manag-recipe.component';

describe('ManagRecipeComponent', () => {
  let component: ManagRecipeComponent;
  let fixture: ComponentFixture<ManagRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
