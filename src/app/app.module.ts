import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IdentificationService } from 'src/services/identification.service';

import { AppComponent } from './app.component';
import { ImageUploader } from './file-uploader/image-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploader
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [IdentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
