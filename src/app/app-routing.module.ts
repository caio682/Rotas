import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexModule } from './pages/index/index.module';
import { PortifolioModule } from './pages/portifolio/portifolio.module';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';
const routes: Routes = [
  { path: '', component: TitleComponent, pathMatch: 'full' },
  {path: 'portifolio', component: CardComponent, pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
