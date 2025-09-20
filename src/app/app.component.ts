import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AppContentComponent } from './components/app-content/app-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild("appContent") appContent!: AppContentComponent
  public title = 'wedding-kk';

  public sideImages = [
    'assets/edge_flowers.jpg',
    'assets/edge_flowers_1.jpg',
    'assets/edge_flowers_2.jpg'
  ];

  public leftImages: any[] = [];
  public rightImages: any[] = [];

  public scrollToView(event: string) {
    this.appContent.scrollToSection(event);
  }

  generateSideImages() {
    const approxImageHeight = 400;

    const repeatCount = Math.ceil(document.body.scrollHeight / approxImageHeight);

    for (let i = 0; i < repeatCount; i++) {
      this.leftImages.push({ img: this.shuffle([...this.sideImages])[0], marginRandom: this.getRandomMargin(50, 150)});
      this.rightImages.push({ img: this.shuffle([...this.sideImages])[0], marginRandom: this.getRandomMargin(50, 150)});
    }
  }

  constructor() {
  }

    private getRandomMargin(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngAfterViewInit() {
  setTimeout(() => {
    this.generateSideImages();
  });
}

  public shuffle(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
