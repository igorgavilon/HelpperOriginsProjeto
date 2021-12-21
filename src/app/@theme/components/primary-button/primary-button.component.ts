import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})

export class PrimaryButtonComponent{

    @Input()
    public texto: string;

    @Input()
    public color: string;

    @Input()
    public icone: string;

}
