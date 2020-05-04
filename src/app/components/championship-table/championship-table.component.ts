import { Component } from "@angular/core";
import { CarDataService } from "src/app/services/car-data.service";
import { IChampionship } from "src/app/interfaces/championship.interface";

@Component({
  selector: "app-championship-table",
  templateUrl: "./championship-table.component.html",
  styleUrls: ["./championship-table.component.scss"],
})
export class ChampionshipTableComponent {
  public dataSource: IChampionship[];
  constructor(private carDataService: CarDataService) {
    this.dataSource = this.carDataService.getChampionship();
  }
  displayedColumns: string[] = [
    "seasons",
    "touringCars",
    "fourwdbuggies",
    "twowdbuggies",
  ];
}
