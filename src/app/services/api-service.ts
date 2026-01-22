import { HttpClient } from '@angular/common/http';
import { inject,Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
   server_url = "http://localhost:3000"
   http = inject (HttpClient)

  //  getallrecipes - home & recipes
  getAllRecipesAPI(){
    return this.http.get(`${this.server_url}/recipes`)
  }

  //  register - called by register when register btn clicked
  registerAPI(user:any){
    return this.http.post(`${this.server_url}/register`,user)
  }

}
