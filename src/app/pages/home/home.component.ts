import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SliderComponent } from '../../components/slider/slider.component'
import { BannerComponent } from '../../components/banner/banner.component'
import { MoviesService } from '../../services/movies.service'
import { MovieTypes } from '../../enums/movietypes'
import { map } from 'rxjs'
import { mapToMovies } from '../../models/tvshow'
import { TvShowsService } from '../../services/tvshows.service'
import { TvShowTypes } from '../../enums/tvshowtypes'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SliderComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private moviesService: MoviesService,
    private tvShowsService: TvShowsService
  ) {}

  getPopularMovies$ = this.moviesService.getMoviesByType(MovieTypes.POPULAR, 12)
  getUpcomingMovies$ = this.moviesService.getMoviesByType(
    MovieTypes.UO_COMING,
    12
  )
  getTopRatedMovies$ = this.tvShowsService
    .getTvShowsByType(TvShowTypes.POPULAR, 12)
    .pipe(map(mapToMovies))

  getPopularTvShows$ = this.moviesService
    .getTvShowsByType(MovieTypes.POPULAR, 12)
    .pipe(map(mapToMovies))
}
