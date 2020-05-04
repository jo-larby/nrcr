import { Component } from "@angular/core";
import { CarDataService } from "src/app/services/car-data.service";
import { IDashboardTwoWd } from "src/app/interfaces/dashboard-twowd.interface";

@Component({
  selector: "app-buggy-leaderboard-two-wd",
  templateUrl: "./buggy-leaderboard-two-wd.component.html",
  styleUrls: ["./buggy-leaderboard-two-wd.component.scss"],
})
export class BuggyLeaderboardTwoWdComponent {
  public dataSource: IDashboardTwoWd[];
  constructor(private carDataService: CarDataService) {
    this.dataSource = this.carDataService.getDashboardTwoWdData();
  }
  displayedColumns: string[] = ["position", "name", "points", "races"];
}
