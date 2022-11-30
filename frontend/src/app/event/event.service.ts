import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from './event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private readonly url: string = environment.baseUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(`${this.url}/msevento/cadastroevento`);
  }

  addEvent(event: Event): Observable<any> {
    return this.httpClient.post(`${this.url}/msevento/cadastroevento`, event);
  }
}
