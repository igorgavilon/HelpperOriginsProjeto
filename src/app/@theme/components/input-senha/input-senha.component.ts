import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-senha',
  templateUrl: './input-senha.component.html',
  styleUrls: ['./input-senha.component.scss']
})
export class InputSenhaComponent implements OnInit {
    public hide: boolean = true;
    public senhaInput: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
