import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FavoritesService } from '../../../../core/services/favorites.service';
import { BreedTableComponent } from '../../components/breed-table/breed-table.component';
import { Breed } from '../../../../models/breed.model';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-favorites-view',
  standalone: true,
  imports: [CommonModule, MatCardModule,BreedTableComponent, MatToolbarModule],
  templateUrl: './favorites-view.component.html',
  styleUrls: ['./favorites-view.component.css']
})
export class FavoritesViewComponent {
  private favoritesService = inject(FavoritesService);
  favorites: Breed[] = [];

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();
  }
}
