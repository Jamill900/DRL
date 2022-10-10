import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Career } from './interfaces/careers';
import { Team } from './interfaces/team';
import { News } from './interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  private careersUrl = 'api/careers';
  private teamUrl = 'api/team';
  private newsUrl = 'api/news'

  getCareers(): Observable<Career[]> {
    return this.http.get<Career[]>(this.careersUrl);
  }

  getTeam(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamUrl);
  }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.newsUrl);
  }

  getNewsById(id: number): Observable<News> {
    const url = `${this.newsUrl}/${id}`;
    return this.http.get<News>(url);
  }

  searchNews(term: string): Observable<News[]> {
    if(!term.trim()) {
      return of([]);
    }
    return this.http.get<News[]>(`${this.newsUrl}/name=${term}`)
  }
}
