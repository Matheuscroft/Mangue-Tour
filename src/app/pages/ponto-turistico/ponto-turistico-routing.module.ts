import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PontoTuristicoPage } from './ponto-turistico.page';

const routes: Routes = [
  {
    path: '',
    component: PontoTuristicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PontoTuristicoPageRoutingModule {}
