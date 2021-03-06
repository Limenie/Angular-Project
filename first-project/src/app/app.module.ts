import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list'; 
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { AikaComponent } from './aika/aika.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AikaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule, 
    MatSortModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
