import { Component, Input, OnInit, ViewChild,Output, EventEmitter, AfterViewInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Breed } from '../../../../models/breed.model';

@Component({
  selector: 'app-breed-table',
  standalone:true,
  templateUrl: './breed-table.component.html',
  styleUrls: ['./breed-table.component.css'],
  imports: [CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule],
})
export class BreedTableComponent {
  @Input() breeds: Breed[] = [];
  @Input() favorites: Breed[] = [];
  @Output() toggleFavorite = new EventEmitter<Breed>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  paginatedBreeds: Breed[] = [];

  displayedColumns: string[] = ['image', 'name', 'origin', 'energy_level', 'affection_level', 'actions'];
  searchtTerm: string='';
  selectedEnergyLevel: string = '';
  energyLevels: number[] = [1, 2, 3, 4, 5];

  ngAfterViewInit(): void {
    this.updatePagination();
    this.paginator.page.subscribe(() => this.updatePagination());
  }

  isFavorite(breed: Breed): boolean {
    return this.favorites.some(fav => fav.id === breed.id);
  }

  toggle(breed: Breed): void {
    this.toggleFavorite.emit(breed);
  }
  filteredBreeds():Breed[]{
    return this.breeds.filter(breed => {
      const matchesName = breed.name.toLowerCase().includes(this.searchtTerm.toLowerCase());
      const matchesEnergy = this.selectedEnergyLevel
        ? breed.energy_level === parseInt(this.selectedEnergyLevel)
        : true;
      return matchesName && matchesEnergy;
  });
  }
   updatePagination(): void {
    const filtered = this.filteredBreeds();
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
    this.paginatedBreeds = filtered.slice(startIndex, endIndex);
  }
  onFiltersChanged(): void {
    if (this.paginator) {
      this.paginator.firstPage();
      this.updatePagination();
    }
  }
}
