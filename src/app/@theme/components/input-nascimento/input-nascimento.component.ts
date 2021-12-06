import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-nascimento',
  templateUrl: './input-nascimento.component.html',
  styleUrls: ['./input-nascimento.component.scss']
})
export class InputNascimentoComponent implements OnInit {
    @Input()
    public nascimentoInput: string;

  constructor() { }

  ngOnInit(): void {
  }

}
