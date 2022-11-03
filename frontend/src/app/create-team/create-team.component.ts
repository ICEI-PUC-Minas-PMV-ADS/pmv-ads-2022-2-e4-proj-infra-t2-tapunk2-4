import { TeamService } from './team.service';
import { Team } from './team.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {

  formTeam: FormGroup;

  constructor(
    private teamService: TeamService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formTeam = this.fb.group({
      nome: ['', Validators.required],
      modalidade: ['', Validators.required],
      descricao: ['', Validators.required],
      jogadores: this.fb.array(['', '', '', '', '', '', ''])
    })
  }

  addTeam(team: Team) {
    team.jogadores = team.jogadores.filter(jogador => jogador != '');
    this.teamService.addTeam(team).subscribe({
      next: () => {
        alert('Cadastro realizado com sucesso!')
        this.formTeam.reset();
      },
      error: () => alert('Algo deu errado, tente novamente :(')
    })
  }

}
