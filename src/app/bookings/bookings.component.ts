import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from "../booking.service";

@Component({
  selector: 'app-booking',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})

export class BookingComponent implements OnInit
{
  constructor(private bookingService:BookingService) {}

  bookings: Booking[] = [];


  ngOnInit(): void
  {
    this.bookings = this.bookingService.getBookings();
  }

  delete(booking: Booking): void
  {
    this.bookingService.delete(booking);
  }
}
