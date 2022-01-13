import { Component, Input, OnInit } from '@angular/core';
import {Membro} from 'src/app/@core/common/interfaces/membro.interface';

@Component({
  selector: 'app-card-membro-ativo',
  templateUrl: './card-membro-ativo.component.html',
  styleUrls: ['./card-membro-ativo.component.scss']
})
export class CardMembroAtivoComponent implements OnInit {
    @Input()
    public _membro: Membro;

    @Input()
    public _id_membro_selecionado: number;

  ngOnInit(): void {
      this.atualizarValoresCard();

  }

  public atualizarValoresCard(): void {
    console.log('teste');
  }

}
