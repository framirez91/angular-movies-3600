export interface Movie {
Title: string,
Year: number,
imdbID: string,
Type: string,
Poster: string
}

export interface ApiResult{
    Search: Movie[],
    totalResults: number,
    Response: boolean,
}
