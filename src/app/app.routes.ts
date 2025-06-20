import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'dashboard',
    loadComponent: ()=> import( './gifs/pages/dashboard-app/dashboard-app.component' ),
    children: [
      {
        path: 'trending',
        loadComponent: ()=> import( './gifs/pages/trending/trending.component' ).then( m=> m.TrendingComponent)
      },

      {
        path: 'search',
        loadComponent: ()=> import('./gifs/pages/search/search.component')
      },

      {
        path: '**',
        redirectTo: 'trending'
      }
    ]
  },



  {
    path : '**',
    redirectTo: 'dashboard'
  }



];
