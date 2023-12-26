import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { ShowDetailComponent } from './pages/show-detail/show-detail.component'
import { ShowsListComponent as ShowsListComponent } from './components/show-list/show-list.component'
import { GenresComponent } from './components/genres/genres.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list/:listType', component: ShowsListComponent },
  //{path: 'detail', loadComponent: ()=> import('../app/pages/show-detail/show-detail.component').then(mod=> mod.ShowDetailComponent)},
  { path: 'detail/:showType/:id', component: ShowDetailComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'genres/:genreId', component: GenresComponent },
]
