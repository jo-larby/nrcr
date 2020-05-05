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
import { VideosComponent } from "./screens/videos/videos.component";
import { GalleryComponent } from "./screens/gallery/gallery.component";
import { HallOfFameComponent } from "./screens/hall-of-fame/hall-of-fame.component";
import { FindUsComponent } from "./screens/find-us/find-us.component";
import { TouringCarLeaderboardTableComponent } from "./components/touring-car-leaderboard-table/touring-car-leaderboard-table.component";
import { MatTableModule } from "@angular/material/table";
import { BuggyLeaderboardFourWdComponent } from "./components/buggy-leaderboard-four-wd/buggy-leaderboard-four-wd.component";
import { BuggyLeaderboardTwoWdComponent } from "./components/buggy-leaderboard-two-wd/buggy-leaderboard-two-wd.component";
import { HallofFameTableComponent } from "./components/hall-of-fame-table/hall-of-fame-table.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EventsComponent,
    SideNavComponent,
    ChampionshipComponent,
    RaceResultsComponent,
    CarsAndSetupComponent,
    VideosComponent,
    GalleryComponent,
    HallOfFameComponent,
    FindUsComponent,
    TouringCarLeaderboardTableComponent,
    BuggyLeaderboardFourWdComponent,
    BuggyLeaderboardTwoWdComponent,
    HallofFameTableComponent,
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
    MatTableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
