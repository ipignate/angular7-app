import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Movie} from "../model/Movie";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {MovieDialogComponent} from "../Movie-dialog/Movie-dialog.component";

@Component({
    selector: 'Movies-card-list',
    templateUrl: './Movies-card-list.component.html',
    styleUrls: ['./Movies-card-list.component.css']
})
export class MoviesCardListComponent implements OnInit {

    @Input()
    Movies: Movie[];

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {

    }

    editMovie({description, longDescription, category}:Movie) {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        dialogConfig.data = {
            description, longDescription, category
        };

        const dialogRef = this.dialog.open(MovieDialogComponent,
            dialogConfig);


        dialogRef.afterClosed().subscribe(
            val => console.log("Dialog output:", val)
        );

    }

}









