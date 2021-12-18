import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-senha',
  templateUrl: './input-senha.component.html',
  styleUrls: ['./input-senha.component.scss']
})
export class InputSenhaComponent {
    public hide: boolean = true;
    public senhaInput: FormControl = new FormControl();
}
