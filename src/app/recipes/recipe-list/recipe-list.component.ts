import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'http://www.planete-gateau.com/11464-large_default/dummy-rond-polystyrene-diametre-15cm-hauteur-10cm.jpg');

  constructor() { }

  ngOnInit() {
  }

}
