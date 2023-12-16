import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute } from '@angular/router'
import { MoviesService } from '../../services/movies.service'
import { Observable } from 'rxjs'
import { Movie } from '../../models/movie'
import { SliderComponent } from '../../components/slider/slider.component'
import { TabViewModule } from 'primeng/tabview'
import { IMAGES_SIZES } from '../../constants/image-sizes'

@Component({
  selector: 'app-show-detail',
  standalone: true,
  imports: [CommonModule, TabViewModule, SliderComponent],
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  showId: string = ''
  show$: Observable<Movie> | null = null
  imagesSizes = IMAGES_SIZES
  constructor(
    private router: ActivatedRoute,
    private moviesService: MoviesService
  ) {}
  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.showId = params['id']

      this.show$ = this.moviesService.getMovieById(this.showId)
    })

    //this.showId = this.router.snapshot.params['id'];
  }
}
