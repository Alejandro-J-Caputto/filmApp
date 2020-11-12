import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import Swiper from "swiper/bundle";

import { Movie } from "../../interfaces/now-playing-response";

@Component({
  selector: "app-slideshow",
  templateUrl: "./slideshow.component.html",
  styleUrls: ["./slideshow.component.css"],
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() movies: Movie[];

  constructor() {}

  ngAfterViewInit() {
    const mySwiper = new Swiper(".swiper-container", {
      // Optional parameters

      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  }

  ngOnInit(): void {
    console.log(this.movies);
  }
}
