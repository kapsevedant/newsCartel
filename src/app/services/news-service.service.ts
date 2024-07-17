import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse, HttpStatusCode} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GeneralNewsDataModel} from "../data-models/general-news-data-model";
import {CommonDataModel} from "../data-models/common-data-model";

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  private apiKey = '4Qd3EUePkVKLhEwZbj_bemWmxe9uimfSSxpKLN8aWG8cCX7Y';
  private generalNewsApiUrl = '/api/latest-news';
  private businessNewsApiUrl = '/api/latest-news?category=business';
  private SportsNewsApiUrl = '/api/latest-news?category=sports';
  private EntertainmentNewsApiUrl = '/api/latest-news?category=entertainment';
  private TechnologyNewsApiUrl = '/api/latest-news?category=technology';

  private apiUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=46b83c6d3f5346778bad4e99900b6ffc';
  private businessApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=46b83c6d3f5346778bad4e99900b6ffc';
  private technologyApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=46b83c6d3f5346778bad4e99900b6ffc';
  private sportsApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=46b83c6d3f5346778bad4e99900b6ffc';
  private entertainmentApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=46b83c6d3f5346778bad4e99900b6ffc'
  private healthApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=46b83c6d3f5346778bad4e99900b6ffc';

  constructor(private http: HttpClient) {
  }

  public getNewsAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  public getBusinessNews():Observable<any>{
    return this.http.get(this.businessApiUrl);
  }

  public getTechnologyNews():Observable<any>{
    return this.http.get(this.technologyApiUrl);
  }

  public getSportsNews():Observable<any>{
    return this.http.get(this.sportsApiUrl);
  }

  public getEntertainmentNews():Observable<any>{
    return this.http.get(this.entertainmentApiUrl);
  }

  public getHealthNews():Observable<any>{
    return this.http.get(this.healthApiUrl);
  }
}
