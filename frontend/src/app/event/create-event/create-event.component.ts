import { EventService } from './../event.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Event } from '../event.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
  providers: [DatePipe]
})
export class CreateEventComponent implements OnInit {

  formEvent: FormGroup;

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private datePipe: DatePipe 
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
    event.dataEvento = this.datePipe.transform(event.dataEvento, 'dd/MM/yyyy');
    
    this.eventService.addEvent(event).subscribe({
      next: () => {
        alert('Cadastro realizado com sucesso!');
        this.formEvent.reset();
      },
      error: () => alert('Algo deu errado, tente novamente :(')
    })
  }

}
