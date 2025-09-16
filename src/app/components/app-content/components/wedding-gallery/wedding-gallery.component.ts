import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, GalleryItemTypes, ImageItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { ref, listAll, getDownloadURL } from '@angular/fire/storage';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-wedding-gallery',
  templateUrl: './wedding-gallery.component.html',
  styleUrls: ['./wedding-gallery.component.scss']
})
export class WeddingGalleryComponent implements OnInit {
  items: ImageItem[] = [];
  filelist: any[] = [];

  constructor(public gallery: Gallery, public lightbox: Lightbox, private storage: AngularFireStorage) {}

  ngOnInit(): void {
     this.loadImages();
  }

  galleryLink = 'https://photos.app.goo.gl/eQYDBzdEruxq2aqe8';

private loadImages() {
    const folderRef = this.storage.ref('photo');

    folderRef.listAll().subscribe((res) => {
      const downloads = res.items.map(itemRef =>
        this.storage.ref(itemRef.fullPath).getDownloadURL().toPromise()
      );
      Promise.all(downloads).then(urls => {
        this.items = this.items = urls.map(url => new ImageItem({
          src: url,
          thumb: url,
        }));
      });
    });
  }
}

