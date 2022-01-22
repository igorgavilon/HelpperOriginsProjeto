import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { IArquivoImagem } from 'src/app/@core/common/interfaces/arquivo-imagem.interface';
import { IDadosMembro } from 'src/app/@core/common/interfaces/dados-membro.interface';
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

  constructor(public bottomSheet: MatBottomSheet, private _membrosService: MembrosService, private _rota: Router) { }

  ngOnInit(): void {
    this.carregarListaMembros();
  }

  public carregarListaMembros(): void {
    this._membrosService.retornaTodosMembros().subscribe({
      next: resposta => {
        this.listaMembros = resposta.data.rowsActiveMember;
      },
      error: erro => {
        
      }
    });  
  }

  public cadastrarNovoMembro(): void {
    const novoMembro: Membro = {
        id: null,
        name: null,
        avatar: null,
        birthdate: null,
        allowance: null,
        status: true,
        createdAt: null,
        updatedAt: null
    };
    const bottomSheetRef = this.bottomSheet.open(CadastrarNovoMembroComponent, {
        panelClass: 'bottom-sheet-container',
        data: novoMembro
    });

    bottomSheetRef.afterDismissed().subscribe(() => {
        this.carregarListaMembros();
    });
  }

  public excluirMembro = (idMembro: string): void => {
    const bottomSheetRef = this.bottomSheet.open(ExcluirMembroComponent, {
        panelClass: 'bottom-sheet-container',
        data: idMembro
    });

    bottomSheetRef.afterDismissed().subscribe(() => {
        this.carregarListaMembros();
    });

  }

  public editarMembro = (membro: Membro, arquivoImagemAvatar: IArquivoImagem): void => {
    const membroEditar: IDadosMembro = {membro, arquivoImagemAvatar};

    const bottomSheetRef = this.bottomSheet.open(EditarDadosMembroComponent, {
        panelClass: 'bottom-sheet-container',
        data: membroEditar
    });

    bottomSheetRef.afterDismissed().subscribe(() => {
        this.carregarListaMembros();
    });
  }

  public verListaMembro = (idMembro: string): void => {
    console.info("Ver a lista do Membro..." + idMembro);
    // this._rota.navigate([`/pages/listas/verlistamembro/${idMembro}`]);
  }

}
