import {Component} from '@angular/core';
import {ScrollTopService} from "../services/scroll-top.service";
import {MatDialog} from "@angular/material/dialog";
import {WeatherComponent} from "../pages/weather/weather.component";
import {CurrencyConverterService} from "../services/currency-converter.service";
import {CurrencyConverterComponent} from "../pages/currency-converter/currency-converter.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected logo: string = "newsCartel";
  protected isMenuOpen: boolean = false;
  protected currentYear!:number;
  protected myName : string = 'Vedant';

  constructor(private scrollService: ScrollTopService,private dialog: MatDialog) {
  }

  ngOnInit(){
    this.currentYear = new Date().getFullYear()
  }

  protected navLinks = [
    {
      name: 'General',
      link: 'general'
    },
    {
      name: 'Business',
      link: 'business'
    },
    {
      name: 'Sports',
      link: 'sports'
    },
    {
      name: 'Technology',
      link: 'technology'
    },
    {
      name: 'Health',
      link: 'health'
    },
    {
      name: 'Entertainment',
      link: 'entertainment'
    },
  ]

  protected toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  protected closeMenu() {
    this.isMenuOpen = false;
  }

  protected scrollToTop() {
    this.scrollService.scrollToTop();
  }

  protected openWeatherChatBot(){
    this.isMenuOpen=false;
    this.dialog.open(WeatherComponent);
  }

  protected openCourrencyConModal(){
    this.isMenuOpen=false;
    this.dialog.open(CurrencyConverterComponent);
  }

}
