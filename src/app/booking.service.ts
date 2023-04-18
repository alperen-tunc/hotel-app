import {Injectable} from '@angular/core';
import {Booking} from "./booking";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  bookinsUrl: string = "/api/bookings";

  getBookings() : Observable<Booking[]>
  {
    return this.httpClient.get<Booking[]>(this.bookinsUrl);
  }

  deleteBooking(booking: Booking):  Observable<Booking>
  {
    return this.httpClient.delete<Booking>(this.bookinsUrl + "/" + booking.id);
  }

  getBookingById(id: number): Observable<Booking>
  {
    return this.httpClient.get<Booking>(this.bookinsUrl + "/" + id);
  }

  addBooking(booking: Booking): Observable<Booking>
  {
    return this.httpClient.post<Booking>(this.bookinsUrl, booking);
  }

}
