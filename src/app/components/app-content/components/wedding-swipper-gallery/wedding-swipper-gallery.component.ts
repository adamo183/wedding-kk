import { Component, OnInit } from '@angular/core';
import { getStorage, ref, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-wedding-swipper-gallery',
  templateUrl: './wedding-swipper-gallery.component.html',
  styleUrls: ['./wedding-swipper-gallery.component.scss']
})
export class WeddingSwipperGalleryComponent implements OnInit {

  filenames = ['natalia-adam0.JPG', 'natalia-adam1.JPG', 'natalia-adam2.JPG', 'natalia-adam3.JPG', 'natalia-adam4.JPG'];
  images: string[] = [];
  async ngOnInit(): Promise<void> {
    const storage = getStorage();

    for (const file of this.filenames) {
      const url = await getDownloadURL(ref(storage, `/photo/${file}`));
      this.images.push(url);
    }
  }

}
