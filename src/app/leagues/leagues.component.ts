import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leagues',
  standalone: true,
  imports: [MatTabsModule, CommonModule, HttpClientModule],
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent {
  leagues = [
    { label: 'Premier League (England)', name: 'English Premier League' },
    { label: 'La Liga (Spain)', name: 'Spanish La Liga' },
    { label: 'Serie A (Italy)', name: 'Italian Serie A' },
    { label: 'Bundesliga (Germany)', name: 'German Bundesliga' },
    { label: 'Ligue 1 (France)', name: 'French Ligue 1' }
  ];
  teams: any[] = [];
  selectedLeague: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTeams('English Premier League');
  }

  fetchTeams(leagueName: string) {
    this.http.get<any[]>(`http://localhost:3000/api/leagues/${encodeURIComponent(leagueName)}`)
      .subscribe(teams => this.teams = teams);
  }

  onTabChange(event: any) {
    const selectedIndex = event.index;
    if (selectedIndex >= 0) {
      const league = this.leagues[selectedIndex];
      this.selectedLeague = league.name;
      this.fetchTeams(this.selectedLeague);
    }
  }
}
