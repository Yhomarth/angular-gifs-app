import { Component, signal } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { ListItem } from '../../interfaces/list-items.interfaces';

@Component({
  selector: 'app-trending',
  imports: [  GifListComponent ],
  templateUrl: './trending.component.html',
})
export class TrendingComponent {

  gifs = signal<ListItem[]>(

    [
      { id: '1', title: 'Funny Cat', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'},
      { id: '2', title: 'Funny Cat', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'},
      { id: '3', title: 'Funny Cat', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'},
      { id: '4', title: 'Funny Cat', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'},
      { id: '5', title: 'Funny Cat', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'},
      { id: '6', title: 'Funny Cat', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg'},
      { id: '7', title: 'Funny Cat', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg'},
      { id: '8', title: 'Funny Cat', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg'},
      { id: '9', title: 'Funny Cat', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg'},
      { id: '10', title: 'Funny Cat', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg'},
      { id: '11', title: 'Funny Cat', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg'},
      { id: '12', title: 'Funny Cat', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg'}



    ]
  );

}
