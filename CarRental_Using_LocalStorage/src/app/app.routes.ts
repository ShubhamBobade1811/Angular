import { Routes } from '@angular/router';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { BookingsComponent } from './components/bookings/bookings.component';


export const routes: Routes = [
    { path :'', redirectTo:'booking',  pathMatch:'full' },

    {path:'car', component:CarsListComponent},

    {path:'booking', component:BookingsComponent}

];
