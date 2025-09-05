import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/sharedmodule';
import { GalleryItem, Gallery, ImageItem, ImageSize, ThumbnailsPosition, GalleryModule } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { SpkGalleryComponent } from '../../../../@spk/spk-reusable-plugins/spk-gallery/spk-gallery.component';
import { CommonModule } from '@angular/common';
const data = [
  {
    srcUrl: './assets/images/media/media-48.jpg',
    previewUrl: './assets/images/media/media-48.jpg',
  },
  {
    srcUrl: './assets/images/media/media-49.jpg',
    previewUrl: './assets/images/media/media-49.jpg',
  },
  {
    srcUrl: './assets/images/media/media-50.jpg',
    previewUrl: './assets/images/media/media-50.jpg',
  },
  {
    srcUrl: './assets/images/media/media-51.jpg',
    previewUrl: './assets/images/media/media-51.jpg',
  },
  {
    srcUrl: './assets/images/media/media-52.jpg',
    previewUrl: './assets/images/media/media-52.jpg',
  },
  {
    srcUrl: './assets/images/media/media-53.jpg',
    previewUrl: './assets/images/media/media-53.jpg',
  },
  {
    srcUrl: './assets/images/media/media-54.jpg',
    previewUrl: './assets/images/media/media-54.jpg',
  },
  {
    srcUrl: './assets/images/media/media-55.jpg',
    previewUrl: './assets/images/media/media-55.jpg',
  },
  {
    srcUrl: './assets/images/media/media-56.jpg',
    previewUrl: './assets/images/media/media-56.jpg',
  },
];
@Component({
  selector: 'app-blogdetails',
  standalone: true,
  imports: [SharedModule,RouterModule,GalleryModule,LightboxModule,OverlayscrollbarsModule,SpkGalleryComponent,CommonModule],
  templateUrl: './blogdetails.component.html',
  styleUrl: './blogdetails.component.scss'
})
export class BlogdetailsComponent {
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

  blogs = [
    { 
      imgSrc: './assets/images/media/blog/11.jpg', 
      category: 'Nature', 
      title: 'The Wonders of Nat...', 
      date: '18 Jan 2024, 15:46', 
      color: 'text-primary' 
    },
    { 
      imgSrc: './assets/images/media/blog/12.jpg', 
      category: 'Tourism', 
      title: 'Embarking on a Touris...', 
      date: '20 Feb 2024, 03:03', 
      color: 'text-success' 
    },
    { 
      imgSrc: './assets/images/media/blog/10.jpg', 
      category: 'Technology', 
      title: 'Navigating the Digit...', 
      date: '05 Feb 2024, 16:23', 
      color: 'text-info' 
    },
    { 
      imgSrc: './assets/images/media/blog/13.jpg', 
      category: 'Networking', 
      title: 'More Designing on ...', 
      date: '13 Mar 2024, 20:14', 
      color: 'text-secondary' 
    }
  ];
  categories = [
    { icon: 'ri-brush-fill', label: 'Desiging', count: 13, iconBgColor: 'bg-primary',bgColor: 'bg-primary-transparent', textColor: 'text-fixed-white' },
    { icon: 'ri-pencil-fill', label: 'Modern', count: 36, iconBgColor: 'bg-success',bgColor: 'bg-success-transparent', textColor: 'text-fixed-white' },
    { icon: 'ri-microscope-fill', label: 'Science', count: 15, iconBgColor: 'bg-info',bgColor: 'bg-info-transparent', textColor: 'text-fixed-white' },
    { icon: 'ri-flight-takeoff-fill', label: 'Trips', count: 17, iconBgColor: 'bg-secondary',bgColor: 'bg-secondary-transparent', textColor: 'text-fixed-white' },
    { icon: 'ri-magic-fill', label: 'Beauty', count: 66, iconBgColor: 'bg-secondary',bgColor: 'bg-secondary-transparent', textColor: 'text-fixed-white' },
    { icon: 'ri-shirt-fill', label: 'Styling', count: 33, iconBgColor: 'bg-success',bgColor: 'bg-success-transparent', textColor: 'text-fixed-white' }
  ];
}
