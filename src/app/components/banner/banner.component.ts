import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowItemComponent } from '../show-item/show-item.component';
import { MoviesDto } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule,ShowItemComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
constructor(private moviesService: MoviesService){}

@Input() movies : MoviesDto = {} as MoviesDto
upcomingMovies = this.moviesService.getPopularMovies()

}
