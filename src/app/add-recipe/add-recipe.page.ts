import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage implements OnInit {

  recipeName;
  recipeId;
  img;
  desc;

  constructor(public r: RecipesService) { }

  ngOnInit() {
  }
  onclick() {
    this.recipeId = 'r' + (Number(this.r.recipes[this.r.recipes.length - 1].id.substr(1)) + 1);
    console.log(this.recipeId);
    this.r.recipes.push({
      id: this.recipeId,
      title: this.recipeName,
      img : this.img,
      desc : this.desc,
      ingredients: [],
    });
  }

}
