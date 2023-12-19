import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MoviesService } from '../../services/movies.service'
import { Observable } from 'rxjs'
import { MoviesDto } from '../../models/movie'
import { ShowItemComponent } from '../show-item/show-item.component'
import { InputTextModule } from 'primeng/inputtext'
import { PaginatorModule, PaginatorState } from 'primeng/paginator'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    PaginatorModule,
    FormsModule,
    ShowItemComponent,
  ],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.scss',
})
export class ShowsListComponent implements OnInit {
  showsList$: Observable<MoviesDto> | null = null
  searchTerm = ''
  page = 1
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getPagedShows(1)
  }

  getPagedShows(page: number, searchTerm?: string) {
    this.showsList$ = this.moviesService.searchMovies(page, searchTerm)
  }

  search() {
    this.getPagedShows(1, this.searchTerm)
  }

  pageChanged(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1
    this.getPagedShows(pageNumber, this.searchTerm)
  }
}
