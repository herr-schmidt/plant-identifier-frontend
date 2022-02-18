import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.sass']
})
export class ImageUploader {

  @Input() label: string = "";
  @Output() image = new EventEmitter<File>();

  imageToUpload: File | null = null;
  url: any;
  errorMessage = "Errore durante il caricamento: sono ammesse solo immagini";

  public onChange(e: Event) {
    const files = (e.target as HTMLInputElement).files;
    if (!files || files.length === 0) {
      return;
    }

    this.imageToUpload = files[0];

    const reader = new FileReader();
    reader.readAsDataURL(this.imageToUpload);
    reader.onload = (_event) => {
      this.url = reader.result;
    }

    if (!this.containsImage()) {
      return;
    }

    this.image.emit(this.imageToUpload);
  }

  public hasLabel() {
    return this.label !== "";
  }

  private containsImage() {
    return this.imageToUpload && this.imageToUpload['type'].split('/')[0] === 'image';
  }
}