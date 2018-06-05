// Typescript (Javascript) requires an import as well as the Angular CLI. 
// When we need to access a module/package, we import it first for Typescript.
// Do not remove any modules, you may break the application. 

import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { IrgnavComponent } from './irgnav/irgnav.component';
import { IrgcardComponent } from './irgcard/irgcard.component';
import { IrggridComponent } from './irggrid/irggrid.component';
import { IrgexpComponent } from './irgexp/irgexp.component';

// NG Module represents the Angular Framework
// Imports are required to utilize other modulars. For your convenience, all Angular Material Modules are imported. 
// As of June 2018, Angular Material 6.2.0 - LUke
// If you have downloaded the source code, just run NPM Install in the Command Prompt with (Node.JS Installed Locally)
// This will download all the required dependencies are the correct versions for this application to compile and run.
// You can test locally by typing in "ng serve --open"

@NgModule({
  declarations: [
    AppComponent,
    IrgnavComponent,
    IrgcardComponent,
    IrggridComponent,
    IrgexpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// End of Angular Imports, Declarations, Etc.
// For more information on Modules, https://angular.io/guide/ngmodules

export class AppModule { }

// Components are the building block of Angular and represent elements that are either too complex to 
// exist or are going to be used repeatedly. You can just reference components by selector tags as needed.