import { Component, Input } from '@angular/core';
import {Membro} from 'src/app/@core/common/interfaces/membro.interface';

@Component({
  selector: 'app-card-membro-infos',
  templateUrl: './card-membro-infos.component.html',
  styleUrls: ['./card-membro-infos.component.scss']
})
export class CardMembroInfosComponent   {
    @Input()
    public _membro: Membro;

    @Input()
    public excluirMembroClick: any;

    @Input()
    public editarMembroClick: any;

}
