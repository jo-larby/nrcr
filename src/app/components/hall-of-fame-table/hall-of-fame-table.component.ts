import { Component } from "@angular/core";
import { CarDataService } from "src/app/services/car-data.service";
import { IHallofFame } from "src/app/interfaces/hall-of-fame.interface";
import { Observable } from "rxjs";

@Component({
  selector: "app-hall-of-fame-table",
  templateUrl: "./hall-of-fame-table.component.html",
  styleUrls: ["./hall-of-fame-table.component.scss"],
})
export class HallofFameTableComponent {
  public dataSource$: Observable<IHallofFame[]>;
  constructor(private carDataService: CarDataService) {
    this.dataSource$ = this.carDataService.getHallofFame();
  }
  displayedColumns: string[] = [
    "seasons",
    "touringCars",
    "fourwdbuggies",
    "twowdbuggies",
  ];
}
