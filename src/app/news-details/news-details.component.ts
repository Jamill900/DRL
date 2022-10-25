import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';
import { News } from '../interfaces/news';
import * as AOS from 'aos';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  news: News;

  constructor(
    private db: DatabaseService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    AOS.init();
    this.getNewsById();
  }

  getNewsById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.db.getNewsById(id).subscribe(news => this.news = news);
  }

}
