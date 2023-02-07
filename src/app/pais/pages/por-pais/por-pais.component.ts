import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',

})

export class PorPaisComponent {

  termino: string = ''
  hayError: boolean = false;
  paises:Country[] = [];

  constructor(private paisService: PaisService) { }
  sugerencias(termino:string){
    this.hayError = false;
  }
  buscar(termino:string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino)
    .subscribe((paises) => {
      this.paises = paises;
      console.log(paises);
      
    },(err)=>{
    this.hayError = true;
    this.paises = [];
    });
  }
}
