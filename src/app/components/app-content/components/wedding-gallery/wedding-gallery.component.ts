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
  galleryLink = 'https://photos.app.goo.gl/eQYDBzdEruxq2aqe8';

  constructor(public gallery: Gallery, public lightbox: Lightbox, private storage: AngularFireStorage) {}

  ngOnInit(): void {
     this.loadImages();
  }

  private loadImages() {
    const folderRef = this.storage.ref('photo');
  
    folderRef.listAll().subscribe((res) => {
      res.items.forEach(itemRef => {
        this.storage.ref(itemRef.fullPath).getDownloadURL().subscribe(url => {
          this.items = [
            ...this.items,
            new ImageItem({ src: url, thumb: url })
          ];
        });
      });
    });
  }
}
  
