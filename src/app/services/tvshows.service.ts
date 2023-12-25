import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { map } from 'rxjs'
import { TvShow, TvShowsDto } from '../models/tvshow'
import { VideosDto } from '../models/video'
import { MoviePhotosDto } from '../models/photos'
import { CreditsDto } from '../models/credits'
import { TMDBApiKey } from '../constants/ApiKeys'

@Injectable({
  providedIn: 'root',
})
export class TvShowsService {
  private apiUrl = 'https://api.themoviedb.org/3'

  constructor(private httpClient: HttpClient) {}

  getTvShowsByType(type: string, count = 20) {
    return this.httpClient
      .get<TvShowsDto>(`${this.apiUrl}/tv/${type}?api_key=${TMDBApiKey}`)
      .pipe(map((data) => data.results.slice(0, count)))
  }

  getTvShowById(id: string) {
    return this.httpClient.get<TvShow>(
      `${this.apiUrl}/tv/${id}?api_key=${TMDBApiKey}`
    )
  }

  getTvShowVideos(id: string) {
    return this.httpClient
      .get<VideosDto>(`${this.apiUrl}/tv/${id}/videos?api_key=${TMDBApiKey}`)
      .pipe(map((data) => data.results))
  }

  getTvShowImages(id: string) {
    return this.httpClient
      .get<MoviePhotosDto>(
        `${this.apiUrl}/tv/${id}/images?api_key=${TMDBApiKey}`
      )
      .pipe(map((data) => data.backdrops))
  }

  getTvShowCast(id: string) {
    return this.httpClient
      .get<CreditsDto>(`${this.apiUrl}/tv/${id}/credits?api_key=${TMDBApiKey}`)
      .pipe(map((data) => data.cast))
  }

  getTvShowSimilar(id: string) {
    return this.httpClient
      .get<TvShowsDto>(`${this.apiUrl}/tv/${id}/similar?api_key=${TMDBApiKey}`)
      .pipe(map((data) => data.results.slice(0, 12)))
  }

  searchTvShows(page: number, searchTerm?: string) {
    const uri = searchTerm ? `search/tv?query=${searchTerm}&` : 'tv/popular?'

    return this.httpClient.get<TvShowsDto>(
      `${this.apiUrl}/${uri}page=${page}&api_key=${TMDBApiKey}`
    )
    //.pipe(map((data) => data.results))
  }
}
