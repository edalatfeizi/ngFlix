export type VideosDto = {
  id: string
  results: Video[]
}

export type Video = {
  key: string
  site: string
  name: string
}
