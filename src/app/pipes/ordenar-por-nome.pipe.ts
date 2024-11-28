import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenarPorNome'
})
export class OrdenarPorNomePipe implements PipeTransform {

  transform(pontos: any[]): any[] {
    if (!pontos || pontos.length === 0) {
      return pontos; 
    }
    
    return pontos.sort((a, b) => {
      if (a.Nome_Ponto < b.Nome_Ponto) {
        return -1; 
      } else if (a.Nome_Ponto > b.Nome_Ponto) {
        return 1; 
      }
      return 0;
    });
  }

}
