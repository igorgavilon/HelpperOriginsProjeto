import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import {Membro} from 'src/app/@core/common/interfaces/membro.interface';
import { MembrosService } from 'src/app/@core/services/membros.service';

@Component({
  selector: 'app-editar-dados-membro',
  templateUrl: './editar-dados-membro.component.html',
  styleUrls: ['./editar-dados-membro.component.scss']
})
export class EditarDadosMembroComponent implements OnInit {
    public edicaoSucesso: boolean;

    constructor(
            private _membrosService: MembrosService,
            public bottomSheetRef: MatBottomSheetRef<EditarDadosMembroComponent>,
            @Inject(MAT_BOTTOM_SHEET_DATA) public dadosMembro: any
        ) { }

    ngOnInit(): void {
        this.edicaoSucesso = false;
    }

    public fecharModal = (): void => {
        this.bottomSheetRef.dismiss();
    }

    public salvarMembro = (membro: Membro): void => {
        this._membrosService.salvarMembro(membro);
        this.edicaoSucesso = true;
    }
}
