import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FileUploader } from './file-uploader/file-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploader
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
