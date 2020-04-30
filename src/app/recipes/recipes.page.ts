import { Component, OnInit, DoCheck } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, DoCheck {

  recipes: Recipe[];

  constructor(public recipeService: RecipesService) { }
  ngDoCheck(): void {
    this.ngOnInit();
  }
  ngOnInit() {
    this.recipes = this.recipeService.recipes;
    console.log(this.recipes);
  }
  addRecipe() {
    console.log('addded');
  }

}
