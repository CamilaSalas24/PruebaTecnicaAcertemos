import { Routes } from '@angular/router';
import { BreedListComponent } from './features/breeds/pages/breed-list/breed-list.component';
import { FavoritesViewComponent } from './features/breeds/pages/favorites-view/favorites-view.component';

export const AppRoutes: Routes = [
  { path: '', component: BreedListComponent },
  { path: 'favoritos', component: FavoritesViewComponent },
  { path: '**', redirectTo: '' }
];
