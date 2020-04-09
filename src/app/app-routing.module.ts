import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { EventsComponent } from './screens/events/events.component';
import { RaceResultsComponent } from './screens/race-results/race-results.component';
import { ChampionshipComponent } from './screens/championship/championship.component';
import { CarsAndSetupComponent } from './screens/cars-and-setup/cars-and-setup.component';

    const routes: Routes = [
        {
            path: 'events',
            component: EventsComponent,  
        },
        {
            path: 'race-results',
            component: RaceResultsComponent,  
        },
        {
            path: 'championship',
            component: ChampionshipComponent,  
        },
        {
            path: 'cars-and-setup',
            component: CarsAndSetupComponent,  
        },
        {
            path: '',
            component: DashboardComponent,  
        },
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }