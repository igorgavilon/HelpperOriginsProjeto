import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-dark-button',
  templateUrl: './secondary-dark-button.component.html',
  styleUrls: ['./secondary-dark-button.component.scss']
})
export class SecondaryDarkButtonComponent {
    @Input()
    public texto: string;

}
