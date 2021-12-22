import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import ListaAtividades from 'src/app/@core/common/classes/classe-lista-atividades';
import Membro from 'src/app/@core/common/interfaces/membro.interface';
import { ListasService } from 'src/app/@core/services/listas.service';
import { DetalhesListaHistoricoComponent } from './detalhes-lista-historico/detalhes-lista-historico.component';

@Component({
  selector: 'app-pagina-historico',
  templateUrl: './pagina-historico.component.html',
  styleUrls: ['./pagina-historico.component.scss']
})
export class PaginaHistoricoComponent implements OnInit {
    public _listaMembros: Array<Membro>;
    public _listasDeAtividades: Array<ListaAtividades>;
    public _id_membro_selecionado: number;

  constructor(private _listasService: ListasService, public bottomSheet: MatBottomSheet) {//public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.carregarDadosDaPagina();
  }

  public carregarDadosDaPagina(): void {
    this._listaMembros = this._listasService.retornaTodosMembrosComListaFinalizada();
    if(this._listaMembros.length !== 0) {
        this.atualizarDadosMembroSelecionado(this._listaMembros[0].id_membro);
    }
  }

  public atualizarDadosMembroSelecionado(id_membro: number): void {
    this._id_membro_selecionado = id_membro;
    this._listasDeAtividades = this._listasService.retornaListasFinalizadasPeloIdMembro(this._id_membro_selecionado);
  }

  public verDetalhesLista = (lista: ListaAtividades): void => {
    const bottomSheetRef = this.bottomSheet.open(DetalhesListaHistoricoComponent, {
        panelClass: 'bottom-sheet-container',
        data: lista
    });

    bottomSheetRef.afterDismissed().subscribe(() => {
        this.carregarDadosDaPagina();
    });
  }

}
