import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Movie } from '../../models/movie'
import { transition, trigger, useAnimation } from '@angular/animations'
import { fadeIn, fadeOut } from './slider.animations'
import { imagesBaseUrl } from '../../constants/image-sizes'

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
animations: [
    trigger("carouselAnimation", [
      transition("void => *", [useAnimation(fadeIn, {params: { time: '1300ms' }} )]),
      transition("* => void", [useAnimation(fadeOut, {params: { time: '1300ms' }})]),
    ])
  ]
})
export class SliderComponent {

 @Input() moviesList : Movie[] = []
  currentSlide = 0;
  imagesBaseUrl = imagesBaseUrl
  moviesLen = 0

  

  onPreviousClick(){
    
    const previous = this.currentSlide -1;
    this.currentSlide = previous < 0 ? this.moviesList.length - 1 : previous;
  }

  onNextClick(){
    const next = this.currentSlide +1;
    this.currentSlide = next === this.moviesList.length ? 0 : next;
  }

}
