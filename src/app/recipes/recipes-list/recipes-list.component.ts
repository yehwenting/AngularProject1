import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A test Recipe",
      "This is a simple test",
      "https://i.guim.co.uk/img/media/3ee56c62527d596a58d2cf6238ab0f98745b80c3/0_0_5703_6082/master/5703.jpg?width=700&quality=85&auto=format&fit=max&s=402cad0d3249e490254fe1ba46c9e725"
    ),
    new Recipe(
      "A test Recipe",
      "This is a simple test",
      "https://i.guim.co.uk/img/media/3ee56c62527d596a58d2cf6238ab0f98745b80c3/0_0_5703_6082/master/5703.jpg?width=700&quality=85&auto=format&fit=max&s=402cad0d3249e490254fe1ba46c9e725"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
