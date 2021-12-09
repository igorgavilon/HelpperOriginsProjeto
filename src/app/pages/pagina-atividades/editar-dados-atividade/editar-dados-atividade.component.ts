import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import Atividade from 'src/app/@core/common/interfaces/atividade.interface';
import { AtividadesService } from 'src/app/@core/services/atividades.service';

@Component({
  selector: 'app-editar-dados-atividade',
  templateUrl: './editar-dados-atividade.component.html',
  styleUrls: ['./editar-dados-atividade.component.scss']
})
export class EditarDadosAtividadeComponent implements OnInit {
    public edicaoSucesso: boolean;

    constructor(
            private _atividadesService: AtividadesService,
            public bottomSheetRef: MatBottomSheetRef<EditarDadosAtividadeComponent>,
            @Inject(MAT_BOTTOM_SHEET_DATA) public dadosAtividade: any
        ) { }

    ngOnInit(): void {
        this.edicaoSucesso = false;
    }

    public fecharModal = (): void => {
        this.bottomSheetRef.dismiss();
    }

    public salvarAtividade = (form: NgForm): void => {
        this._atividadesService.salvarAtividade(form.value);
        this.edicaoSucesso = true;
    }

}
