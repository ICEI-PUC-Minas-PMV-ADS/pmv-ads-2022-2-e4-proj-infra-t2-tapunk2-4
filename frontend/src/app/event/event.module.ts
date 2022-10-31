import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { CreateEventComponent } from './create-event/create-event.component';
import { ListEventComponent } from './list-event/list-event.component';


@NgModule({
  declarations: [
    ListEventComponent,
    CreateEventComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }
