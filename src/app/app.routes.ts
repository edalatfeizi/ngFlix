import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { ShowDetailComponent } from './pages/show-detail/show-detail.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'movie-list', component: MovieListComponent},
    //{path: 'detail', loadComponent: ()=> import('../app/pages/show-detail/show-detail.component').then(mod=> mod.ShowDetailComponent)},
    {path: 'detail/:id', component: ShowDetailComponent},
];
