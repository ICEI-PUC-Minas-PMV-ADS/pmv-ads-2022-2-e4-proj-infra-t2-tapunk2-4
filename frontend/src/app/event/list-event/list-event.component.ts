import { EventService } from './../event.service';
import { Component, OnInit } from '@angular/core';
import { Event } from '../event.interface';

@Component({
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss']
})
export class ListEventComponent implements OnInit {

  events: Event[]

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.listEvents();
  }

  listEvents(): void {
    this.eventService.getEvents().subscribe({
      next: (resp) => this.events = resp
    })
  }

}
