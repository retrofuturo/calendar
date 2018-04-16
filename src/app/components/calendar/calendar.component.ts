import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  evs: any;

  event: any = {
    title: '',
    start_hours: '',
    start_minutes: '',
    duration: ''
  };

  removed: string;

  events_render: any = [];

  constructor(
    public eventsService: EventsService
  ) { }


  onSubmit() {
    this.eventsService.addEvent(this.event);
    this.event = {
      title: '',
      start_hours: '',
      start_minutes: '',
      duration: ''
    };
    this.renderEvents();
  }

  renderEvents() {
    this.evs = this.eventsService.getEvents();

    this.events_render = JSON.parse(JSON.stringify(this.evs));

    console.log(this.evs);

    this.events_render = this.events_render.map( (ev) => {
      ev.start = ev.start + 'px';
      ev.duration = ev.duration + 'px';
      return ev;
    });
  }

  removeEvent() {
    this.eventsService.remove_event( this.removed );
    this.removed = '';
    this.renderEvents();
  }

  ngOnInit() {
    this.renderEvents();
  }
}
