import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute } from '@angular/router'
import { MoviesService } from '../../services/movies.service'
import { TvShowsService } from '../../services/tvshows.service'
import { Observable, map } from 'rxjs'
import { Movie } from '../../models/movie'
import { SliderComponent } from '../../components/slider/slider.component'
import { TabViewModule } from 'primeng/tabview'
import { IMAGES_SIZES } from '../../constants/image-sizes'
import { Video } from '../../models/video'
import { EmbedVideoComponent } from '../../components/embed-video/embed-video.component'
import { MoviePhoto } from '../../models/photos'
import { ImageModule } from 'primeng/image'
import { CarouselModule } from 'primeng/carousel'
import { Actor } from '../../models/credits'
import { mapToMovie, mapToMovies } from '../../models/tvshow'
import { BannerComponent } from '../../components/banner/banner.component'
@Component({
  selector: 'app-show-detail',
  standalone: true,
  imports: [
    CommonModule,
    TabViewModule,
    ImageModule,
    CarouselModule,
    SliderComponent,
    EmbedVideoComponent,
    BannerComponent,
  ],
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  showId = ''
  showType: 'tv' | 'movie' = 'movie'

  show$: Observable<Movie> | null = null
  showVideos$: Observable<Video[]> | null = null
  showPhotos$: Observable<MoviePhoto[]> | null = null
  showActors$: Observable<Actor[]> | null = null
  similarShows$: Observable<Movie[]> | null = null

  imagesSizes = IMAGES_SIZES
  constructor(
    private router: ActivatedRoute,
    private moviesService: MoviesService,
    private tvService: TvShowsService
  ) {}
  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.showId = params['id']
      this.showType = params['type']

      if (this.showType === 'movie') {
        this.show$ = this.moviesService.getMovieById(this.showId)
        this.showVideos$ = this.moviesService.getMovieVideosById(this.showId)
        this.showPhotos$ = this.moviesService.getMoviePhotosById(this.showId)
        this.showActors$ = this.moviesService.getMovieActorsById(this.showId)
        this.similarShows$ = this.moviesService.getMovieSimilar(this.showId, 12)
      }
      if (this.showType === 'tv') {
        this.show$ = this.tvService
          .getTvShowById(this.showId)
          .pipe(map(mapToMovie))
        this.showVideos$ = this.tvService.getTvShowVideos(this.showId)
        this.showPhotos$ = this.tvService.getTvShowImages(this.showId)
        this.showActors$ = this.tvService.getTvShowCast(this.showId)
        this.similarShows$ = this.tvService
          .getTvShowSimilar(this.showId)
          .pipe(map(mapToMovies))
      }
    })

    //this.showId = this.router.snapshot.params['id'];
  }
}
