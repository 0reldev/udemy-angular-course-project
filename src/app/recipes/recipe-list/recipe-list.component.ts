import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://www.eatwell101.com/wp-content/uploads/2019/03/chicken-skillet-recipe-2-1460x2168.jpg'),
    new Recipe('Second test recipe', 'This is another test', 'https://tse1.mm.bing.net/th?id=OIP.5LxHDVy2GcapI6esMjV53gHaJO&pid=Api')
  ];
}
