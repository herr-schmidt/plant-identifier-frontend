import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.sass']
})
export class FileUploader {

  @Input() label: string = "";
  @Output() file = new EventEmitter<File>();

  fileToUpload: File | null = null;

  addFile(e: Event) {
    this.fileToUpload = (e.target as HTMLInputElement).files![0];
    this.file.emit(this.fileToUpload)
  }

  hasLabel() {
    return this.label !== "";
  }
}
