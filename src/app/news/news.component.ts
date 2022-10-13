import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { News } from '../interfaces/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: News[] = [];
  loading = false;
  p: number = 1;

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.database.getNews().subscribe(news => 
      this.news = news.reverse());
  }

}
