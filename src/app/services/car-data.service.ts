import { Injectable } from "@angular/core";
import { IRaceResult } from "../interfaces/race-results.interface";

@Injectable({
  providedIn: "root",
})
export class CarDataService {
  constructor() {}
  public getRaceResultData(): IRaceResult[] {
    return [
      {
        seasons: "Winter",
        touringCars: "Nichola",
        fourwdbuggies: "Jo",
        twowdbuggies: "Russell",
      },
    ];
  }
}
