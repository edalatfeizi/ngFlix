import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Movie, MoviesDto } from '../models/movie'
import { TMDBApiKey } from '../constants/ApiKeys'
import { MovieTypes } from '../enums/movietypes'
import { map } from 'rxjs'
import { TvShowsDto } from '../models/tvshow'
import { VideosDto } from '../models/video'
import { MoviePhotosDto } from '../models/photos'
import { CreditsDto } from '../models/credits'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}
  private apiUrl = 'https://api.themoviedb.org/3'

  getMoviesByType(movieType: MovieTypes, count = 20) {
    return this.httpClient
      .get<MoviesDto>(`${this.apiUrl}/movie/${movieType}?api_key=${TMDBApiKey}`)
      .pipe(map((data) => data.results.slice(0, count)))
  }

  getTvShowsByType(movieType: MovieTypes, count = 20) {
    return this.httpClient
      .get<TvShowsDto>(`${this.apiUrl}/tv/${movieType}?api_key=${TMDBApiKey}`)
      .pipe(map((data) => data.results.slice(0, count)))
  }

  getMovieById(id: string) {
    return this.httpClient.get<Movie>(
      `${this.apiUrl}/movie/${id}?api_key=${TMDBApiKey}`
    )
  }

  getMovieVideosById(id: string) {
    return this.httpClient
      .get<VideosDto>(`${this.apiUrl}/movie/${id}/videos?api_key=${TMDBApiKey}`)
      .pipe(map((data) => data.results))
  }

  getMoviePhotosById(id: string) {
    return this.httpClient
      .get<MoviePhotosDto>(
        `${this.apiUrl}/movie/${id}/photos?api_key=${TMDBApiKey}`
      )
      .pipe(map((data) => data.backdrops))
  }
  getMovieActorsById(id: string) {
    return this.httpClient
      .get<CreditsDto>(
        `${this.apiUrl}/movie/${id}/credits?api_key=${TMDBApiKey}`
      )
      .pipe(map((data) => data.cast))
  }

  getMovieSimilar(id: string, count = 20) {
    return this.httpClient
      .get<MoviesDto>(
        `${this.apiUrl}/movie/${id}/similar?api_key=${TMDBApiKey}`
      )
      .pipe(map((data) => data.results.slice(0, count)))
  }
}
