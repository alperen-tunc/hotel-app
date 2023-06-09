import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {BookingService} from "../booking.service";

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit
{
  constructor (private router: Router,
                private activatedRoute: ActivatedRoute,
                private bookingService: BookingService) {}

  booking: Booking = {
    id: 11,
    name: "Your name",
    roomNumber: 110,
    startDate: new Date,
    endDate: new Date
  }

  ngOnInit(): void
  {
    if(this.router.url != '/create')
    {
      var id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
      this.bookingService.getBookingById(id).subscribe((result) => {
        this.booking = result;
      });
    }
  }

  save(): void
  {
    this.bookingService.addBooking(this.booking).subscribe();
    this.router.navigate(['bookings']);
  }

  dateChanged(event: Event, isStart: boolean)
  {
    var val = (event.target as HTMLInputElement).value;

    if(isStart)
    {
      this.booking.startDate = new Date(val);
    } else
    {
      this.booking.endDate = new Date(val);
    }
  }


}
