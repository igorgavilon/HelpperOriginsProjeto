import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss']
})
export class InputEmailComponent implements OnInit {


  emailForm: FormGroup; 

  constructor(private formBuilder: FormBuilder) {

   }

  ngOnInit(): void {

    this.emailForm = this.formBuilder.group({
      email: [null, [
              Validators.required, 
              Validators.email
        ]]
    });
  }

}
