import { Component } from "@angular/core";
import { IDashboardTouringCars } from "src/app/interfaces/dashboard-touring-cars.interface";
import { CarDataService } from "src/app/services/car-data.service";

@Component({
  selector: "app-touring-car-leaderboard-table",
  templateUrl: "./touring-car-leaderboard-table.component.html",
  styleUrls: ["./touring-car-leaderboard-table.component.scss"],
})
export class TouringCarLeaderboardTableComponent {
  public dataSource: IDashboardTouringCars[];
  constructor(private carDataService: CarDataService) {
    this.dataSource = this.carDataService.getDashboardTouringCars();
  }
  displayedColumns: string[] = ["position", "name", "points", "races"];
}
