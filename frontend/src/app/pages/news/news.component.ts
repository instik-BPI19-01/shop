import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsItem } from 'src/app/core/interfaces/news-item.interface';
import { NewsDataService } from 'src/app/core/services/news-data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsList$!: Observable<NewsItem[]>;

  constructor(private newsDataService: NewsDataService) { }
      
  ngOnInit(): void {  
    this.getNewsList();      
  }

  getNewsList(): void {
    this.newsList$ = this.newsDataService.getNewsList();
  }

}