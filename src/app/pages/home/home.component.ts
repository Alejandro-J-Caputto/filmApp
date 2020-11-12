import { Component, OnInit } from "@angular/core";
import { FilmsService } from "../../services/films.service";
import { Movie } from "../../interfaces/now-playing-response";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public movies: Movie[] = [];
  constructor(private _nowPlayingService: FilmsService) {
    this._nowPlayingService.getNowPlayingFilms().subscribe(({ results }) => {
      this.movies = results;
    });
  }

  ngOnInit(): void {}
}
