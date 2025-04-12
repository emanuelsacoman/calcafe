import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VazaoPage } from './vazao.page';

const routes: Routes = [
  {
    path: '',
    component: VazaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VazaoPageRoutingModule {}
