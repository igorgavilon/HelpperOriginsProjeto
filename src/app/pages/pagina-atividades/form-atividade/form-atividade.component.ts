import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Atividade} from 'src/app/@core/common/interfaces/atividade.interface';
import { AtividadesService } from 'src/app/@core/services/atividades.service';

@Component({
  selector: 'app-form-atividade',
  templateUrl: './form-atividade.component.html',
  styleUrls: ['./form-atividade.component.scss']
})
export class FormAtividadeComponent {
    @Input()
    public cancelarFormClick: () => void;

    @Input()
    public salvarAtividadeClick: (form: NgForm) => void;

    @Input()
    public dadosAtividade: Atividade;

    constructor(private _atividadesService: AtividadesService) { }


}
