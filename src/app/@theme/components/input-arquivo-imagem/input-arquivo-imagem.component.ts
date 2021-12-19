/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Component, OnInit, HostListener, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import IArquivoImagem from 'src/app/@core/common/interfaces/arquivo-imagem.interface';

@Component({
  selector: 'app-input-arquivo-imagem',
  templateUrl: './input-arquivo-imagem.component.html',
  styleUrls: ['./input-arquivo-imagem.component.scss']
})
export class InputArquivoImagemComponent implements OnInit {
    public error: string;
    public dragAreaClass: string;

    @Input()
    public arquivoImagemInput: IArquivoImagem;

    @Input()
    public atualizarArquivoImagem: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }
  @HostListener("dragover", ["$event"]) onDragOver(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("drop", ["$event"]) onDrop(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      const files: FileList = event.dataTransfer.files;
      this.saveFiles(files);
    }
  }

  onFileChange(event: any) {
    const files: FileList = event.target.files;
    this.saveFiles(files);
  }

  saveFiles(files: FileList) {

    if (files.length > 1) this.error = "Only one file at time allow";
    else {
        const arquivo = files[0];
        const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(arquivo));
        this.arquivoImagemInput = { arquivo, url };
        this.atualizarArquivoImagem(this.arquivoImagemInput);
        this.error = "";
        // console.log(files[0].size,files[0].name,files[0].type, url);
    }
  }
}
