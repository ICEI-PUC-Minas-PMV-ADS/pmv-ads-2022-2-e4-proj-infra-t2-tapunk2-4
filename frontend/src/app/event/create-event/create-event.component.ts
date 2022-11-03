import { EventService } from './../event.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Event } from '../event.interface';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  formEvent: FormGroup;

  constructor(
    private fb: FormBuilder,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.formEvent = this.fb.group({
      dataEvento: ['', Validators.required],
      //endereco: ['', Validators.required],
      modalidade: ['', Validators.required],
      descricao: ['', Validators.required]
    })
  }

  addEvent(event: Event) {
    this.eventService.addEvent(event).subscribe({
      next: () => {
        alert('Cadastro realizado com sucesso!');
        this.formEvent.reset();
      },
      error: () => alert('Algo deu errado, tente novamente :(')
    })
  }

}
