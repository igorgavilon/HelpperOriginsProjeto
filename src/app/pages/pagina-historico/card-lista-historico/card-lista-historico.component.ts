import { Component, Input, OnInit } from '@angular/core';
import IItemlista from 'src/app/@core/common/interfaces/item-lista.interface';
import IListaAtividades from 'src/app/@core/common/interfaces/lista-atividades.interface';
import { ListasService } from 'src/app/@core/services/listas.service';

@Component({
  selector: 'app-card-lista-historico',
  templateUrl: './card-lista-historico.component.html',
  styleUrls: ['./card-lista-historico.component.scss']
})
export class CardListaHistoricoComponent implements OnInit {
    @Input()
    public _lista: IListaAtividades;

    @Input()
    public acaoDetalhesClick: any;

    @Input()
    public somenteLeitura: boolean;

    public numeroFaltas: number;
    public itensLista: Array<IItemlista>;

    constructor(private _listasService: ListasService) { }

    ngOnInit(): void {
        this.atualizarNumeroFaltas();
    }

    public atualizarNumeroFaltas(): void {
        this.itensLista = this._listasService.buscaItensListaPeloIdLista(this._lista.id_lista);
        this.numeroFaltas = 0;
        for(const item of this.itensLista){
            this.numeroFaltas += item.status_falta? 1: 0;
        }
    }

}
