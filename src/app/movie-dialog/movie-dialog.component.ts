import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Movie} from "../model/Movie";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';

@Component({
    selector: 'Movie-dialog',
    templateUrl: './Movie-dialog.component.html',
    styleUrls: ['./Movie-dialog.component.css']
})
export class MovieDialogComponent implements OnInit {

    form: FormGroup;
    description:string;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<MovieDialogComponent>,
        @Inject(MAT_DIALOG_DATA) {description,longDescription,
            category}:Movie ) {

        this.description = description;


        this.form = fb.group({
            description: [description, Validators.required],
            category: [category, Validators.required],
            releasedAt: [moment(), Validators.required],
            longDescription: [longDescription,Validators.required]
        });

    }

    ngOnInit() {

    }


    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }

}
