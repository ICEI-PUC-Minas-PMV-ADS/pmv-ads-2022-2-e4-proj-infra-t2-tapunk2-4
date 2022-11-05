import { environment } from './../../environments/environment';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from './token.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly url: string = environment.msLogin;

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<Token> {
    return this.httpClient.post<Token>(`${this.url}/auth`, {
      email,
      senha: password,
    }).pipe(
      tap(
        {
          next: (data) => this.saveToken(data)
        }
      )
    );
  }



  private saveToken(data: Token): void {
    localStorage.setItem("token", JSON.stringify(data));
  }
}
