import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {IArquivoImagem} from 'src/app/@core/common/interfaces/arquivo-imagem.interface';
import {Membro} from 'src/app/@core/common/interfaces/membro.interface';
import { MembrosService } from 'src/app/@core/services/membros.service';

@Component({
  selector: 'app-form-membro',
  templateUrl: './form-membro.component.html',
  styleUrls: ['./form-membro.component.scss']
})
export class FormMembroComponent implements OnInit {
    @Input()
    public cancelarFormClick: () => void;

    @Input()
    public salvarMembroClick: (membro: Membro) => void;

    @Input()
    public dadosMembro: Membro;

    public arquivoImagem: IArquivoImagem;

  constructor(private _membrosService: MembrosService) { }

  ngOnInit(): void {
      this.arquivoImagem = this.dadosMembro.imagem_avatar;
  }

  public salvarMembro(form: NgForm): void {
      console.log(form.value);

    const {id_membro, nome, data_nascimento, valor_mesada} = form.value;
    this.salvarMembroClick(
        {id_membro: id_membro, nome: nome, imagem_avatar: this.arquivoImagem, data_nascimento: data_nascimento, valor_mesada: valor_mesada}
    );
  }

  public atualizarArquivoImagem = (dadosImagem: IArquivoImagem): void => {
    this.arquivoImagem = dadosImagem;
  }

}
