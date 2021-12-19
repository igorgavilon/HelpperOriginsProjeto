import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-card-lista-total-faltas',
  templateUrl: './card-lista-total-faltas.component.html',
  styleUrls: ['./card-lista-total-faltas.component.scss']
})
export class CardListaTotalFaltasComponent {
    @Input()
    public _total_faltas: number;
    @Input()
    public _valor_mesada: number;
    @Input()
    public _valor_descontos: number;
    @Input()
    public _valor_total: number;
    @Input()
    public acaoFinalizarLista: any;
}
