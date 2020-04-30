import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Noodles',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Fresh_ramen_noodle_001.jpg/375px-Fresh_ramen_noodle_001.jpg',
      // tslint:disable-next-line: max-line-length
      desc: 'First boil water ( amount so that all the part of Maggi is dipped inside the water) in a sauce pan. Dip the Maggi in water. Boil it for a minute or two. After that you find the water turns white. That is starch. Add the Maggi masala. Boil for another minute. Its ready to eat now.',
      ingredients: ['Maggie', 'Masala']
    },
    {
      id: 'r2',
      title: 'upma',
      img: 'https://www.seriouseats.com/recipes/images/2012/05/20121405-Sooji-Upma-%20Indian-Breakfast.jpg',
      desc: 'Boil water first. Add upma rava and masala. wait for few minites',
      ingredients: ['Upma Rava', 'Masala']
    },
    {
      id: 'r3',
      title: 'dosa',
      img: 'https://www.seriouseats.com/recipes/images/2012/05/20121405-Sooji-Upma-%20Indian-Breakfast.jpg',
      desc: 'Prepare dosa batter. Make dosa on stove.',
      ingredients: ['Upma Rava', 'Masala']
    },
  ];
  constructor() { }
}
