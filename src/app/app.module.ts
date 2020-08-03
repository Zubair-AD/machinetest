import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemprogressComponent } from './itemprogress/itemprogress.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SalesComponent } from './sales/sales.component';
import { GraphComponent } from './graph/graph.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    ItemprogressComponent,
    CalendarComponent,
    SalesComponent,
    GraphComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
