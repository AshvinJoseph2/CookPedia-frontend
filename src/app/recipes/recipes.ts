import { Component, inject, signal } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { ApiService } from '../services/api-service';
import { SearchPipe } from '../pipes/search-pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-recipes',
  imports: [Header, Footer,SearchPipe,FormsModule,NgxPaginationModule],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes {

  p: number = 1;
  searchKey:string = ""
  mealTypeArray:any = signal([])
  cuisineArray:any = signal([])
  allRecipes:any = signal([])
  dummyAllRecipies:any = []
  api = inject(ApiService)

  ngOnInit(){
    this.getAllRecipes()
  }

  getAllRecipes(){
    this.api.getAllRecipesAPI().subscribe((res:any)=>{
      this.allRecipes.set(res)
      this.dummyAllRecipies = res
      let dummyCuisineArray = res.map((item:any)=>item.cuisine)
      dummyCuisineArray.forEach((cuisine:any)=>{
        !this.cuisineArray().includes(cuisine) && this.cuisineArray().push(cuisine)
      })
      console.log(this.cuisineArray());

      let dummyMealArray = res.map((item:any)=>item.mealType).flat(Infinity)
      dummyMealArray.forEach((meal:any)=>{
        !this.mealTypeArray().includes(meal) && this.mealTypeArray().push(meal)
      })
      console.log(this.mealTypeArray());
    })
  }

 filterRecipie(key:string,value:string){
  this.allRecipes.set(this.dummyAllRecipies.filter((item:any)=>item[key]==value))
 }
}
