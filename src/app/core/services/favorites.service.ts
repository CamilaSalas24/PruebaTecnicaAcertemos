import { Injectable } from '@angular/core';
import { Breed } from '../../models/breed.model';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private favorites: Breed[] = [];

  addFavorite(breed: Breed): void {
    if (!this.favorites.find(b => b.id === breed.id)) {
      this.favorites.push(breed);
    }
  }

  removeFavorite(breed: Breed): void {
    this.favorites = this.favorites.filter(b => b.id !== breed.id);
  }

  getFavorites(): Breed[] {
    return this.favorites;
  }
  saveFavorites(): void {
  localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}