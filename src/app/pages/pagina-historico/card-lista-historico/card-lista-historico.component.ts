import { Component, Input, OnInit } from '@angular/core';
import ItemLista from 'src/app/@core/common/classes/classe-item-lista';
import ListaAtividades from 'src/app/@core/common/classes/classe-lista-atividades';
import { ListasService } from 'src/app/@core/services/listas.service';

@Component({
  selector: 'app-card-lista-historico',
  templateUrl: './card-lista-historico.component.html',
  styleUrls: ['./card-lista-historico.component.scss']
})
export class CardListaHistoricoComponent implements OnInit {
    @Input()
    public _lista: ListaAtividades;

    @Input()
    public acaoDetalhesClick: (lista: ListaAtividades) => void;

    @Input()
    public somenteLeitura: boolean;

    public numeroFaltas: number;
    public itensLista: ItemLista[];

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
