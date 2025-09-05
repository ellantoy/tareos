import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/sharedmodule';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkNftCardComponent } from '../../../../@spk/reusable-apps/spk-nft-card/spk-nft-card.component';
@Component({
  selector: 'app-create-nft',
  standalone: true,
  imports: [SharedModule,FilePondModule,SpkNgSelectComponent,SpkNftCardComponent],
  templateUrl: './create-nft.component.html',
  styleUrl: './create-nft.component.scss'
})
export class CreateNftComponent {
  @ViewChild("myPond") myPond!: FilePondComponent;


  pondFiles: FilePond.FilePondOptions["files"] = [
  
  ];
  dropzoneOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: "Png, Gif, MP4 (or) MP3, WEBP, 3D Model Browse",
  };
  pondHandleInit() {
  }
  
  pondHandleAddFile(event: any) {
  }
  
  pondHandleActivateFile(event: any) {
  }
  Royality=[
    {label:'Choose Royalities',value:1},
    {label:'Flat Royalty',value:2},
    {label:'Graduated Royalty',value:3},
    {label:'Tiered Royalty',value:4},
    {label:'Time-Limited Royalty',value:5},
    {label:'Customized Royalty',value:6},
  ]
  cardData1=[
    {
      id:1,
      avatarSize:"sm",
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
  ]
}
