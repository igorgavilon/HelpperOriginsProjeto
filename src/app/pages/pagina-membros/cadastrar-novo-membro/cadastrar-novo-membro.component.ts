import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import {Membro} from 'src/app/@core/common/interfaces/membro.interface';
import { MembrosService } from 'src/app/@core/services/membros.service';

@Component({
  selector: 'app-cadastrar-novo-membro',
  templateUrl: './cadastrar-novo-membro.component.html',
  styleUrls: ['./cadastrar-novo-membro.component.scss']
})
export class CadastrarNovoMembroComponent implements OnInit {

  constructor(
        private _membrosService: MembrosService,
        public bottomSheetRef: MatBottomSheetRef<CadastrarNovoMembroComponent>,
        @Inject(MAT_BOTTOM_SHEET_DATA) public dadosMembro: any
    ) { }

  ngOnInit(): void {
      console.log(this.dadosMembro.imagem_avatar);
  }

  public fecharModal = (): void => {
    this.bottomSheetRef.dismiss();
  }

  public salvarMembro = (membro: Membro): void => {
    this._membrosService.salvarMembro(membro);
    this.fecharModal();
  }

}
