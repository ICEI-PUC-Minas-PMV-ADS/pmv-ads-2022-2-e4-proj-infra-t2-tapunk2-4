import { SubscribeService } from './../subscribe/subscribe.service';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private subscribeService: SubscribeService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    /*
      Inicio trecho de codigo deve ser removido para para intergar com ms
    */
    this.subscribeService
      .getUserByEmailAndPassword(
        this.form.get('email')?.value,
        this.form.get('password')?.value
      )
      .subscribe({
        next: (resp) => {
          if (resp.length > 0) {
            localStorage.setItem(
              'token',
              JSON.stringify({ token: '321321312', tipo: '3213213123' })
            );
            this.router.navigate(['index']);
          } else {
            alert('Usuário não encontrato, tente novamente :(')
          }
        },
      });

    return;
    /*
      Fim trecho de codigo deve ser removido para para intergar com ms
    */

    if (this.form.valid) {
      this.loginService
        .login(this.form.get('email')?.value, this.form.get('password')?.value)
        .subscribe({
          next: () => this.router.navigate(['home']),
          error: () => alert('Senha ou usuário inválido'),
        });
    }
  }
}
