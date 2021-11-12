import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GokuPage } from './goku.page';

const routes: Routes = [
  {
    path: '',
    component: GokuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GokuPageRoutingModule {}
