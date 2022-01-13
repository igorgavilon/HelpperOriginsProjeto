import { Component, Input } from '@angular/core';
import {Atividade} from 'src/app/@core/common/interfaces/atividade.interface';

@Component({
  selector: 'app-card-atividade-infos',
  templateUrl: './card-atividade-infos.component.html',
  styleUrls: ['./card-atividade-infos.component.scss']
})
export class CardAtividadeInfosComponent {
    @Input()
    public _atividade: Atividade;

    @Input()
    public excluirAtividadeClick: (idAtividade: number) => void;

    @Input()
    public editarAtividadeClick: (idAtividade: number) => void;
}
