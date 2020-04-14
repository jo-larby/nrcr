import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from "./screens/dashboard/dashboard.component";
import { EventsComponent } from "./screens/events/events.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ChampionshipComponent } from "./screens/championship/championship.component";
import { RaceResultsComponent } from "./screens/race-results/race-results.component";
import { MatInputModule } from "@angular/material/input";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CarsAndSetupComponent } from "./screens/cars-and-setup/cars-and-setup.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatVideoModule } from "mat-video";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EventsComponent,
    SideNavComponent,
    ChampionshipComponent,
    RaceResultsComponent,
    CarsAndSetupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule,
    MatVideoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
