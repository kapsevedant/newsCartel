import {Component} from '@angular/core';
import {NewsServiceService} from "../../services/news-service.service";

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrl: './business.component.scss'
})
export class BusinessComponent {
  protected heading: string = "Top Business";
  protected businessNewsDataSource!: any;
  protected isLoading: boolean = false;

  constructor(private businessNews: NewsServiceService) {

  }

  ngOnInit() {
    this.getBusinessNews()
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

  protected getBusinessNews() {
    this.isLoading = true;
    this.businessNews.getBusinessNews().subscribe(data => {
      if (data && data.articles) {
        this.businessNewsDataSource = data.articles;
      }
      this.isLoading = false
    })
  }
}
