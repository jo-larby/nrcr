import { Component } from "@angular/core";
import { CarDataService } from "src/app/services/car-data.service";

@Component({
  selector: "app-race-results-table",
  templateUrl: "./race-results-table.component.html",
  styleUrls: ["./race-results-table.component.scss"],
})
export class RaceResultsTableComponent {
  public dataSource: PeriodicElement[];
  constructor(private carDataService: CarDataService) {
    this.dataSource = this.carDataService.getRaceResultData();
  }
  displayedColumns: string[] = [
    "seasons",
    "touringCars",
    "fourwdbuggies",
    "twowdbuggies",
  ];
}

export interface PeriodicElement {
  seasons: string;
  touringCars: string;
  fourwdbuggies: string;
  twowdbuggies: string;
}
