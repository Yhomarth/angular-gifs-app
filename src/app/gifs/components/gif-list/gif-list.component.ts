import { Component, input } from '@angular/core';
import { GifListItemComponent } from "./gif-list-item/gif-list-item.component";
import { ListItem } from '../../interfaces/list-items.interfaces';

@Component({
  selector: 'gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent {

  // esto debe de venir de un servicio
  gifsLists = input.required<ListItem[]>();

}
