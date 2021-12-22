import { Component, Input, OnInit } from '@angular/core';
import ItemLista from 'src/app/@core/common/classes/classe-item-lista';
import { AtividadesService } from 'src/app/@core/services/atividades.service';

@Component({
  selector: 'app-detalhes-item-lista-historico',
  templateUrl: './detalhes-item-lista-historico.component.html',
  styleUrls: ['./detalhes-item-lista-historico.component.scss']
})
export class DetalhesItemListaHistoricoComponent implements OnInit {
    @Input()
    public _itemLista: ItemLista;

    public descricao_atividade: string;
    public atividadeEmFalta: boolean;

  constructor(private _atividadesService: AtividadesService) { }

  ngOnInit(): void {
      this.descricao_atividade = this._atividadesService.retornaAtividadePeloId(this._itemLista.id_atividade).descricao;
      this.atividadeEmFalta = this._itemLista.status_falta;
  }

}
