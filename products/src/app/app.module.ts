import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

const matModules = [
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatTableDataSource,
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ...matModules
  ],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [
  //   AppComponent,
  //   ...matModules
  // ]
})
export class AppModule { }
