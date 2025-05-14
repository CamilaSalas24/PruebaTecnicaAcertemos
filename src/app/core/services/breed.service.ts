import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Breed } from '../../models/breed.model';

@Injectable({ providedIn: 'root' })
export class BreedService {
  private API_URL = 'https://api.thecatapi.com/v1/breeds';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(this.API_URL);
  }
}