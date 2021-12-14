import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Itemlista from 'src/app/@core/common/interfaces/item-lista.interface';
import { ListasService } from 'src/app/@core/services/listas.service';

@Component({
  selector: 'app-card-item-lista',
  templateUrl: './card-item-lista.component.html',
  styleUrls: ['./card-item-lista.component.scss']
})
export class CardItemListaComponent implements OnInit {
    @Input()
    public _modoReadOnly: boolean;

    @Input()
    public _botaoMarcarFaltaVisivel: boolean;

    @Input()
    public _itemLista: Itemlista;

    @Input()
    public atualizarCheckBox: any;

    @Output()
    public botaoStatusClicado: EventEmitter<any> = new EventEmitter();

    public descricao_atividade: string;
    public atividadeEmFalta: boolean;

  constructor(private _listaService: ListasService) { }

  ngOnInit(): void {
      this.descricao_atividade = this._listaService.buscaAtividadePeloId(this._itemLista.id_atividade).descricao;
      this.atividadeEmFalta = this._itemLista.status_falta;
  }

  public atualizarStatus(statusFalta: boolean): void {
    this._listaService.atualizarItemDaLista(this._itemLista, statusFalta);
    this.botaoStatusClicado.emit(statusFalta ? this._itemLista.valor_desconto : -1*(this._itemLista.valor_desconto));
  }

}
