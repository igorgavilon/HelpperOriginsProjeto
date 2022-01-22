import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MembrosService } from 'src/app/@core/services/membros.service';

@Component({
  selector: 'app-excluir-membro',
  templateUrl: './excluir-membro.component.html',
  styleUrls: ['./excluir-membro.component.scss']
})
export class ExcluirMembroComponent implements OnInit {
    public exclusaoSucesso: boolean = false;
    public exclusaoErro: boolean = false;
    public mensagemErro: string;

    constructor(
            private _membrosService: MembrosService,
            public bottomSheetRef: MatBottomSheetRef<ExcluirMembroComponent>,
            @Inject(MAT_BOTTOM_SHEET_DATA) public idMembro: string
        ) { }

    ngOnInit(): void {}

    public fecharModal = (): void => {
        this.bottomSheetRef.dismiss();
    }

    public excluirMembro = (): void => {
        this._membrosService.excluirMembroPeloId(this.idMembro).subscribe({
            next: resposta => {
                this.exclusaoSucesso = true;
            },
            error: erro => {
                this.mensagemErro = erro.error;
                this.exclusaoErro = true;
            }
        });
    }

    public tentarNovamente(): void {
        this.exclusaoErro = false;
    }

}
