import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import SearchFieldComponent from './header/search-field/search-field.component';
import HeaderComponent from './header/header.component';
import AuthComponent from './header/auth/auth.component';
import NotfoundComponent from './pages/notfound/notfound.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchFieldComponent,
    AuthComponent,
    NotfoundComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    SearchFieldComponent,
  ],
})
export default class CoreModule { }
