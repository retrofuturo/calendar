import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { EventsService } from "./services/events.service";

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';



@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
