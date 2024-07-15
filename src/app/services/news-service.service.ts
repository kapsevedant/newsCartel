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

  constructor(private http: HttpClient) {
  }

  public getGeneralNews(url: string): Observable<HttpResponse<CommonDataModel<GeneralNewsDataModel>>> {
    const headers = new HttpHeaders({
      'Authorization': this.apiKey
    });
    return this.http.get<CommonDataModel<GeneralNewsDataModel>>(url, {
      headers: headers,
      observe: 'response'
    });
  }

  public getGeneralNews_(): Observable<CommonDataModel<GeneralNewsDataModel>> {
    return new Observable((subscriber) => {
      const endpoints = this.generalNewsApiUrl;
      this.getGeneralNews(endpoints).subscribe({
        next: (response: HttpResponse<CommonDataModel<GeneralNewsDataModel>>) => {
          if (response.status === HttpStatusCode.Ok) {
            if (response.body) {
              subscriber.next(response.body);
            } else {
              subscriber.error(response.body);
            }
          } else {
            subscriber.error(response.status);
          }
        },
        error: (error) => {
          subscriber.error(error);
        },
      });
    });
  }

  public getBusinessNews(url: string): Observable<HttpResponse<CommonDataModel<GeneralNewsDataModel>>> {
    const headers = new HttpHeaders({
      'Authorization': this.apiKey
    });
    return this.http.get<CommonDataModel<GeneralNewsDataModel>>(url, {
      headers: headers,
      observe: 'response'
    });
  }

  public getBusinessNews_(): Observable<CommonDataModel<GeneralNewsDataModel>> {
    return new Observable((subscriber) => {
      const endpoints = this.businessNewsApiUrl;
      this.getBusinessNews(endpoints).subscribe({
        next: (response: HttpResponse<CommonDataModel<GeneralNewsDataModel>>) => {
          if (response.status === HttpStatusCode.Ok) {
            if (response.body) {
              subscriber.next(response.body);
            } else {
              subscriber.error(response.body);
            }
          } else {
            subscriber.error(response.status);
          }
        },
        error: (error) => {
          subscriber.error(error);
        },
      });
    });
  }

  public getSportsNews(url: string): Observable<HttpResponse<CommonDataModel<GeneralNewsDataModel>>> {
    const headers = new HttpHeaders({
      'Authorization': this.apiKey
    });
    return this.http.get<CommonDataModel<GeneralNewsDataModel>>(url, {
      headers: headers,
      observe: 'response'
    });
  }

  public getSportsNews_(): Observable<CommonDataModel<GeneralNewsDataModel>> {
    return new Observable((subscriber) => {
      const endpoints = this.SportsNewsApiUrl;
      this.getSportsNews(endpoints).subscribe({
        next: (response: HttpResponse<CommonDataModel<GeneralNewsDataModel>>) => {
          if (response.status === HttpStatusCode.Ok) {
            if (response.body) {
              subscriber.next(response.body);
            } else {
              subscriber.error(response.body);
            }
          } else {
            subscriber.error(response.status);
          }
        },
        error: (error) => {
          subscriber.error(error);
        },
      });
    });
  }

  public getEntertainmentNews(url: string): Observable<HttpResponse<CommonDataModel<GeneralNewsDataModel>>> {
    const headers = new HttpHeaders({
      'Authorization': this.apiKey
    });
    return this.http.get<CommonDataModel<GeneralNewsDataModel>>(url, {
      headers: headers,
      observe: 'response'
    });
  }

  public getEntertainmentNews_(): Observable<CommonDataModel<GeneralNewsDataModel>> {
    return new Observable((subscriber) => {
      const endpoints = this.EntertainmentNewsApiUrl;
      this.getEntertainmentNews(endpoints).subscribe({
        next: (response: HttpResponse<CommonDataModel<GeneralNewsDataModel>>) => {
          if (response.status === HttpStatusCode.Ok) {
            if (response.body) {
              subscriber.next(response.body);
            } else {
              subscriber.error(response.body);
            }
          } else {
            subscriber.error(response.status);
          }
        },
        error: (error) => {
          subscriber.error(error);
        },
      });
    });
  }

  public getTechnologyNews(url: string): Observable<HttpResponse<CommonDataModel<GeneralNewsDataModel>>> {
    const headers = new HttpHeaders({
      'Authorization': this.apiKey
    });
    return this.http.get<CommonDataModel<GeneralNewsDataModel>>(url, {
      headers: headers,
      observe: 'response'
    });
  }

  public getTechnologyNews_(): Observable<CommonDataModel<GeneralNewsDataModel>> {
    return new Observable((subscriber) => {
      const endpoints = this.TechnologyNewsApiUrl;
      this.getTechnologyNews(endpoints).subscribe({
        next: (response: HttpResponse<CommonDataModel<GeneralNewsDataModel>>) => {
          if (response.status === HttpStatusCode.Ok) {
            if (response.body) {
              subscriber.next(response.body);
            } else {
              subscriber.error(response.body);
            }
          } else {
            subscriber.error(response.status);
          }
        },
        error: (error) => {
          subscriber.error(error);
        },
      });
    });
  }

}
