import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { ShowDetailComponent } from './pages/show-detail/show-detail.component'
import { ShowsListComponent as ShowsListComponent } from './components/show-list/show-list.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ShowsListComponent },
  //{path: 'detail', loadComponent: ()=> import('../app/pages/show-detail/show-detail.component').then(mod=> mod.ShowDetailComponent)},
  { path: 'detail/:id', component: ShowDetailComponent },
]
