import {Component, OnInit} from '@angular/core';
import {Movie} from "../model/Movie";
import {Observable} from "rxjs/Observable";
import {MoviesService} from "../services/Movies.service";
import {map} from "rxjs/operators";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    beginnerMovies$: Observable<Movie[]>;

    advancedMovies$: Observable<Movie[]>;

    constructor(private MoviesService: MoviesService) {

    }

    ngOnInit() {

        const Movies$ = this.MoviesService.findAllMovies();

        this.beginnerMovies$ = Movies$.pipe(
          map(Movies => Movies.filter(Movie => Movie.category === 'BEGINNER') )
        );

        this.advancedMovies$ = Movies$.pipe(
            map(Movies => Movies.filter(Movie => Movie.category === 'ADVANCED') )
        );

    }

}
