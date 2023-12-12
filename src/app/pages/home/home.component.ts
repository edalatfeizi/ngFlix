import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../components/slider/slider.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { MoviesService } from '../../services/movies.service';
import { MoviesDto } from '../../models/movie';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SliderComponent,BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
 constructor(private moviesService: MoviesService) {}
 getMovies = this.moviesService.getPopularMovies()
 movies = {} as MoviesDto

  ngOnInit(): void {
    this.getMovies.subscribe(data => {
      this.movies = data
    })
  }

}
