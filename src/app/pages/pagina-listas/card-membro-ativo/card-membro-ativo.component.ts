import { Component, Input, OnInit } from '@angular/core';
import Membro from 'src/app/@core/common/interfaces/membro.interface';

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


  constructor() { }

  ngOnInit(): void {
    //   this._mesada = this._membro.valor_mesada;
      this.atualizarValoresCard();

  }

  public atualizarValoresCard(): void {
    // this._listaAtividades = this._listasService.buscaListaAtivaPeloIdMembro(this._membro.id_membro);
    // this._itensLista = this._listasService.buscaItensListaPeloIdLista(this._listaAtividades.id_lista);
    // this._valor_descontos = 0;
    // for(const item of this._itensLista){
    //     this._valor_descontos += item.status_falta? item.valor_desconto : 0;
    // }
    // this._valor_total = this._mesada - this._valor_descontos;

  }

}
