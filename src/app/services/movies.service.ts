

import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Movie} from "../model/Movie";
import {map} from "rxjs/operators";
import {Actor} from "../model/Actor";


@Injectable()
export class MoviesService {

    constructor(private http:HttpClient) {

    }

    findMovieById(MovieId: number): Observable<Movie> {
        return this.http.get<Movie>(`/api/Movies/${MovieId}`);
    }

    findAllMovies(): Observable<Movie[]> {
        return this.http.get('/api/Movies')
            .pipe(
                map(res => res['payload'])
            );
    }

    findAllMovieActors(MovieId:number): Observable<Actor[]> {
        return this.http.get('/api/Actors', {
            params: new HttpParams()
                .set('MovieId', MovieId.toString())
                .set('pageNumber', "0")
                .set('pageSize', "1000")
        }).pipe(
            map(res =>  res["payload"])
        );
    }

    findActors(
        MovieId:number, filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3):  Observable<Actor[]> {

        return this.http.get('/api/Actors', {
            params: new HttpParams()
                .set('MovieId', MovieId.toString())
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }).pipe(
            map(res =>  res["payload"])
        );
    }

}