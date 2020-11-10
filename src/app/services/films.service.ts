import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { NowPlayingResponse } from "../interfaces/now-playing-response";

@Injectable({
  providedIn: "root",
})
export class FilmsService {
  constructor(private http: HttpClient) {}
  getNowPlayingFilms(): Observable<NowPlayingResponse> {
    return this.http.get<NowPlayingResponse>(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=43c23268c4b3e469cf26fd40a95edbd2&language=en-US&page=1"
    );
  }
}
