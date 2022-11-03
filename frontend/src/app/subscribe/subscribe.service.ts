import { environment } from './../../environments/environment';
import { User } from './user.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  private readonly url: string = environment.msUsuario;

  constructor(
    private httpClient: HttpClient
  ) { }

  addUser(user: User) {
    return this.httpClient.post(`${this.url}/usuario`, user);
  }
}
