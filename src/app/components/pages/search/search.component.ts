import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryItem, Gallery, ImageItem, ImageSize, ThumbnailsPosition, GalleryModule } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkGalleryComponent } from '../../../@spk/spk-reusable-plugins/spk-gallery/spk-gallery.component';
const data = [
  {
    srcUrl: './assets/images/media/media-40.jpg',
    previewUrl: './assets/images/media/media-40.jpg',
    textImgUrl:'./assets/images/company-logos/6.png',
    ComponyTitle:'Beginner In.co',
    Title:'Beginner'
  },
  {
    srcUrl: './assets/images/media/media-41.jpg',
    previewUrl: './assets/images/media/media-41.jpg',
    textImgUrl:'./assets/images/company-logos/2.png',
    ComponyTitle:'Responsive Design',
    Title:'Responsive'
  },
  {
    srcUrl: './assets/images/media/media-42.jpg',
    previewUrl: './assets/images/media/media-42.jpg',
    textImgUrl:'./assets/images/company-logos/4.png',
    ComponyTitle:'JavaScript',
    Title:'JavaScript Devlops'
  },
  {
    srcUrl: './assets/images/media/media-43.jpg',
    previewUrl: './assets/images/media/media-43.jpg',
    textImgUrl:'./assets/images/company-logos/5.png',
    ComponyTitle:'Layout SCSS',
    Title:'Layoutscss'
  },
  {
    srcUrl: './assets/images/media/media-44.jpg',
    previewUrl: './assets/images/media/media-44.jpg',
    textImgUrl:'./assets/images/company-logos/6.png',
    ComponyTitle:'Frontend Development.co',
    Title:'Frontend'
  },
  {
    srcUrl: './assets/images/media/media-45.jpg',
    previewUrl: './assets/images/media/media-45.jpg',
    textImgUrl:'./assets/images/company-logos/7.png',
    ComponyTitle:'Backend Solutions',
    Title:'backenddevlops'
  },
  {
    srcUrl: './assets/images/media/media-46.jpg',
    previewUrl: './assets/images/media/media-46.jpg',
    textImgUrl:'./assets/images/company-logos/8.png',
    ComponyTitle:'Frontend Development.co',
    Title:'Frontend Dev'
  },
  {
    srcUrl: './assets/images/media/media-60.jpg',
    previewUrl: './assets/images/media/media-60.jpg',
    textImgUrl:'./assets/images/company-logos/9.png',
    ComponyTitle:'Flawless In.co',
    Title:'Flawless'
  },
]
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SharedModule,NgbModule,GalleryModule,LightboxModule,SpkDropdownsComponent,SpkGalleryComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  imageData = data;
  items!: GalleryItem[];
  constructor(public gallery: Gallery, public lightbox: Lightbox) {}
  ngOnInit() {
    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );

    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }
}
