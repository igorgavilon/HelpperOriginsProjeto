import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import {Itemlista} from 'src/app/@core/common/interfaces/item-lista.interface';
import {ListaAtividades} from 'src/app/@core/common/interfaces/lista-atividades.interface';
import {Membro} from 'src/app/@core/common/interfaces/membro.interface';
import { ListasService } from 'src/app/@core/services/listas.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-pagina-listas',
  templateUrl: './pagina-listas.component.html',
  styleUrls: ['./pagina-listas.component.scss']
})
export class PaginaListasComponent implements OnInit {

    public listaMembros: Membro[];
    public itensLista: Itemlista[];
    public lista_membro_selecionado: ListaAtividades;
    public id_membro_selecionado: number;
    public totalFaltas: number;
    public mesada_membro_selecionado: number;
    public descontos: number;
    public total: number;

  constructor(private _listasService: ListasService, public bottomSheet: MatBottomSheet) {//public dialog: MatDialog) {
      this.descontos = 0;
      this.totalFaltas = 0;
  }

  ngOnInit(): void {
    this.carregarDadosDaPagina();
  }

  public carregarDadosDaPagina(): void {
    this.listaMembros = this._listasService.retornaTodosMembrosComListaAtiva();
    this.itensLista = [];
    if(this.listaMembros.length !== 0) {
        this.atualizarDadosMembroSelecionado(this.listaMembros[0].id_membro);
    }
  }

  public atualizarDadosMembroSelecionado(id_membro: number): void {
    this.id_membro_selecionado = id_membro;
    this.mesada_membro_selecionado = this.listaMembros.find((membro: Membro) => membro.id_membro === this.id_membro_selecionado).valor_mesada;
    this.lista_membro_selecionado = this._listasService.buscaListaAtivaPeloIdMembro(this.id_membro_selecionado);
    this.itensLista = this._listasService.buscaItensListaPeloIdLista(this.lista_membro_selecionado.id_lista);
    this.descontos = 0;
    this.totalFaltas = 0;
    for(const item of this.itensLista){
        this.descontos += item.status_falta? item.valor_desconto: 0;
        this.totalFaltas += item.status_falta? 1: 0;
    }
    this.total = this.mesada_membro_selecionado - this.descontos;

  }

  public atualizarValoresDescontoETotal(valorCorrecao: number): void {
    this.descontos += valorCorrecao;
    this.totalFaltas -= valorCorrecao < 0 ? 1 : -1;
    this.total = this.mesada_membro_selecionado - this.descontos;
  }

  public finalizarLista = (): void => {
    this._listasService.finalizarLista(this.lista_membro_selecionado);
    this.carregarDadosDaPagina();
  }

  public abrirModal(): void {
    const bottomSheetRef = this.bottomSheet.open(LoginComponent, {
        panelClass: 'bottom-sheet-container'
    });

    bottomSheetRef.afterDismissed().subscribe(() => {
        console.log('Bottom sheet has been dismissed.');
    });
  }

}
