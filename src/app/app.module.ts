import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { CardComponent } from './card/card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { browser } from 'protractor';
import {MatButtonModule} from '@angular/material/button';
import {LayoutModule} from '@angular/cdk/layout';
import { BreakpointObserverComponent } from './breakpoint-observer/breakpoint-observer.component'


@NgModule({
  
  declarations: [
    AppComponent,
    CardComponent,
    BreakpointObserverComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    MatTableModule,
    MatDividerModule,
    MatCardModule,
    AppRoutingModule,
    MatGridListModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,

  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
