import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Recipes } from './recipes/recipes';
import { Users } from './users/users';
import { Downloads } from './downloads/downloads';
import { Feedbacks } from './feedbacks/feedbacks';
import { ManageRecipe } from './manage-recipe/manage-recipe';

const routes: Routes = [
  // lazyloaded - http://localhost:4200/admin
    {
        path:'',component:Dashboard, title:"Dashboard"
    },
    {
        path:'recipes',component:Recipes, title:"Recipe List"
    },
    {
        path:'users',component:Users, title:"Users List"
    },
    {
        path:'downloads',component:Downloads, title:"Downloads List"
    },
    {
        path:'feedbacks',component:Feedbacks, title:"Feedbacks List"
    },
    {
        path:'recipes/add',component:ManageRecipe, title:"Add Recipe"
    },
    {
        path:'recipes/:id',component:ManageRecipe, title:"Edit Recipe"
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
