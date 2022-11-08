import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubscribeService } from './subscribe.service';
import { User } from './user.interface';

@Component({
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private subscriveService: SubscribeService,
    private router: Router
  ) {}

  date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));
  dataNasc = this.date.toLocaleDateString()
  
  ngOnInit(): void {
    this.userForm = this.fb.group({
      nome: ['', Validators.required],
      apelido: ['', Validators.required],
      dataNasc: ['', Validators.required],
      sexo: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  create(user: User): void {
    this.subscriveService.addUser(user).subscribe({
      next: () => {
        alert("Cadastro realizado com sucesso!")
        this.router.navigate(['signIn'])
      },
      error: () => alert('Não foi possível realizar o cadastro, tente novamente :(')
    })
  }
}
