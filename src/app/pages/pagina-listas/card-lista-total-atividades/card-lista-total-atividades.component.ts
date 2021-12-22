import { Component, Input, OnInit } from '@angular/core';
import Membro from 'src/app/@core/common/interfaces/membro.interface';

@Component({
  selector: 'app-card-lista-total-atividades',
  templateUrl: './card-lista-total-atividades.component.html',
  styleUrls: ['./card-lista-total-atividades.component.scss']
})
export class CardListaTotalAtividadesComponent implements OnInit {
    @Input()
    public membroSelecionado: Membro;

    @Input()
    public total_atividades_lista: number;

    @Input()
    public modoEdicao: boolean;

    @Input()
    public acaoBotaoClick: () => void;

  constructor() { }

  ngOnInit(): void {
  }

}
