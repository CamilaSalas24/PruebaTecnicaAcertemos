import { TestBed } from '@angular/core/testing';
import { FavoritesService } from './favorites.service';
import { Breed } from '../../models/breed.model';

describe('FavoritesService', () => {
  let service: FavoritesService;

  const mockBreed: Breed = {
    id: 'abys',
    name: 'Abyssinian',
    description: 'Active and social',
    energy_level: 5,
    affection_level: 4,
    origin: 'Egypt',
    image: { url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg' }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a breed to favorites', () => {
    service.addFavorite(mockBreed);
    const favorites = service.getFavorites();
    expect(favorites.length).toBe(1);
    expect(favorites[0]).toEqual(mockBreed);
  });

  it('should not add duplicate breeds to favorites', () => {
    service.addFavorite(mockBreed);
    service.addFavorite(mockBreed);
    expect(service.getFavorites().length).toBe(1);
  });

  it('should remove a breed from favorites', () => {
    service.addFavorite(mockBreed);
    service.removeFavorite(mockBreed);
    expect(service.getFavorites().length).toBe(0);
  });

  it('should return an empty array if no favorites added', () => {
    expect(service.getFavorites()).toEqual([]);
  });
});
