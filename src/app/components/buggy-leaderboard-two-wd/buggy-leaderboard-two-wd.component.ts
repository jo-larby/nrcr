import { Component } from "@angular/core";

@Component({
  selector: "app-buggy-leaderboard-two-wd",
  templateUrl: "./buggy-leaderboard-two-wd.component.html",
  styleUrls: ["./buggy-leaderboard-two-wd.component.scss"],
})
export class BuggyLeaderboardTwoWdComponent {
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
