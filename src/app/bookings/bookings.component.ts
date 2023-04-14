import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Bookings } from '../mock-bookings';

@Component({
  selector: 'app-booking',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})

export class BookingComponent implements OnInit
{
  constructor() {}

  bookings = Bookings;


  ngOnInit(): void 
  {

  }

  delete(booking: Booking): void
  {
    var index = Bookings.indexOf(booking);
    Bookings.splice(index,1);
  }
}
