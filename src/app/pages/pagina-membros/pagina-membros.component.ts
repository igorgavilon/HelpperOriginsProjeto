import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import {Membro} from 'src/app/@core/common/interfaces/membro.interface';
import { MembrosService } from 'src/app/@core/services/membros.service';
import { CadastrarNovoMembroComponent } from './cadastrar-novo-membro/cadastrar-novo-membro.component';
import { EditarDadosMembroComponent } from './editar-dados-membro/editar-dados-membro.component';
import { ExcluirMembroComponent } from './excluir-membro/excluir-membro.component';

@Component({
  selector: 'app-pagina-membros',
  templateUrl: './pagina-membros.component.html',
  styleUrls: ['./pagina-membros.component.scss']
})
export class PaginaMembrosComponent implements OnInit {
    public listaMembros: Membro[];

  constructor(public bottomSheet: MatBottomSheet, private _membrosService: MembrosService) { }

  ngOnInit(): void {
    this.carregarListaMembros();
  }

  public carregarListaMembros(): void {
    this.listaMembros = this._membrosService.retornaTodosMembros();
  }

  public cadastrarNovoMembro(): void {
    const novoMembro: Membro = {
        id_membro: null,
        nome: null,
        imagem_avatar: null,
        data_nascimento: null,
        valor_mesada: null
    };
    const bottomSheetRef = this.bottomSheet.open(CadastrarNovoMembroComponent, {
        panelClass: 'bottom-sheet-container',
        data: novoMembro
    });

    bottomSheetRef.afterDismissed().subscribe(() => {
        console.log('Bottom sheet has been dismissed.');
        this.carregarListaMembros();
    });
  }

  public excluirMembro = (idMembro: number): void => {
    const bottomSheetRef = this.bottomSheet.open(ExcluirMembroComponent, {
        panelClass: 'bottom-sheet-container',
        data: idMembro
    });

    bottomSheetRef.afterDismissed().subscribe(() => {
        this.carregarListaMembros();
    });

  }

  public editarMembro = (idMembro: number): void => {
    const membroEditar: Membro = this._membrosService.retornaMembroPeloId(idMembro);

    const bottomSheetRef = this.bottomSheet.open(EditarDadosMembroComponent, {
        panelClass: 'bottom-sheet-container',
        data: membroEditar
    });

    bottomSheetRef.afterDismissed().subscribe(() => {
        console.log('Bottom sheet has been dismissed.');
        this.carregarListaMembros();
    });
  }

}
