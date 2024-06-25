import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LeaguesComponent } from './leagues/leagues.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, LeaguesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
