import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import AuthPageComponent from './pages/auth-page/auth-page.component';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  exports: [
    AuthPageComponent,
  ],
})
export default class AuthModule { }
