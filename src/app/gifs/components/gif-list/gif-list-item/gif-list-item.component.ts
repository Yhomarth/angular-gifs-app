import { Component, input } from '@angular/core';
import { ListItem } from 'src/app/gifs/interfaces/list-items.interfaces';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.component.html',
})
export class GifListItemComponent {

  gif = input.required<ListItem>();


 }
