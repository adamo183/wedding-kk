import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingSwipperGalleryComponent } from './wedding-swipper-gallery.component';

describe('WeddingSwipperGalleryComponent', () => {
  let component: WeddingSwipperGalleryComponent;
  let fixture: ComponentFixture<WeddingSwipperGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingSwipperGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingSwipperGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
