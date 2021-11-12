import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IronManPage } from './iron-man.page';

const routes: Routes = [
  {
    path: '',
    component: IronManPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IronManPageRoutingModule {}
