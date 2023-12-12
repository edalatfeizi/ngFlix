import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie';
import { imagesBaseUrl } from '../../constants/image-sizes';

@Component({
  selector: 'app-show-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss'
})
export class ShowItemComponent {
@Input() movie : Movie = {} as Movie
imagesBaseUrl = imagesBaseUrl
}
