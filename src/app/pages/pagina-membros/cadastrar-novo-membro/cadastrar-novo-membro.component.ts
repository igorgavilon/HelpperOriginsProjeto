import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { IArquivoImagem } from 'src/app/@core/common/interfaces/arquivo-imagem.interface';
import {Membro} from 'src/app/@core/common/interfaces/membro.interface';
import { MembrosService } from 'src/app/@core/services/membros.service';

@Component({
  selector: 'app-cadastrar-novo-membro',
  templateUrl: './cadastrar-novo-membro.component.html',
  styleUrls: ['./cadastrar-novo-membro.component.scss']
})
export class CadastrarNovoMembroComponent implements OnInit {
    public cadastroSucesso: boolean = false;
    public cadastroErro: boolean = false;
    public mensagemErro: string;
    public arquivoImagemAvatar: IArquivoImagem = {arquivo: null, url: null};;

  constructor(
        private _membrosService: MembrosService,
        public bottomSheetRef: MatBottomSheetRef<CadastrarNovoMembroComponent>,
        @Inject(MAT_BOTTOM_SHEET_DATA) public dadosMembro: Membro
    ) { }

  ngOnInit(): void {}

  public fecharModal = (): void => {
    this.bottomSheetRef.dismiss();
  }

  public salvarMembro = (membro: Membro): void => {
    this._membrosService.salvarMembro(membro).subscribe({
      next: resposta => {
          //this.salvarAvatarMembro();
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
