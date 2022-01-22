import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-nascimento',
  templateUrl: './input-nascimento.component.html',
  styleUrls: ['./input-nascimento.component.scss'],
})
export class InputNascimentoComponent implements OnInit{
    
    @Input()
    public nascimentoInput: string;

    ngOnInit(): void {
      if(this.nascimentoInput) {
        //formatar a data de aniversário: de dd/MM/yyyy para yyyy-MM-dd 
        const birthDatePartes: string[] = this.nascimentoInput.split("/");
        this.nascimentoInput = `${birthDatePartes[2]}-${birthDatePartes[1]}-${birthDatePartes[0]}`
      }
    }
}
