import { Component, OnInit } from "@angular/core";
import { Artikel } from "../artikel";
import { DataService } from "../data.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  constructor(private dataService: DataService) {}
  ngOnInit() {}


}
