import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from './team.interface';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private readonly url = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  getTeams(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(`${this.url}/msequipe/cadastroequipe`);
  }

  addTeam(team: Team) {
    return this.httpClient.post(`${this.url}/msequipe/cadastroequipe`, team);
  }
}
