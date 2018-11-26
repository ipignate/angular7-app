import * as express from 'express';
import {Application} from "express";
import {getAllMovies, getMovieById} from "./get-Movies.route";
import {searchActors} from "./search-Actors.route";

const app: Application = express();

app.route('/api/Movies').get(getAllMovies);

app.route('/api/Movies/:id').get(getMovieById);

app.route('/api/Actors').get(searchActors);

const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});




