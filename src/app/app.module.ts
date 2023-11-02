import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './header/header.component';
import SearchItemComponent from './search/search-item/search-item.component';
import SearchResultsComponent from './search/search-results/search-results.component';
import SearchFieldComponent from './header/search-field/search-field.component';
import AuthComponent from './header/auth/auth.component';
import CardColourDirective from './derectives/card-colour.directive';
import DataPipe from './pipes/data.pipe';
import ViewPipe from './pipes/view.pipe';
import ContainsPipe from './pipes/contains.pipe';
import MyButtonComponent from './shared/my-button/my-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchItemComponent,
    SearchResultsComponent,
    SearchFieldComponent,
    AuthComponent,
    CardColourDirective,
    DataPipe,
    ViewPipe,
    ContainsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    FormsModule,
    MyButtonComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
