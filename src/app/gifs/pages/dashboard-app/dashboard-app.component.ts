import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { GifsSideMenuComponent } from "../../components/gifs-side-menu/gifs-side-menu.component";

@Component({
  selector: 'app-dashboard-app',
  imports: [RouterOutlet, GifsSideMenuComponent],
  templateUrl: './dashboard-app.component.html'
})
export default class DashboardAppComponent { }
