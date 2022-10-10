import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { News } from '../interfaces/news';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  news: News[] = [];
  loading = false;

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.loading = true;
    this.database.getNews().subscribe(news =>
      this.news = news);
  }

}
