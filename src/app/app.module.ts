import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MonteCarloComponent } from './monte-carlo/monte-carlo.component';
import { FormsModule } from '@angular/forms';
import { ClockjsComponent } from './clockjs/clockjs.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    MonteCarloComponent,
    ClockjsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    MatDialogModule,
    MatTabsModule,
    FormsModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
