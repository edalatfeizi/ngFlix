import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ShowItemComponent } from '../show-item/show-item.component'
import { Movie } from '../../models/movie'

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, ShowItemComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  constructor() {}

  @Input() title: string | null = null
  @Input() shows: Movie[] = []
  @Input() showType: string | null = null
}
