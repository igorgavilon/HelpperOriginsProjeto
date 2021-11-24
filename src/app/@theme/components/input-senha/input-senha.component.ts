import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-senha',
  templateUrl: './input-senha.component.html',
  styleUrls: ['./input-senha.component.scss']
})
export class InputSenhaComponent implements OnInit {
    public hide: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
