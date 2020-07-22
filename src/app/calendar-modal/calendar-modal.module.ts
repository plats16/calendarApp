import { NgModule } from '@angular/core';
import { CommonModule,DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarModalPageRoutingModule } from './calendar-modal-routing.module';

import { CalendarModalPage } from './calendar-modal.page'; 

import { NgCalendarModule } from 'ionic2-calendar'; 


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarModalPageRoutingModule,
    NgCalendarModule, 
  ],
  declarations: [CalendarModalPage],
  providers: [DatePipe]
})
export class CalendarModalPageModule {}
