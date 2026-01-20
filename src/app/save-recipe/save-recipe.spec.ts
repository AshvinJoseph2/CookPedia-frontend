import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveRecipe } from './save-recipe';

describe('SaveRecipe', () => {
  let component: SaveRecipe;
  let fixture: ComponentFixture<SaveRecipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveRecipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveRecipe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
