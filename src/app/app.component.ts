import { Component } from "@angular/core";
import { FilmsService } from "./services/films.service";
import { NowPlayingResponse } from "./interfaces/now-playing-response";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "filmApp";

  constructor(private _nowPlayingService: FilmsService) {
    this._nowPlayingService.getNowPlayingFilms().subscribe((resp) => {
      console.log(resp);
    });
  }
}
