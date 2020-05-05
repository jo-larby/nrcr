import { Component, OnInit } from "@angular/core";
import { CarDataService } from "src/app/services/car-data.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(private carDataService: CarDataService) {}

  ngOnInit() {
    this.carDataService.getRaceResults().subscribe((data) => {
      console.log("Race Results: ", data);
    });
  }
}
