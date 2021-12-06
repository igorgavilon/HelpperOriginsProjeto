import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-valor-mesada',
  templateUrl: './input-valor-mesada.component.html',
  styleUrls: ['./input-valor-mesada.component.scss']
})
export class InputValorMesadaComponent implements OnInit {
    @Input()
    public valorMesadaInput: number;

  constructor() { }

  ngOnInit(): void {
  }

}
