import { Component, OnInit } from "@angular/core";
interface Class {
  id: number;
  class: string;
}

interface Week {
  id: number;
  week: string;
}

interface Race {
  id: number;
  race: string;
}

interface Season {
  id: number;
  season: string;
}
@Component({
  selector: "app-race-results",
  templateUrl: "./race-results.component.html",
  styleUrls: ["./race-results.component.scss"],
})
export class RaceResultsComponent implements OnInit {
  classes: Class[] = [
    {
      id: 1,
      class: "4wd",
    },
    {
      id: 2,
      class: "2wd",
    },
  ];

  weeks: Week[] = [
    {
      id: 1,
      week: "2020-03-03",
    },
    {
      id: 2,
      week: "2020-03-27",
    },
  ];

  races: Race[] = [
    {
      id: 1,
      race: "H3",
    },
    {
      id: 2,
      race: "H2",
    },
  ];

  seasons: Season[] = [
    {
      id: 1,
      season: "Summer-20",
    },
    {
      id: 2,
      season: "Winter-21",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
