import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MoviesCardListComponent } from './Movies-card-list/Movies-card-list.component';
import {MovieComponent} from "./Movie/Movie.component";
import {
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule, MatListModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule
} from "@angular/material";
import {MoviesService} from "./services/Movies.service";
import {HttpClientModule} from "@angular/common/http";
import {MovieResolver} from "./services/Movie.resolver";
import { MovieDialogComponent } from './Movie-dialog/Movie-dialog.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatMomentDateModule} from "@angular/material-moment-adapter";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        MovieComponent,
        MoviesCardListComponent,
        MovieDialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        AppRoutingModule,
        MatSelectModule,
        MatDatepickerModule,
        MatMomentDateModule,
        ReactiveFormsModule
    ],
    providers: [
        MoviesService,
        MovieResolver
    ],
    bootstrap: [AppComponent],
    entryComponents: [MovieDialogComponent]
})
export class AppModule {
}
