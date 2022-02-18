import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  image: File | null = null;

  addImage(newImage: File) {
    this.image = newImage;
  }
}
