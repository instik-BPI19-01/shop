import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { MAIN, NEWS_LIST } from '../api/api.const';
import { NewsItem } from '../interfaces/news-item.interface';


@Injectable({
  providedIn: 'root',
})
export class NewsDataService {
  constructor(private httpClient: HttpClient) {}

  getNewsList(): Observable<NewsItem[]> {    
    return this.httpClient.get<NewsItem[]>(MAIN + NEWS_LIST);
  }
}