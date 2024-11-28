import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bairroFormat',
})
export class BairroFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }
    return value.includes('Recife') ? 'Bairro do Recife' : value;
  }

}
