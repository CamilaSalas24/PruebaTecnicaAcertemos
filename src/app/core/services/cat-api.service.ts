import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Breed } from '../../models/breed.model';

@Injectable({ providedIn: 'root' })
export class CatApiService {
  private apiUrl = 'https://api.thecatapi.com/v1/breeds';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(this.apiUrl);
  }
}