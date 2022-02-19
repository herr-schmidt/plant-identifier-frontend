import { Component } from '@angular/core';
import { IdentificationService } from 'src/services/identification.service';
import { Utils } from 'src/utils/utils';
import { Classification, Image } from 'src/model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  uploadedImage: Image = {
    imageFile: null,
    imageURL: null
  };

  classification: Classification = {
    species: "",
    confidence: 0.0
  }



  private translations: Map<string, string> =
    new Map([
      ["daisy", "Margherita"],
      ["dandelion", "Tarassaco"],
      ["roses", "Rosa"],
      ["sunflowers", "Girasole"],
      ["tulips", "Tulipano"],
    ]);


  constructor(private identificationService: IdentificationService) {
  }

  public addImage(newImageFile: File) {
    this.uploadedImage.imageFile = newImageFile;
  }

  public identifyPlant() {
    if (!this.uploadedImage.imageFile) {
      return;
    }
    this.identificationService.identifyPlant(this.uploadedImage.imageFile)
      .subscribe(response => {
        this.classification = { ...response };
        this.classification.species = this.translations.get(this.classification.species)!;
        console.log(response);
      }
      );
  }
}
