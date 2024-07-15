import { Component } from '@angular/core';
import {GeneralNewsDataModel} from "../../data-models/general-news-data-model";
import {NewsServiceService} from "../../services/news-service.service";

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent {
  protected heading: string = "Top Technology News";
  protected technologyNewsDataSource!: GeneralNewsDataModel[];

  constructor(private technologyNews: NewsServiceService) {

  }

  ngOnInit(){
    this.getTechnologyNews();
  }

  protected getTechnologyNews(){
    this.technologyNews.getTechnologyNews_().subscribe(item => {
      if(item && item.news){
        this.technologyNewsDataSource = item.news;
        console.log(this.technologyNewsDataSource)
      }
    })
  }

  protected formatDate(dateString: string): string {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }

    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    };

    return date.toLocaleString('en-US', options)
      .replace(/,/g, '')  // Remove all commas
      .replace(/(\d+:\d+:\d+)/, '$1')  // Remove space before time
      .replace(/(\w+)\s+(\w+)\s+(\d+)\s+(\d+)/, '$1 $2 $3 $4');  // Ensure single space between date parts
  }
}
