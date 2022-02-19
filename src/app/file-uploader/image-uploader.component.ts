import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Utils } from 'src/utils/utils';
import { Image } from 'src/model/model';

@Component({
  selector: 'image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.sass']
})
export class ImageUploader {

  @Input() label: string = "";
  @Output() image = new EventEmitter<File>();

  imageToUpload: Image = {
    imageFile: null,
    imageURL: null
  }

  errorMessage = "Errore durante il caricamento: sono ammesse solo immagini";

  public onChange(e: Event) {
    const files = (e.target as HTMLInputElement).files;
    if (!files || files.length === 0) {
      return;
    }

    this.imageToUpload.imageFile = files[0];

    Utils.setImageUrl(this.imageToUpload);

    if (!this.containsImage()) {
      return;
    }

    this.image.emit(this.imageToUpload.imageFile);
  }

  public hasLabel() {
    return this.label !== "";
  }

  private containsImage() {
    return this.imageToUpload.imageFile && this.imageToUpload.imageFile['type'].split('/')[0] === 'image';
  }
}