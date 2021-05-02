import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { NewsListComponent } from './pages/news-list/news-list.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { SavedNewsComponent } from './pages/saved-news/saved-news.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/news-list',
    pathMatch: 'full'
  },
  {
    path: 'news-list',
    component: NewsListComponent
  },
  {
    path: 'saved-news',
    component: SavedNewsComponent
  },
  {
    path: 'configuration',
    component: ConfigurationComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
