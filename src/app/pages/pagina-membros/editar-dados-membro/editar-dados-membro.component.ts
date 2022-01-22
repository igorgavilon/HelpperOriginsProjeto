import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { IDadosMembro } from 'src/app/@core/common/interfaces/dados-membro.interface';
import {Membro} from 'src/app/@core/common/interfaces/membro.interface';
import { MembrosService } from 'src/app/@core/services/membros.service';

@Component({
  selector: 'app-editar-dados-membro',
  templateUrl: './editar-dados-membro.component.html',
  styleUrls: ['./editar-dados-membro.component.scss']
})
export class EditarDadosMembroComponent implements OnInit {
    public edicaoSucesso: boolean = false;
    public edicaoErro: boolean = false;
    public mensagemErro: string;

    constructor(
            private _membrosService: MembrosService,
            public bottomSheetRef: MatBottomSheetRef<EditarDadosMembroComponent>,
            @Inject(MAT_BOTTOM_SHEET_DATA) public dadosMembro: IDadosMembro
        ) { }

    ngOnInit(): void {
    }

    public fecharModal = (): void => {
        this.bottomSheetRef.dismiss();
    }

    public salvarMembro = (membro: Membro): void => {
        this._membrosService.salvarMembro(membro).subscribe({
            next: resposta => {
                //this.salvarAvatarMembro();
                this.edicaoSucesso = true;
            },
            error: erro => {
                this.mensagemErro = erro.error;
                this.edicaoErro = true;
            }
        });
    }

    // public salvarAvatarMembro(): void {
    //     this._membrosService.salvarAvatarMembro(this.dadosMembro.membro.id, this.dadosMembro.arquivoImagemAvatar).subscribe({
    //         next: resposta => {
                
    //         },
    //         error: erro => {
    //             this.mensagemErro = erro.error;
    //             this.edicaoErro = true;
    //         }
    //     });
    // }

    public tentarNovamente(): void {
        this.edicaoErro = false;
    }
}
