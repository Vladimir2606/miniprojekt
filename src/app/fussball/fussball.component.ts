import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fussball",
  templateUrl: "./fussball.component.html",
  styleUrls: ["./fussball.component.css"]
})
export class FussballComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getCardColClass() {
    return "col-5";
  }
}
