import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.page.html',
  styleUrls: ['./add-ingredient.page.scss'],
})
export class AddIngredientPage implements OnInit {
  index;
  id;
  recipe: Recipe;
  ing;
  constructor( hi: ActivatedRoute, public r: RecipesService, public toastController: ToastController) {
    this.id = hi.snapshot.params.recipeId;
    this.index = r.recipes.findIndex( o => o.id === this.id);
   }
   async presentToast() {
    const toast = await this.toastController.create({
      message: 'Ingredient added',
      duration: 2000
    });
    toast.present();
  }
  onClick() {
    this.r.recipes[this.index].ingredients.push(this.ing);
    this.presentToast();
    this.ing = '';
  }

  ngOnInit() {
  }

}
