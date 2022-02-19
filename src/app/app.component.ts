import { Component } from '@angular/core';
import { IdentificationService } from 'src/services/identification.service';
import { Utils } from 'src/utils/utils';
import { Image } from 'src/model/model';

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

  guessedImage: Image = {
    imageFile: null,
    imageURL: null
  };

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
        this.guessedImage.imageURL = undefined;

        var blob: any = response;
        // A Blob misses the following attributes in order to be a File
        blob.lastModifiedDate = new Date();
        blob.name = "guess.jpg";

        this.guessedImage.imageFile = <File>blob;

        Utils.setImageUrl(this.guessedImage);
      }
      );
  }
}
