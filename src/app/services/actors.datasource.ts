import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {Actor} from "../model/Actor";
import {MoviesService} from "./Movies.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {catchError, finalize} from "rxjs/operators";
import {of} from "rxjs/observable/of";

export class ActorsDataSource implements DataSource<Actor> {

    private ActorsSubject = new BehaviorSubject<Actor[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private MoviesService: MoviesService) {

    }

    loadActors(MovieId:number,
                filter:string,
                sortDirection:string,
                pageIndex:number,
                pageSize:number) {

        this.loadingSubject.next(true);

        this.MoviesService.findActors(MovieId, filter, sortDirection,
            pageIndex, pageSize).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(Actors => this.ActorsSubject.next(Actors));

    }

    connect(collectionViewer: CollectionViewer): Observable<Actor[]> {
        console.log("Connecting data source");
        return this.ActorsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.ActorsSubject.complete();
        this.loadingSubject.complete();
    }

}

