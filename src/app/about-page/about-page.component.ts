import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Team } from '../interfaces/team';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  team: Team[] = [];
  loading = false;
  showLogos = false;

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.getTeam();
  }

  toggleLogos() {
    this.showLogos = !this.showLogos;
  }

  getTeam() {
    this.loading = true;
    this.database.getTeam().subscribe(team =>
      this.team = team);
  }

  navigateTo(url: string) {
    window.open(url, '_blank');
  }

}
