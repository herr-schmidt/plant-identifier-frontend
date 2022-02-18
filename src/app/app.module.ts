import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageUploader } from './file-uploader/image-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploader
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
