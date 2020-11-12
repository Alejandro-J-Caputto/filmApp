import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { FilmsComponent } from "./pages/films/films.component";
import { SearchComponent } from "./pages/search/search.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "film/:id",
    component: FilmsComponent,
  },
  {
    path: "search/:searchInput",
    component: SearchComponent,
  },
  {
    path: "**",
    redirectTo: "/home",
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
