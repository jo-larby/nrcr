import { Injectable } from "@angular/core";
import { IHallofFame } from "../interfaces/hall-of-fame.interface";
import { IDashboardFourWd } from "../interfaces/dashboard-fourwd.interface";
import { IDashboardTwoWd } from "../interfaces/dashboard-twowd.interface";
import { IDashboardTouringCars } from "../interfaces/dashboard-touring-cars.interface";

@Injectable({
  providedIn: "root",
})
export class CarDataService {
  constructor() {}
  public getHallofFame(): IHallofFame[] {
    return [
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
    ];
  }

  public getDashboardFourWdData(): IDashboardFourWd[] {
    return [
      {
        position: 1,
        name: "Nichola",
        points: 100,
        races: true,
      },
    ];
  }

  public getDashboardTwoWdData(): IDashboardTwoWd[] {
    return [
      {
        position: 1,
        name: "Jo",
        points: 70,
        races: false,
      },
    ];
  }

  public getDashboardTouringCars(): IDashboardTouringCars[] {
    return [
      {
        position: 1,
        name: "Russell",
        points: 60,
        races: true,
      },
    ];
  }
}
