import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao-status-falta',
  templateUrl: './botao-status-falta.component.html',
  styleUrls: ['./botao-status-falta.component.scss']
})
export class BotaoStatusFaltaComponent implements OnInit {
    @Input()
    public atividadeEmFalta: boolean;

    @Output()
    public botaoStatusClicado: EventEmitter<any> = new EventEmitter();

    public texto: string;

  constructor() { }

  ngOnInit(): void {
    this.texto = this.atividadeEmFalta ? "Faltou" : "Marcar falta";
  }

  public atualizarStatusFalta(): void {
    this.atividadeEmFalta = !this.atividadeEmFalta;
    this.texto = this.atividadeEmFalta ? "Faltou" : "Marcar falta";
    this.botaoStatusClicado.emit(this.atividadeEmFalta);
  }

}
