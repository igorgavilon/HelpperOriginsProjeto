import { Component, Input } from '@angular/core';
import {Atividade} from 'src/app/@core/common/interfaces/atividade.interface';
import { AtividadesService } from 'src/app/@core/services/atividades.service';

@Component({
  selector: 'app-form-atividade',
  templateUrl: './form-atividade.component.html',
  styleUrls: ['./form-atividade.component.scss']
})
export class FormAtividadeComponent {
    @Input()
    public cancelarFormClick: any;

    @Input()
    public salvarAtividadeClick: any;

    @Input()
    public dadosAtividade: Atividade;

    constructor(private _atividadesService: AtividadesService) { }

//   public salvarMembro(form: NgForm): void {
//       console.log(form.value);

//     const {id_membro, nome, data_nascimento, valor_mesada} = form.value;
//     this.salvarMembroClick(
//         {id_membro: id_membro, nome: nome, imagem_avatar: this.arquivoImagem, data_nascimento: data_nascimento, valor_mesada: valor_mesada}
//     );
//   }

}
