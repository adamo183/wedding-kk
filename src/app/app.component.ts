import { Component, ViewChild } from '@angular/core';
import { AppContentComponent } from './components/app-content/app-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("appContent") appContent!: AppContentComponent
  public title = 'wedding-kk';

  public scrollToView(event: string) {
    this.appContent.scrollToSection(event);
  }
}
