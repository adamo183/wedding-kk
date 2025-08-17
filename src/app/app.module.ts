import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { WeddingGalleryComponent } from './components/app-content/components/wedding-gallery/wedding-gallery.component';
import { WeddingInfoComponent } from './components/app-content/components/wedding-info/wedding-info.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/services/dataService';
import { WeedingScheduleComponent } from './components/app-content/components/weeding-schedule/weeding-schedule.component';
import { WeedingMenuComponent } from './components/app-content/components/weeding-menu/weeding-menu.component';
import { WeedingDriveComponent } from './components/app-content/components/weeding-drive/weeding-drive.component';
import { WeddingSleepComponent } from './components/app-content/components/wedding-sleep/wedding-sleep.component';

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
    WeddingSleepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
