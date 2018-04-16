import { Injectable } from '@angular/core';

@Injectable()
export class EventsService {

  events: any = [];

  new_event: any = {
    start: 0,
    duration: 0,
    title: '',
    width: '200px',
    left: '47px'
  };

  constructor() { }
  addEvent(n_event) {
    if ( ((+n_event.start_hours - 8) * 60 + +n_event.start_minutes + +n_event.duration) < 540) {
      this.new_event.title = n_event.title;
      this.new_event.duration = +n_event.duration;
      this.new_event.start = (+n_event.start_hours - 8) * 60 + (+n_event.start_minutes);


      this.events.forEach( (event) => {
        if (this.new_event.start >= event.start && this.new_event.start <= (event.start + event.duration)) {
          this.add_conflicting_event(event);
        } else if (event.start >= this.new_event.start && event.start <= (this.new_event.start + this.new_event.duration)) {
          this.add_conflicting_event(event);
        }

      });

      this.events.push(this.new_event);
      localStorage.setItem( 'events', JSON.stringify(this.events) );
      console.log(this.events);
    }
  }

  getEvents() {
    this.events = JSON.parse(localStorage.getItem('events')) || [];
    return this.events;
  }
  add_conflicting_event(event) {
    this.new_event.width = '100px';
    this.new_event.left = '147px';
    event.width = '100px';
  }
  remove_event( removed ) {
    this.events.forEach ((event, i) => {
      if (event.title === removed) {
        this.events.splice(i, 1);
      }
    });
    localStorage.setItem( 'events', JSON.stringify(this.events) );
  }
}
