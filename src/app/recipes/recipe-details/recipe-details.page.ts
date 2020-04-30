import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  id: string;
  recipe: Recipe;


constructor(hi: ActivatedRoute, public serve: RecipesService, public alert: AlertController, public route: Router) {
    this.id = hi.snapshot.params.recipeId;
    this.recipe = serve.recipes.find( o => o.id === this.id);
   }

   onDelete() {
     console.log('delet!');
     this.alert.create({
      header: 'Are you Sure?',
      message: 'you can never restore it.',
      buttons: [{
        text: 'cancel',
        role: 'cancel'
      },
    {
      text: 'Delete',
      handler: () => {
        this.serve.recipes = this.serve.recipes.filter(o => {
          return o.id !== this.id;
        });
        console.log(this.serve.recipes);

        this.route.navigate(['/recipes']);
      }
    }]
    }).then(o => {o.present(); });
   }
  ngOnInit() {
     }

    ondel(x) {
    this.serve.recipes.find(o => o.id === this.id ).ingredients = this.serve.recipes.find(o => o.id === this.id ).ingredients.filter(o => {
        return o !== x;
      });
    }
}
