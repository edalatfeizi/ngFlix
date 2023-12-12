import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MoviesDto } from '../models/movie'
import { TMDBApiKey } from '../constants/ApiKeys'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}
    private apiUrl = "https://api.themoviedb.org/3"
    
    getPopularMovies() {
      return this.httpClient.get<MoviesDto>(
        `${this.apiUrl}/movie/popular?api_key=${TMDBApiKey}`
      )}

    getUpcomingMovies() {
      return this.httpClient.get<MoviesDto>(
        `${this.apiUrl}/movie/upcoming?api_key=${TMDBApiKey}`
      )}
}
