import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Movie} from "../model/Movie";
import {MoviesService} from "../services/Movies.service";
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import {merge} from "rxjs/observable/merge";
import {fromEvent} from 'rxjs/observable/fromEvent';
import {ActorsDataSource} from "../services/Actors.datasource";


@Component({
    selector: 'Movie',
    templateUrl: './Movie.component.html',
    styleUrls: ['./Movie.component.css']
})
export class MovieComponent implements OnInit, AfterViewInit {

    Movie:Movie;

    dataSource: ActorsDataSource;

    displayedColumns= ["seqNo", "description", "duration"];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    @ViewChild(MatSort) sort: MatSort;

    @ViewChild('input') input: ElementRef;

    constructor(private route: ActivatedRoute,
                private MoviesService: MoviesService) {

    }

    ngOnInit() {

        this.Movie = this.route.snapshot.data["Movie"];

        this.dataSource = new ActorsDataSource(this.MoviesService);

        this.dataSource.loadActors(this.Movie.id, '', 'asc', 0, 3);

    }

    ngAfterViewInit() {

        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        fromEvent(this.input.nativeElement,'keyup')
            .pipe(
                debounceTime(150),
                distinctUntilChanged(),
                tap(() => {
                    this.paginator.pageIndex = 0;

                    this.loadActorsPage();
                })
            )
            .subscribe();

        merge(this.sort.sortChange, this.paginator.page)
        .pipe(
            tap(() => this.loadActorsPage())
        )
        .subscribe();

    }

    loadActorsPage() {
        this.dataSource.loadActors(
            this.Movie.id,
            this.input.nativeElement.value,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize);
    }


}
