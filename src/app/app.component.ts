import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  file: File | null = null;

  addFile(newFile: File) {
    this.file = newFile;
    console.log(this.file.text());
  }
}
