import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Movie} from "../model/Movie";
import {Observable} from "rxjs/Observable";
import {MoviesService} from "./Movies.service";

@Injectable()
export class MovieResolver implements Resolve<Movie> {

    constructor(private MoviesService:MoviesService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie> {
        return this.MoviesService.findMovieById(route.params['id']);
    }

}

