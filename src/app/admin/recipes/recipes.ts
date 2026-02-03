import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-recipes',
  standalone: false,
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes {

  api = inject(ApiService)
  allRecipes:any = signal([])
  searchKey:string = ""

  ngOnInit(){
    this.getAllRecipes()
  }

  getAllRecipes(){
    this.api.getAllRecipesAPI().subscribe((res:any)=>{
      this.allRecipes.set(res)
    })
  }

}
