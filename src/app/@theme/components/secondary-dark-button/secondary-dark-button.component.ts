import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-dark-button',
  templateUrl: './secondary-dark-button.component.html',
  styleUrls: ['./secondary-dark-button.component.scss']
})
export class SecondaryDarkButtonComponent implements OnInit {
    @Input()
    public texto: string;

  constructor() { }

  ngOnInit(): void {
  }

}
