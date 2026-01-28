import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../services/api-service';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-view-recipe',
  imports: [Header,Footer,RouterLink],
  templateUrl: './view-recipe.html',
  styleUrl: './view-recipe.css',
})
export class ViewRecipe {

  allRelatedRecipies:any = signal([])
  recipe:any = signal({})
  api = inject(ApiService)
  route = inject(ActivatedRoute)
  recipeId:string = this.route.snapshot.params['id']
  router = inject(Router)

  ngOnInit(){
    this.getViewRecipe(this.recipeId)
  }

  getViewRecipe(id:string){
    this.api.viewRecipeAPI(id).subscribe((res:any)=>{
      this.recipe.set(res)
      // console.log(this.recipe());
      // get related recipies
      this.getRelatedRecipies(res.cuisine)
    })
  }

  getRelatedRecipies(cuisine:string){
    this.api.getRelatedRecipeAPI(cuisine).subscribe((res:any)=>{
      if(res.length>1){
        this.allRelatedRecipies.set(res.filter((item:any)=>item.name!=this.recipe().name))
        console.log(this.allRelatedRecipies());
      }else{
        this.allRelatedRecipies.set([])
      }
    })
  }

  viewRelatedRecipiePage(id:string){
    this.getViewRecipe(id)
    this.router.navigateByUrl(`/recipe/${id}/view`)
  }


}
