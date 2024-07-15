import {Component} from '@angular/core';
import {ScrollTopService} from "../services/scroll-top.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected logo: string = "news cartel";
  protected isMenuOpen: boolean = false;

  constructor(private scrollService: ScrollTopService) {
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

}
