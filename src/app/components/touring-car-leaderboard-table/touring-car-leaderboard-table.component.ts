import { Component } from "@angular/core";

@Component({
  selector: "app-touring-car-leaderboard-table",
  templateUrl: "./touring-car-leaderboard-table.component.html",
  styleUrls: ["./touring-car-leaderboard-table.component.scss"],
})
export class TouringCarLeaderboardTableComponent {
  displayedColumns: string[] = ["position", "name", "points", "races"];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  position: number;
  name: string;
  points: number;
  races: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Nichola", points: 100, races: true },
  { position: 2, name: "Jo", points: 75, races: false },
  { position: 3, name: "Russell", points: 50, races: true },
  { position: 4, name: "Anthony", points: 10, races: false },
];
