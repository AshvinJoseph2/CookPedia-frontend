import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Recipes } from './recipes/recipes';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Register } from './register/register';
import { Profile } from './profile/profile';
import { SaveRecipe } from './save-recipe/save-recipe';
import { ViewRecipe } from './view-recipe/view-recipe';
import { Pnf } from './pnf/pnf';

export const routes: Routes = [
    // home
    {
        path:'',component:Home,title:'Home'
    },
    {
        path:'recipes',component:Recipes,title:'All Recipes'
    },
    {
        path:'about',component:About,title:'About'
    },
    {
        path:'contact',component:Contact,title:'Contact'
    },
    {
        path:'login',component:Login,title:'Login'
    },
    {
        path:'register',component:Register,title:'Register'
    },
    {
        path:'profile',component:Profile,title:'Profile'
    },
    {
        path:'recipe/save',component:SaveRecipe,title:'Recipes Collection'
    },
    {
        path:'recipe/:id/view',component:ViewRecipe,title:'View Recipe'
    },
    {
        path:'**',component:Pnf,title:'Page Not Found'
    }
];
