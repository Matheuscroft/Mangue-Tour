import { NgModule } from '@angular/core';

import { BairroFormatPipe } from './bairro-format.pipe';
import { OrdenarPorNomePipe } from './ordenar-por-nome.pipe';

@NgModule({
  exports: [BairroFormatPipe, OrdenarPorNomePipe],
  declarations: [BairroFormatPipe, OrdenarPorNomePipe],
})
export class PipeModule {}