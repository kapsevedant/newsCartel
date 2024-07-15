import {Component, OnInit} from '@angular/core';
import {NewsServiceService} from "../../services/news-service.service";
import {GeneralNewsDataModel} from "../../data-models/general-news-data-model";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss'
})
export class GeneralComponent implements OnInit{
  protected heading: string = "Top General News";
  protected generalNewsDataSource!: GeneralNewsDataModel[];

  constructor(private generalNews: NewsServiceService) {

  }

  ngOnInit(){
    this.getGeneralNews();
  }

  protected getGeneralNews(){
    this.generalNews.getGeneralNews_().subscribe(item => {
      if(item && item.news){
        this.generalNewsDataSource = item.news;
        console.log(this.generalNewsDataSource)
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
