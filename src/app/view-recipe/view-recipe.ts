import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../services/api-service';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { jsPDF } from 'jspdf'
import { autoTable } from 'jspdf-autotable'

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

  downloadRecipe(){
    this.api.downloadRecipeAPI(this.recipeId,{name:this.recipe().name,cuisine:this.recipe().cuisine,image:this.recipe().image}).subscribe((res:any)=>{
      console.log(res);
      // generate pdf
      this.genetarePDF()
    })
  }

  genetarePDF(){
    const pdf = new jsPDF()
    let headRow = ['Name','Cuisine','Ingredients','Instructions','Calories','Servings']
    let contentRow = [this.recipe().name,this.recipe().cuisine,this.recipe().ingredients,this.recipe().instructions,this.recipe().caloriesPerServing,this.recipe().servings,]
    autoTable(pdf,{
      head:[headRow],
      body:[contentRow]
    })

    pdf.save(`${this.recipe().name}.pdf`)
  }

  saveRecipe(){
    this.api.saveRecipeAPI(this.recipe()._id,{name:this.recipe().name,image:this.recipe().image}).subscribe({next:(res:any)=>{
      alert(`'${this.recipe().name}' Added to your Collection!!!`)
    },
    error:(reason:any)=>{
    alert(reason.error)
      }
    })
  }


}
