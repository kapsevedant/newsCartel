import {Component} from '@angular/core';
import {ScrollTopService} from "../services/scroll-top.service";
import {MatDialog} from "@angular/material/dialog";
import {WeatherComponent} from "../pages/weather/weather.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected logo: string = "news cartel";
  protected isMenuOpen: boolean = false;

  constructor(private scrollService: ScrollTopService,private dialog: MatDialog) {
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
      name: 'Entertainment',
      link: 'entertainment'
    },
    {
      name: 'Sport',
      link: 'sports'
    },
    {
      name: 'Technology',
      link: 'technology'
    }
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

}
