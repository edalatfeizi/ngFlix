import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MoviesService } from '../../services/movies.service'
import { Observable, map } from 'rxjs'
import { MoviesDto } from '../../models/movie'
import { ShowItemComponent } from '../show-item/show-item.component'
import { InputTextModule } from 'primeng/inputtext'
import { PaginatorModule, PaginatorState } from 'primeng/paginator'
import { FormsModule } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { mapToMoviesDto } from '../../models/tvshow'
import { TvShowsService } from '../../services/tvshows.service'

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
  listType: 'movie' | 'tv' = 'movie'
  showsList$: Observable<MoviesDto> | null = null
  searchTerm = ''
  page = 1
  totalPages = 1
  constructor(
    private moviesService: MoviesService,
    private tvShowsService: TvShowsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listType = this.router.snapshot.params['listType']

    this.getPagedShows(1)
  }

  getPagedShows(page: number, searchTerm?: string) {
    if (this.listType === 'movie')
      this.showsList$ = this.moviesService.searchMovies(page, searchTerm)
    else
      this.showsList$ = this.tvShowsService
        .searchTvShows(page, searchTerm)
        .pipe(map(mapToMoviesDto))
  }

  search() {
    this.getPagedShows(1, this.searchTerm)
  }

  pageChanged(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1
    this.getPagedShows(pageNumber, this.searchTerm)
  }
}
