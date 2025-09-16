import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { WeddingGalleryComponent } from './components/app-content/components/wedding-gallery/wedding-gallery.component';
import { WeddingInfoComponent } from './components/app-content/components/wedding-info/wedding-info.component';
import { WeedingScheduleComponent } from './components/app-content/components/weeding-schedule/weeding-schedule.component';
import { WeedingMenuComponent } from './components/app-content/components/weeding-menu/weeding-menu.component';
import { WeedingDriveComponent } from './components/app-content/components/weeding-drive/weeding-drive.component';
import { WeddingSleepComponent } from './components/app-content/components/wedding-sleep/wedding-sleep.component';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { firebaseConfig } from './config/firebase.config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMenuComponent,
    AppContentComponent,
    WeddingGalleryComponent,
    WeddingInfoComponent,
    WeedingScheduleComponent,
    WeedingMenuComponent,
    WeedingDriveComponent,
    WeddingSleepComponent,
    WeddingSwipperGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GalleryModule,
    LightboxModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
