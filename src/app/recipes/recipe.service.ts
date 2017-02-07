import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
private recipes: Recipe[] = [
      new Recipe('Poutine', 'Tres graisseuse', 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2011/8/29/1/FNM_100111-Poutine-002_s4x3.jpg.rend.sni18col.jpeg', [
        new Ingredient('Patates frites', 15),
        new Ingredient('Fromage en crottes', 10)
      ]),
      new Recipe('Salade Verte', 'Tres gouteuse', 'http://www.911pizza.fr/img/products/3958a8b2606deed7b1b9dd412af56000-w380.png', [
        new Ingredient('Pomme de salade', 1),
        new Ingredient('Croutons', 5),
        new Ingredient('Epinads', 5)
      ])
  ];
  constructor() {}

  getRecipes() {
    return this.recipes;
  }
}
