import { Movie, MoviesDto } from './movie'

export type TvShow = {
  id: number
  backdrop_path: string
  genre_ids: number[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  name: string
  vote_average: number
  vote_count: number
  first_air_date: string
}

export type TvShowsDto = {
  page: number
  results: TvShow[]
  total_pages: number
  total_results: number
}

export function mapToMovies(tvShows: TvShow[]): Movie[] {
  return tvShows.map((tvShow: TvShow) => {
    return {
      ...tvShow,
      title: tvShow.name,
      original_title: tvShow.original_name,
    }
  })
}

export function mapToMovie(tvshow: TvShow): Movie {
  return {
    ...tvshow,
    title: tvshow.name,
    original_title: tvshow.original_name,
  }
}

export function mapToMoviesDto(tvShowsDto: TvShowsDto): MoviesDto {
  return {
    results: tvShowsDto.results.map(mapToMovie),
    total_pages: tvShowsDto.total_pages,
    total_results: tvShowsDto.total_results,
    page: tvShowsDto.page,
  }
}
