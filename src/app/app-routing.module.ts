import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./screens/dashboard/dashboard.component";
import { EventsComponent } from "./screens/events/events.component";
import { RaceResultsComponent } from "./screens/race-results/race-results.component";
import { ChampionshipComponent } from "./screens/championship/championship.component";
import { CarsAndSetupComponent } from "./screens/cars-and-setup/cars-and-setup.component";
import { VideosComponent } from "./screens/videos/videos.component";
import { GalleryComponent } from "./screens/gallery/gallery.component";
import { HallOfFameComponent } from "./screens/hall-of-fame/hall-of-fame.component";
import { FindUsComponent } from "./screens/find-us/find-us.component";

const routes: Routes = [
  {
    path: "cars-and-setup",
    component: CarsAndSetupComponent,
  },
  {
    path: "videos",
    component: VideosComponent,
  },
  {
    path: "gallery",
    component: GalleryComponent,
  },
  {
    path: "hall-of-fame",
    component: HallOfFameComponent,
  },
  {
    path: "where-to-find-us",
    component: FindUsComponent,
  },
  {
    path: "events",
    component: EventsComponent,
  },
  {
    path: "race-results",
    component: RaceResultsComponent,
  },
  {
    path: "championship",
    component: ChampionshipComponent,
  },
  {
    path: "",
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
