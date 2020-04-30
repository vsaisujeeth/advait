import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    children: [
      {
        path: '',
        loadChildren: './recipes/recipes.module#RecipesPageModule'
      },
      {
        path: ':recipeId',
        loadChildren: './recipes/recipe-details/recipe-details.module#RecipeDetailsPageModule'
      }
    ]
  },
  { path: 'add-recipe', loadChildren: './add-recipe/add-recipe.module#AddRecipePageModule' },
  { path: 'chat', loadChildren: './recipes/recipe-details/chat/chat.module#ChatPageModule' },
  {
    path: 'add-ingredient',
    children: [
      {
        path: ':recipeId',
        loadChildren: './add-ingredient/add-ingredient.module#AddIngredientPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
