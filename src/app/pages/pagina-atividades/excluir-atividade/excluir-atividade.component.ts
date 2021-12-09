import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { AtividadesService } from 'src/app/@core/services/atividades.service';

@Component({
  selector: 'app-excluir-atividade',
  templateUrl: './excluir-atividade.component.html',
  styleUrls: ['./excluir-atividade.component.scss']
})
export class ExcluirAtividadeComponent implements OnInit {
    public exclusaoSucesso: boolean;

    constructor(
            private _atividadesService: AtividadesService,
            public bottomSheetRef: MatBottomSheetRef<ExcluirAtividadeComponent>,
            @Inject(MAT_BOTTOM_SHEET_DATA) public idAtividade: number
        ) { }

    ngOnInit(): void {
        this.exclusaoSucesso = false;
    }

    public fecharModal = (): void => {
        this.bottomSheetRef.dismiss();
    }

    public excluirAtividade = (): void => {
        this._atividadesService.excluirAtividadePeloId(this.idAtividade);
        this.exclusaoSucesso = true;
    }
}
