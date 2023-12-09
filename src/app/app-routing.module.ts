import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AuthPageComponent from './auth/pages/auth-page/auth-page.component';
import NotfoundComponent from './core/pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./youtube/youtube.module').then(
      (m) => m.default,
    ),
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.default),
    component: AuthPageComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule { }
