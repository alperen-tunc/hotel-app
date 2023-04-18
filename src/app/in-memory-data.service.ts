import { Injectable } from '@angular/core';
import {InMemoryDbService } from "angular-in-memory-web-api";
import { Bookings } from "./mock-bookings";
import {Observable} from "rxjs";
import {Booking} from "./booking";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService
{

  constructor() { }

  createDb()
  {
    const bookings: Booking[] = [
      {
        id: 1,
        name: "Alperen Tunc",
        roomNumber: 100,
        startDate: new Date,
        endDate: new Date("2021-07-21")
      },
      {
        id: 2,
        name: "Seyda Hazar",
        roomNumber: 101,
        startDate: new Date,
        endDate: new Date("2021-07-21")
      },
      {
        id: 3,
        name: "Alp Muster",
        roomNumber: 102,
        startDate: new Date,
        endDate: new Date("2021-07-21")
      },
      {
        id: 4,
        name: "Ali Kisa",
        roomNumber: 103,
        startDate: new Date,
        endDate: new Date("2021-07-21")
      },
      {
        id: 5,
        name: "Rafi Veli",
        roomNumber: 104,
        startDate: new Date,
        endDate: new Date("2021-07-21")
      },
    ]

    return {bookings};
  }
}
