import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [Header,Footer,RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
