import { Component } from '@angular/core';
import { IdentificationService } from 'src/services/identification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  image: File | null = null;
  imageClassification: string;

  constructor(private identificationService: IdentificationService) {
    this.imageClassification = "None";
  }

  public addImage(newImage: File) {
    this.image = newImage;
  }

  public identifyPlant() {
    this.identificationService.identifyPlant(1)
      .subscribe(response => this.imageClassification = response);
  }
}
