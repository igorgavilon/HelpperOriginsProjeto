import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss']
})
export class InputEmailComponent {
    public emailInput: FormControl = new FormControl();

  // constructor() { }

  // ngOnInit(): void {
  // }

}
