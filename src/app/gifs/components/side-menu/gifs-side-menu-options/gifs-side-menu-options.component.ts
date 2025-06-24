import { Component } from '@angular/core';
import { MenuOption } from '../../../interfaces/menu-options.interfaces';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifs-side-menu-options.component.html',
})
export class GifsSideMenuOptionsComponent {

  menuOptions: MenuOption[] = [
    {
      icon : 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs mas populares',
      route: '/dashboard/trending'
    },
    {
      icon : 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscar Gifs',
      route: '/dashboard/search'
    }
  ];

}
