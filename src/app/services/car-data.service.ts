import { Injectable } from "@angular/core";
import { IHallofFame } from "../interfaces/hall-of-fame.interface";
import { IDashboardFourWd } from "../interfaces/dashboard-fourwd.interface";
import { IDashboardTwoWd } from "../interfaces/dashboard-twowd.interface";
import { IDashboardTouringCars } from "../interfaces/dashboard-touring-cars.interface";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CarDataService {
  constructor(private httpClient: HttpClient) {}
  public getHallofFame(): Observable<IHallofFame[]> {
    return of([
      {
        seasons: "Spring 2018",
        touringCars: "Nichola",
        fourwdbuggies: "Jo",
        twowdbuggies: "Russell",
      },
      {
        seasons: "Spring 2018",
        touringCars: "Adam",
        fourwdbuggies: "Chris",
        twowdbuggies: "Will",
      },
    ]);
  }

  public getDashboardFourWdData(): Observable<IDashboardFourWd[]> {
    return of([
      {
        position: 1,
        name: "Nichola",
        points: 100,
        races: true,
      },
    ]);
  }

  public getDashboardTwoWdData(): Observable<IDashboardTwoWd[]> {
    return of([
      {
        position: 1,
        name: "Jo",
        points: 70,
        races: false,
      },
    ]);
  }

  public getDashboardTouringCars(): Observable<IDashboardTouringCars[]> {
    return of([
      {
        position: 1,
        name: "Russell",
        points: 60,
        races: true,
      },
    ]);
  }

  public getRaceResults() {
    return this.httpClient.get("/api/race-results");
  }
}
