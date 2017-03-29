import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DivisibleComponent } from './divisible/divisible.component';
import { BasesComponent } from './bases/bases.component';

@NgModule({
  declarations: [
    AppComponent,
    DivisibleComponent,
    BasesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
