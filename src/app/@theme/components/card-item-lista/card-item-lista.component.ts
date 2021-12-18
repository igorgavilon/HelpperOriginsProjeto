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
    public modoReadOnly: boolean;

    @Input()
    public botaoMarcarFaltaVisivel: boolean;

    @Input()
    public itemLista: Itemlista;

    @Output()
    public botaoStatusClicado: EventEmitter<number> = new EventEmitter();

    public descricao_atividade: string;
    public atividadeEmFalta: boolean;
    public valorDesconto: number;
    public checkboxSelecionado: boolean;

  constructor(private _listaService: ListasService) { }

  ngOnInit(): void {
    this.inicializarVariáveis();
  }

  public inicializarVariáveis(): void {
    this.descricao_atividade = this._listaService.buscaAtividadePeloId(this.itemLista.id_atividade).descricao;
    this.atividadeEmFalta = this.itemLista.status_falta;
    this.valorDesconto = this.itemLista.valor_desconto;
    this.checkboxSelecionado = true;
  }

  public atualizarStatus(statusFalta: boolean): void {
    this._listaService.atualizarItemDaLista(this.itemLista, statusFalta);
    this.botaoStatusClicado.emit(statusFalta ? this.valorDesconto : -1*(this.valorDesconto));
  }

  public atualizarCheckBox() {
      //aqui serão inseridas lógicas quando for fazer o crud da lista de atividades!
  }

}
