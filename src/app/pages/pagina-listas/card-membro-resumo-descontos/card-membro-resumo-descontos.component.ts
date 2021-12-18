import { Component, Input, OnInit } from '@angular/core';
import Itemlista from 'src/app/@core/common/interfaces/item-lista.interface';
import ListaAtividades from 'src/app/@core/common/interfaces/lista-atividades.interface';
import Membro from 'src/app/@core/common/interfaces/membro.interface';
import { ListasService } from 'src/app/@core/services/listas.service';

@Component({
  selector: 'app-card-membro-resumo-descontos',
  templateUrl: './card-membro-resumo-descontos.component.html',
  styleUrls: ['./card-membro-resumo-descontos.component.scss']
})
export class CardMembroResumoDescontosComponent implements OnInit {
    @Input()
    public _membro: Membro;

    @Input()
    public _id_membro_selecionado: number;

    @Input()
    get valorDescontosAtualizado(): number {
        return 0;
    }
    set valorDescontosAtualizado(valorDescontosAtualizado: number) {
        if(this._membro.id_membro === this._id_membro_selecionado) {
            this.atualizarValoresCard();
        }
    }
    
    public _mesada: number;
    public _listaAtividades: ListaAtividades;
    public _itensLista: Array<Itemlista>;
    public _valor_descontos: number;
    public _valor_total: number

  constructor(private _listasService: ListasService) { }

  ngOnInit(): void {
      this._mesada = this._membro.valor_mesada;
      this.atualizarValoresCard();

  }

  public atualizarValoresCard(): void {
    this._listaAtividades = this._listasService.buscaListaAtivaPeloIdMembro(this._membro.id_membro);
    this._itensLista = this._listasService.buscaItensListaPeloIdLista(this._listaAtividades.id_lista);
    this._valor_descontos = 0;
    for(const item of this._itensLista){
        this._valor_descontos += item.status_falta? item.valor_desconto : 0;
    }
    this._valor_total = this._mesada - this._valor_descontos;

  }
  
}
