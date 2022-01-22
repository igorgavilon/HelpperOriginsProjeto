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

    @Input()
    public arquivoImagem: IArquivoImagem;

  constructor(private _membrosService: MembrosService) { }

  ngOnInit(): void {
  }

  public salvarMembro(form: NgForm): void {
    const {id, name, birthdate, allowance} = form.value;
    //formatar a data de aniversário: de yyyy-MM-dd para dd/MM/yyyy
    const birthDatePartes: string[] = birthdate.split("-");
    const dataAniversarioDiaMesAno = birthDatePartes.length > 1 ? `${birthDatePartes[2]}/${birthDatePartes[1]}/${birthDatePartes[0]}` : birthdate;
    const urlAvatar: string = this.arquivoImagem.url ? this.arquivoImagem.url + "" : "";
    this.salvarMembroClick(
        {
          id: id, 
          name: name, 
          avatar: urlAvatar, 
          birthdate: dataAniversarioDiaMesAno, 
          allowance: allowance, 
          status: this.dadosMembro.status,
          createdAt: this.dadosMembro.createdAt,
          updatedAt: this.dadosMembro.updatedAt   
        }
    );
  }

  public atualizarArquivoImagem = (dadosImagem: IArquivoImagem): void => {
    this.arquivoImagem = dadosImagem;
  }

}
