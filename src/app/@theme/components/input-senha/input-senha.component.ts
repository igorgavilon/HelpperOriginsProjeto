import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-senha',
  templateUrl: './input-senha.component.html',
  styleUrls: ['./input-senha.component.scss']
})
export class InputSenhaComponent implements OnInit {
  public hide: boolean = true;
    
  private senhaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.senhaForm = this.formBuilder.group({
      senha: [null, Validators.required]
    });
  }


}
