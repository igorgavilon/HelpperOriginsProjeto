import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-nome',
  templateUrl: './input-nome.component.html',
  styleUrls: ['./input-nome.component.scss']
})
export class InputNomeComponent implements OnInit {
    @Input()
    public nomeInput: string;

    constructor() { }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

}
