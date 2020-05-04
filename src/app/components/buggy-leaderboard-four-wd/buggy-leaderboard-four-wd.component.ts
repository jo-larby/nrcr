import { Component } from "@angular/core";
import { CarDataService } from "src/app/services/car-data.service";
import { IDashboardFourWd } from "src/app/interfaces/dashboard-fourwd.interface";

@Component({
  selector: "app-buggy-leaderboard-four-wd",
  templateUrl: "./buggy-leaderboard-four-wd.component.html",
  styleUrls: ["./buggy-leaderboard-four-wd.component.scss"],
})
export class BuggyLeaderboardFourWdComponent {
  public dataSource: IDashboardFourWd[];
  constructor(private carDataService: CarDataService) {
    this.dataSource = this.carDataService.getDashboardFourWdData();
  }
  displayedColumns: string[] = ["position", "name", "points", "races"];
}
