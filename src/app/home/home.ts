import { Component, inject, signal } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterLink } from "@angular/router";
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  allRecipes:any = signal([])
  api = inject(ApiService)

  ngOnInit(){
    this.getHomeRecipes()
  }

  getHomeRecipes(){
    this.api.getAllRecipesAPI().subscribe((res:any)=>{
      const homeRecipes = res.slice(0,6)
      this.allRecipes.set(homeRecipes)
      console.log(this.allRecipes());
    })
  }
}
