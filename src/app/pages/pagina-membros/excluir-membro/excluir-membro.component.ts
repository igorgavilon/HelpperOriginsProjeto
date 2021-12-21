import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MembrosService } from 'src/app/@core/services/membros.service';

@Component({
  selector: 'app-excluir-membro',
  templateUrl: './excluir-membro.component.html',
  styleUrls: ['./excluir-membro.component.scss']
})
export class ExcluirMembroComponent implements OnInit {
    public exclusaoSucesso: boolean;

    constructor(
            private _membrosService: MembrosService,
            public bottomSheetRef: MatBottomSheetRef<ExcluirMembroComponent>,
            @Inject(MAT_BOTTOM_SHEET_DATA) public idMembro: number
        ) { }

    ngOnInit(): void {
        this.exclusaoSucesso = false;
    }

    public fecharModal = (): void => {
        this.bottomSheetRef.dismiss();
    }

    public excluirMembro = (): void => {
        this._membrosService.excluirMembroPeloId(this.idMembro);
        this.exclusaoSucesso = true;
    }

}
