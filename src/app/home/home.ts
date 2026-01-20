import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [Header, Footer, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
