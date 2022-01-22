import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { IArquivoImagem } from 'src/app/@core/common/interfaces/arquivo-imagem.interface';
import {Membro} from 'src/app/@core/common/interfaces/membro.interface';
import { MembrosService } from 'src/app/@core/services/membros.service';

@Component({
  selector: 'app-card-membro-infos',
  templateUrl: './card-membro-infos.component.html',
  styleUrls: ['./card-membro-infos.component.scss']
})
export class CardMembroInfosComponent implements OnInit {
    
    @Input()
    public membro: Membro;

    @Input()
    public excluirMembroClick: (idMembro: string) => void;

    @Input()
    public editarMembroClick: (membro: Membro, arquivoImagemAvatar: IArquivoImagem) => void;

    @Input()
    public verListaMembro: (idMembro: string) => void;

    public arquivoImagem: IArquivoImagem = { arquivo: null, url: null };

    constructor(private sanitizer: DomSanitizer, private _membrosService: MembrosService) {}

    ngOnInit(): void {            
      //busca o avatar do membro
      this._membrosService.retornaAvatarMembroPeloId(this.membro.id).subscribe({
        next: resposta => {
          const arquivo: File = resposta;          
          const url: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(arquivo));
          this.arquivoImagem = { arquivo, url };          
        },
        error: erro => {          
        }
      });   
    }

}
