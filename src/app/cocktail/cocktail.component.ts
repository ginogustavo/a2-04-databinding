import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-cocktail",
  templateUrl: "./cocktail.component.html",
  styleUrls: ["./cocktail.component.css"],
})
export class CocktailComponent implements OnInit {
  newServerName = "";
  newServerContent = "";

  @Output("srvCreated") serverEmitter = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintEmitter = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    this.serverEmitter.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.blueprintEmitter.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }
}
