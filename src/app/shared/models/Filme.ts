export interface Filme {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
}

export interface FilmeResponse {
    results:Filme[]
}
