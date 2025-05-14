import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BreedService } from './breed.service';
import { Breed } from '../../models/breed.model';
describe('BreedService', () => {
  let service: BreedService;
  let httpMock: HttpTestingController;

  const mockBreeds: Breed[] = [
    {
      id: 'abys',
      name: 'Abyssinian',
      description: 'Active and social',
      energy_level: 5,
      affection_level: 4,
      origin: 'Egypt',
      image: { url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg' }
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BreedService]
    });

    service = TestBed.inject(BreedService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya llamadas pendientes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch breeds from API', () => {
    service.getBreeds().subscribe((breeds) => {
      expect(breeds.length).toBe(1);
      expect(breeds).toEqual(mockBreeds);
    });

    const req = httpMock.expectOne('https://api.thecatapi.com/v1/breeds');
    expect(req.request.method).toBe('GET');
    req.flush(mockBreeds);
  });
});
