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

    @Output()
    public botaoStatusClicado: EventEmitter<any> = new EventEmitter();

    public descricao_atividade: string;
    public atividadeEmFalta: boolean;
    public valorDesconto: number;
    public checkboxSelecionado: boolean;

  constructor(private _listaService: ListasService) { }

  ngOnInit(): void {
      this.descricao_atividade = this._listaService.buscaAtividadePeloId(this._itemLista.id_atividade).descricao;
      this.atividadeEmFalta = this._itemLista.status_falta;
      this.valorDesconto = this._itemLista.valor_desconto;
      this.checkboxSelecionado = true;
  }

  public atualizarStatus(statusFalta: boolean): void {
    this._listaService.atualizarItemDaLista(this._itemLista, statusFalta);
    this.botaoStatusClicado.emit(statusFalta ? this.valorDesconto : -1*(this.valorDesconto));
  }

  // public atualizarCheckBox() {
  //     //aqui serão inseridas lógicas quando for fazer o crud da lista de atividades!
  // }

}
