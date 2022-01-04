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
    public cadastroSucesso: boolean = false;
    public cadastroErro: boolean = false;
    public mensagemErro: string;

    constructor(
            private _atividadesService: AtividadesService,
            public bottomSheetRef: MatBottomSheetRef<CadastrarNovaAtividadeComponent>,
            @Inject(MAT_BOTTOM_SHEET_DATA) public dadosAtividade: Atividade
        ) { }

    ngOnInit(): void {
    }

    public fecharModal = (): void => {
        this.bottomSheetRef.dismiss();
    }

    public salvarAtividade = (form: NgForm): void => {
        this._atividadesService.salvarAtividade(form.value).subscribe({
            next: resposta => {
                this.cadastroSucesso = true;
            },
            error: erro => {
                this.mensagemErro = erro.error;
                this.cadastroErro = true;
            }
        });
    }

    public tentarNovamente(): void {
        this.cadastroErro = false;
    }

}
