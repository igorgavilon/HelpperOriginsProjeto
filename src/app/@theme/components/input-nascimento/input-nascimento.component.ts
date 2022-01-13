import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-nascimento',
  templateUrl: './input-nascimento.component.html',
  styleUrls: ['./input-nascimento.component.scss'],
})
export class InputNascimentoComponent {
    @Input()
    public nascimentoInput: string;

}
