import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../components/slider/slider.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { MoviesService } from '../../services/movies.service';
import { MovieTypes } from '../../enums/movietypes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SliderComponent,BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
 constructor(private moviesService: MoviesService) {}
  
 getPopularMovies$ = this.moviesService.getMoviesByType(MovieTypes.POPULAR,12)
 getUpcomingMovies$ = this.moviesService.getMoviesByType(MovieTypes.UO_COMING,12)
 getTopRatedMovies$ = this.moviesService.getMoviesByType(MovieTypes.TOP_RATED,12)
 
 getPopularTvShows$ = this.moviesService.getTvShowsByType(MovieTypes.POPULAR,12)



}
