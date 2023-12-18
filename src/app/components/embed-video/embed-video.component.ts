import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Video } from '../../models/video'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-embed-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './embed-video.component.html',
  styleUrl: './embed-video.component.scss',
})
export class EmbedVideoComponent implements OnInit {
  @Input() video: Video | null = null
  videoUrl: SafeResourceUrl | null = null

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.video?.key}`
    )
  }
}
