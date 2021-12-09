import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import Atividade from 'src/app/@core/common/interfaces/atividade.interface';
import { AtividadesService } from 'src/app/@core/services/atividades.service';

@Component({
  selector: 'app-cadastrar-nova-atividade',
  templateUrl: './cadastrar-nova-atividade.component.html',
  styleUrls: ['./cadastrar-nova-atividade.component.scss']
})
export class CadastrarNovaAtividadeComponent implements OnInit {
    public cadastroSucesso: boolean;

    constructor(
            private _atividadesService: AtividadesService,
            public bottomSheetRef: MatBottomSheetRef<CadastrarNovaAtividadeComponent>,
            @Inject(MAT_BOTTOM_SHEET_DATA) public dadosAtividade: any
        ) { }

    ngOnInit(): void {
        this.cadastroSucesso = false;
    }

    public fecharModal = (): void => {
        this.bottomSheetRef.dismiss();
    }

    public salvarAtividade = (form: NgForm): void => {
        console.log(form.value);

        this._atividadesService.salvarAtividade(form.value);
        this.cadastroSucesso = true;
    }

}
