import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import Atividade from 'src/app/@core/common/interfaces/atividade.interface';
import { AtividadesService } from 'src/app/@core/services/atividades.service';
import { CadastrarNovaAtividadeComponent } from './cadastrar-nova-atividade/cadastrar-nova-atividade.component';
import { EditarDadosAtividadeComponent } from './editar-dados-atividade/editar-dados-atividade.component';
import { ExcluirAtividadeComponent } from './excluir-atividade/excluir-atividade.component';

@Component({
  selector: 'app-pagina-atividades',
  templateUrl: './pagina-atividades.component.html',
  styleUrls: ['./pagina-atividades.component.scss']
})
export class PaginaAtividadesComponent implements OnInit {
    public listaAtividades: Atividade[] = [];

  constructor(public bottomSheet: MatBottomSheet, private _atividadesService: AtividadesService) { }

  ngOnInit(): void {
    this.carregarListaAtividades();
  }

  public carregarListaAtividades(): void {
    this._atividadesService.retornaTodasAtividadesAtivas().subscribe({
      next: resposta => {
        this.listaAtividades = resposta.data.activeTasks;
      },
      error: erro => {
        
      }
    });
  }

  public cadastrarNovaAtividade(): void {
    const novaAtividade: Atividade = {
        id: null,
        description: null,
        isDeleted: false
    };
    const bottomSheetRef = this.bottomSheet.open(CadastrarNovaAtividadeComponent, {
        panelClass: 'bottom-sheet-container',
        data: novaAtividade
    });

    bottomSheetRef.afterDismissed().subscribe(() => {
        this.carregarListaAtividades();
    });
  }

  public excluirAtividade = (idAtividade: string): void => {
    const bottomSheetRef = this.bottomSheet.open(ExcluirAtividadeComponent, {
        panelClass: 'bottom-sheet-container',
        data: idAtividade
    });

    bottomSheetRef.afterDismissed().subscribe(() => {
        this.carregarListaAtividades();
    });

  }

  public editarAtividade = (atividade: Atividade): void => {
    const bottomSheetRef = this.bottomSheet.open(EditarDadosAtividadeComponent, {
        panelClass: 'bottom-sheet-container',
        data: atividade
    });

    bottomSheetRef.afterDismissed().subscribe(() => {
        this.carregarListaAtividades();
    });
  }
}
