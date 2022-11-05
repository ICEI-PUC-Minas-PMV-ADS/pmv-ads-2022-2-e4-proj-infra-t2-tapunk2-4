import { Token } from './../login/token.interface';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from './../../environments/environment';
import { User } from './user.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubscribeService {
  private readonly url: string = environment.msUsuario;

  private logger = new Subject<boolean>();

  constructor(private httpClient: HttpClient) {}

  addUser(user: User): Observable<any> {
    return this.httpClient.post(`${this.url}/usuario`, user);
  }

  getUserByEmailAndPassword(email: string, password: string): Observable<User[]> {
    return this.httpClient.get<User[]>(
      `${this.url}/usuario?email=${email}&senha=${password}`
    ).pipe(
     tap({
      next: (data) => {
        if (data.length > 0) {
          this.logger.next(true);
        }
      }
     })
    );
  }

  watchToken(): Observable<boolean> {
    return this.logger.asObservable();
  }

  logout() {
    localStorage.clear();
    this.logger.next(false);
  }

}
