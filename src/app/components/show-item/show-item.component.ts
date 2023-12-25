import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Movie } from '../../models/movie'
import { imagesBaseUrl } from '../../constants/image-sizes'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-show-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss',
})
export class ShowItemComponent {
  @Input() showItem: Movie | null = null
  @Input() showType: string | null = null
  imagesBaseUrl = imagesBaseUrl
}
