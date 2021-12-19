import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-valor-mesada',
  templateUrl: './input-valor-mesada.component.html',
  styleUrls: ['./input-valor-mesada.component.scss']
})
export class InputValorMesadaComponent  {
    @Input()
    public valorMesadaInput: number;

}
