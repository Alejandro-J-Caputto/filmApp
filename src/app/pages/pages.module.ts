import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [HomeComponent, FilmsComponent, SearchComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
