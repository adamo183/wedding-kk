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

  public sideImages = [
    'assets/edge_flowers.jpg',
    'assets/edge_flowers_1.jpg',
    'assets/edge_flowers_2.jpg'
  ];

  public repeatedImages: string[] = [];
    public leftImages: string[] = [];
      public rightImages: string[] = [];

  public scrollToView(event: string) {
    this.appContent.scrollToSection(event);
  }

  generateSideImages() {
    const approxImageHeight = 400;
    const repeatCount = Math.ceil(window.innerHeight / approxImageHeight);

    for (let i = 0; i < 3; i++) {
      this.leftImages.push(...this.shuffle([...this.sideImages]));
      this.rightImages.push(...this.shuffle([...this.sideImages]));
    }

    this.leftImages = this.leftImages.slice(0, -4);
    this.rightImages = this.rightImages.slice(0, -4);
  }

  constructor() {
    this.generateSideImages();
  }


  public shuffle(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
