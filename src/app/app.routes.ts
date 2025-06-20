import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'dashboard',
    loadComponent: ()=> import( './gifs/pages/dashboard-app/dashboard-app.component' )
  },

  {
    path : '**',
    redirectTo: 'dashboard'
  }



];
