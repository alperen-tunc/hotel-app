import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './bookings/bookings.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { EventSignupComponent } from "./event-signup/event-signup.component";

const routes: Routes = [
  {
    path:'bookings', component:BookingComponent
  },
  {
    path:'create', component:CreateBookingComponent
  },
  {
    path:'edit/:id', component:CreateBookingComponent
  },
  {
    path:'events', component:EventSignupComponent
  },
  {
    path:'', redirectTo:'bookings', pathMatch:'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
