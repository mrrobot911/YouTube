import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import SearchItemComponent from './components/search/search-item/search-item.component';
import SearchResultsComponent from './components/search/search-results/search-results.component';
import ViewPipe from './pipes/view.pipe';
import ContainsPipe from './pipes/contains.pipe';
import DataPipe from './pipes/data.pipe';
import MyButtonComponent from '../shared/my-button/my-button.component';
import SvgIconComponent from '../shared/svg-icon/svg-icon.component';
import CardColourDirective from './derectives/card-colour.directive';
import MainPageComponent from './pages/main-page/main-page.component';
import SearchService from '../core/services/search.service';
import ToggleService from '../core/services/toggle.service';
import FilterService from './services/filter.service';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    DataPipe,
    ViewPipe,
    ContainsPipe,
    CardColourDirective,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    FormsModule,
    MyButtonComponent,
    SvgIconComponent,
  ],
  exports: [
    SearchItemComponent,
    SearchResultsComponent,
  ],
  providers: [
    SearchService,
    ToggleService,
    FilterService,
  ],
})
export default class YoutubeModule { }
