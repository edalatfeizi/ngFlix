import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MoviesService } from '../../services/movies.service'
import { Observable } from 'rxjs'
import { Genre, Movie, MoviesDto } from '../../models/movie'
import { ShowItemComponent } from '../show-item/show-item.component'
import { PaginatorModule, PaginatorState } from 'primeng/paginator'
import { ActivatedRoute, RouterModule } from '@angular/router'

@Component({
  selector: 'app-genres',
  standalone: true,
  imports: [CommonModule, RouterModule, ShowItemComponent, PaginatorModule],
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss',
})
export class GenresComponent implements OnInit {
  constructor(
    private mService: MoviesService,
    private route: ActivatedRoute
  ) {}

  genres$: Observable<Genre[]> | null = null
  shows$: Observable<MoviesDto> | null = null
  genreId = ''
  ngOnInit(): void {
    this.genres$ = this.mService.getMoviesGenres()

    this.route.params.subscribe((params) => {
      this.genreId = params['genreId']
      this.getPagedShows(1, this.genreId)
    })
  }

  getPagedShows(pageNumber: number, genreId: string) {
    this.genreId = genreId
    this.shows$ = this.mService.getMoviesByGenreId(pageNumber, genreId)
  }

  pageChanged(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1
    this.getPagedShows(pageNumber, this.genreId)
  }
}
