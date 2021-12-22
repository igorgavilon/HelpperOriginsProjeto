import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-nome',
  templateUrl: './input-nome.component.html',
  styleUrls: ['./input-nome.component.scss']
})
export class InputNomeComponent {
    @Input()
    public nomeInput: string;
}
