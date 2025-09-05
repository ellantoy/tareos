import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/sharedmodule';
import { SpkNftCardComponent } from '../../../../@spk/reusable-apps/spk-nft-card/spk-nft-card.component';

@Component({
  selector: 'app-live-auction',
  standalone: true,
  imports: [SharedModule,NgbDropdownModule,SpkNftCardComponent],
  templateUrl: './live-auction.component.html',
  styleUrl: './live-auction.component.scss'
})
export class LiveAuctionComponent {
  cardData1=[
    {
      id:1,
      avatarSize:"sm",
      cardClass:"shadow-none border",
      bodyClass:"card-body",
      imageClass:"overflow-hidden rounded mb-3",
      titleClass:"d-flex align-items-start gap-2",
      time1:"04hrs : 24m : 38s",
      title:"Abstract Digital Art",
      image:"./assets/images/nft-images/2.jpg",
      image1:"./assets/images/faces/14.jpg",
      name:"Manistics NFT",
      value:"0.015ETH",
      mail:"@manistics454",
      likes1:"1.43k"
    },
    {
        id:2,
        avatarSize:"sm",
        cardClass:"shadow-none border",
        bodyClass:"card-body",
        imageClass:"overflow-hidden rounded mb-3",
        titleClass:"d-flex align-items-start gap-2",
        time1:"03hrs : 12m : 45s",
        title:"Abstract Digital Art",
        image:"./assets/images/nft-images/3.jpg",
        image1:"./assets/images/faces/2.jpg",
        name:"Manistics NFT",
        value:"0.015ETH",
        mail:"@manistics454",
        likes1:"1.43k"
      },
    {
        id:3,
        avatarSize:"sm",
        cardClass:"shadow-none border",
        bodyClass:"card-body",
        imageClass:"overflow-hidden rounded mb-3",
        titleClass:"d-flex align-items-start gap-2",
        time1:"05hrs : 03m : 20s",
        title:"CyberCreations",
        image:"./assets/images/nft-images/4.jpg",
        image1:"./assets/images/faces/11.jpg",
        name:"CyberArt NFT ",
        value:"0.014ETH",
        mail:"@cyberartworks154",
        likes1:"1.43k"
      },
      {
        id:4,
        avatarSize:"sm",
        cardClass:"shadow-none border",
        bodyClass:"card-body",
        imageClass:"overflow-hidden rounded mb-3",
        titleClass:"d-flex align-items-start gap-2",
        time1:"02hrs : 50m : 55s",
        title:" Dreamscapes",
        image:"./assets/images/nft-images/5.jpg",
        image1:"./assets/images/faces/12.jpg",
        name:"GeoNFT NFT",
        value:"0.016ETH",
        mail:"@geonft_designs47",
        likes1:"1.43k"
      },
      {
        id:5,
        avatarSize:"sm",
        cardClass:"shadow-none border",
        bodyClass:"card-body",
        imageClass:"overflow-hidden rounded mb-3",
        titleClass:"d-flex align-items-start gap-2",
        time1:"06hrs : 15m : 10s",
        title:"Vibrant Pixel Art",
        image:"./assets/images/nft-images/6.jpg",
        image1:"./assets/images/faces/3.jpg",
        name:"PixelPerfect",
        value:"0.017ETH",
        mail:"@pixelperfectnft74",
        likes1:"1.43k"
      },
      {
        id:6,
        avatarSize:"sm",
        cardClass:"shadow-none border",
        bodyClass:"card-body",
        imageClass:"overflow-hidden rounded mb-3",
        titleClass:"d-flex align-items-start gap-2",
        time1:"01hrs : 58m : 23s",
        title:"Surreal Fantasy Art",
        image:"./assets/images/nft-images/7.jpg",
        image1:"./assets/images/faces/14.jpg",
        name:"Fantasia NFT",
        value:"0.018ETH",
        mail:"@fantasianft13",
        likes1:"1.43k"
      },
     
  ]
}
