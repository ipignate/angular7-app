import {Request, Response} from 'express';
import {MOVIES} from "./db-data";

export function getAllMovies(req: Request, res: Response) {

    res.status(200).json({payload:Object.values(MOVIES)});

}

export function getMovieById(req: Request, res: Response) {

    const MovieId = req.params["id"];

    const Movies:any = Object.values(MOVIES);

    const Movie = Movies.find(Movie => Movie.id == MovieId);

    res.status(200).json(Movie);
}
