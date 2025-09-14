import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-wedding-swipper-gallery',
  templateUrl: './wedding-swipper-gallery.component.html',
  styleUrls: ['./wedding-swipper-gallery.component.scss']
})
export class WeddingSwipperGalleryComponent implements OnInit {

  constructor(private storage: AngularFireStorage) {}

  filenames = ['natalia-adam0.JPG', 'natalia-adam1.JPG', 'natalia-adam2.JPG', 'natalia-adam3.JPG', 'natalia-adam4.JPG'];
  images: any[] = [];

  swiperConfig = {
    slidesPerView: 1,
    navigation: true,
    pagination: { clickable: true },
    lazy: { loadPrevNext: true, loadOnTransitionStart: true }
  };

  ngOnInit(): void {
    this.filenames.forEach(file => {
      this.storage.ref(`photo/${file}`).getDownloadURL().subscribe(url => {
        console.log(url)
        this.images.push(url);
      });
    });
  }

  imageObject = [{
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
      title: 'Hummingbirds are amazing creatures'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
      title: 'Example with title.'
  },{
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
      title: 'Hummingbirds are amazing creatures'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      title: 'Example two with title.'
  }];
}
