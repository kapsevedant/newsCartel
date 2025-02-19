import {Component, OnInit} from '@angular/core';
import {NewsServiceService} from "../../services/news-service.service";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss'
})
export class GeneralComponent implements OnInit {
  protected heading: string = "Top General News";
  protected generalNewsDataSource!: any;
  protected isLoading: boolean = false;

  constructor(private generalNews: NewsServiceService) {

  }

  ngOnInit() {
    this.getNews();
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

  protected getNews() {
    this.isLoading = true;
    this.generalNews.getNewsAll().subscribe(data => {
      if (data && data.articles) {
        this.generalNewsDataSource = data.articles;
        console.log(this.generalNewsDataSource)
      }
      this.isLoading = false;
    })
  }
}
