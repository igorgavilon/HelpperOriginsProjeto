import { Component, Input, OnInit } from '@angular/core';
import Membro from 'src/app/@core/common/interfaces/membro.interface';
import { ListasService } from 'src/app/@core/services/listas.service';

@Component({
  selector: 'app-card-membro-historico',
  templateUrl: './card-membro-historico.component.html',
  styleUrls: ['./card-membro-historico.component.scss']
})
export class CardMembroHistoricoComponent implements OnInit {
    @Input()
    public _membro: Membro;

    @Input()
    public _id_membro_selecionado: number;

  constructor(private _listasService: ListasService) { }

  ngOnInit(): void {
      this.atualizarValoresCard();

  }

  public atualizarValoresCard(): void {
  }


}
