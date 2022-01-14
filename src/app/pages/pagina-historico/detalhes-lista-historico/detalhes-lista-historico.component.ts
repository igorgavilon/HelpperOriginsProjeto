import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import {Membro} from 'src/app/@core/common/interfaces/membro.interface';
import { MembrosService } from 'src/app/@core/services/membros.service';
import { ListasService } from 'src/app/@core/services/listas.service';
import ListaAtividades from 'src/app/@core/common/classes/classe-lista-atividades';
import ItemLista from 'src/app/@core/common/classes/classe-item-lista';

@Component({
  selector: 'app-detalhes-lista-historico',
  templateUrl: './detalhes-lista-historico.component.html',
  styleUrls: ['./detalhes-lista-historico.component.scss']
})
export class DetalhesListaHistoricoComponent implements OnInit {
    public membro: Membro;
    public itensLista: ItemLista[];

  constructor(
        private _listasService: ListasService,
        private _membrosService: MembrosService,
        public bottomSheetRef: MatBottomSheetRef<DetalhesListaHistoricoComponent>,
        @Inject(MAT_BOTTOM_SHEET_DATA) public dadosLista: ListaAtividades
  ) { }

  ngOnInit(): void {
      this.membro = this._membrosService.retornaMembroPeloId(this.dadosLista.id_membro);
      this.itensLista = this._listasService.buscaItensListaPeloIdLista(this.dadosLista.id_lista);
  }

  public fecharModal = (): void => {
    this.bottomSheetRef.dismiss();
}

}
