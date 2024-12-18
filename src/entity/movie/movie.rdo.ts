export interface IMovierdo{
    Response: string;
    totalResults: string;
    Search: IMovie[];
}

export interface IMovie{
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string; 
}

export interface IMoviefilm{
    Title: string;
    Year:string;
    Rated:string;
    Released:string;
    Runtime:string;
    Genre:string;
    Director:string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: IMovieratings[];
    Metascore: string;
    imdbRating: string;
    imdbVotes:string;
    imdbID:string;
    Type:string;
    DVD:string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Reponse:string;


}

export interface IMovieratings{
    Source: string;
    Value: string;
}