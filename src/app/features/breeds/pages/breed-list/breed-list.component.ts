import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BreedTableComponent } from '../../components/breed-table/breed-table.component';
import { BreedService } from '../../../../core/services/breed.service';
import { FavoritesService } from '../../../../core/services/favorites.service';
import { Breed } from '../../../../models/breed.model';

@Component({
  selector: 'app-breed-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    BreedTableComponent,
    MatToolbarModule
  ],
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.css']
})
export class BreedListComponent implements OnInit {
  breeds: Breed[] = [];
  favorites: Breed[] = [];

  constructor(private breedService: BreedService, private favoriteService: FavoritesService) {}

  ngOnInit(): void {
    this.breedService.getBreeds().subscribe((data) => {
      this.breeds = data;
    });

    this.favorites = this.favoriteService.getFavorites();
  }

  onToggleFavorite(breed: Breed): void {
    const index = this.favorites.findIndex(fav => fav.id === breed.id);
    if (index > -1) {
      this.favorites.splice(index, 1); // eliminar de favoritos
    } else {
      this.favorites.push(breed); // agregar a favoritos
    }
  }
}
