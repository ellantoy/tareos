import{a as _}from"./chunk-CXQQ7CNG.js";import{a as D,b as M}from"./chunk-MYVJRBPS.js";import"./chunk-ZP3QAILQ.js";import"./chunk-KEFF6A6H.js";import{Aa as g,O as y,P as k,Q as A}from"./chunk-IWIKM7QT.js";import"./chunk-3SGW3PUB.js";import{Cb as a,Hc as v,Ib as f,Rb as c,Uc as h,Vc as C,Xb as p,gc as o,he as I,lc as w,oc as b,pc as N,rc as S,sc as j,tc as t,uc as r,vc as l,wb as u}from"./chunk-6HZOIT4N.js";import"./chunk-2EBTC7QX.js";import{f as E}from"./chunk-66YHNWRR.js";var n={};E(n,{carousel1:()=>T,carousel2:()=>R,carousel3:()=>$,carousel4:()=>O,carousel5:()=>V,carousel6:()=>B,carousel7:()=>H,carousel8:()=>G,carouselReuse:()=>x,carouselts:()=>F,carouselts2:()=>z,carouselts3:()=>W,carouselts4:()=>P,carouselts5:()=>q,carouselts7:()=>L});var x=`
<div [id]="carouselId" class="carousel slide {{carouselClass}}" data-bs-ride="carousel">
    <ngb-carousel class="carousel-inner" [interval]="interval" [showNavigationArrows]="showNavigationArrows"
        [showNavigationIndicators]="showNavigationIndicators">
        @for(image of images; track $index){
        @if(image.title){
        <ng-template ngbSlide>
            <img [src]="image.src" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5 class="text-fixed-white">{{image.title}}</h5>
                <p>{{image.description}}</p>
            </div>
        </ng-template>
        }
        @else {
        <ng-template ngbSlide>

            <div class="carousel-item" class="carousel-item active">
                <img [src]="image" class="d-block w-100" alt="...">
            </div>
        </ng-template>
        }
        }
    </ngb-carousel>
</div>`,T=`<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
@if(images5){
<ngb-carousel class="carousel-inner" [interval]="3000" [showNavigationArrows]="false"
    [showNavigationIndicators]="false">

    @for (image of images5; track images5) {
    <ng-template ngbSlide class="carousel-item active">
        <img [src]="image.src" class="d-block w-100" alt="...">
    </ng-template>
    }
</ngb-carousel>
}
</div>`,F=`import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/carousel';
import * as tsCodedata from '../../../shared/prismData/advancedUi/carousel';


@Component({
  selector: 'app-carousels',
  standalone: true,
  imports: [NgbModule,SharedModule,ShowcodeCardComponent],
  templateUrl: './carousels.component.html',
  styleUrl: './carousels.component.scss'
})
export class CarouselsComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }


  images = [
    './assets/images/media/media-26.jpg',
    './assets/images/media/media-27.jpg',
    './assets/images/media/media-33.jpg',
  ];
}`,R=`<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

@if(images6){
<ngb-carousel class="carousel-inner" [interval]="3000" [showNavigationArrows]="true"
    [showNavigationIndicators]="false">
    @for (image of images6; track images6) {
    <ng-template ngbSlide class="carousel-item active">
        <img [src]="image.src" class="d-block w-100" alt="...">
    </ng-template>
    }
</ngb-carousel>
}

</div>`,z=`import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/carousel';
import * as tsCodedata from '../../../shared/prismData/advancedUi/carousel';


@Component({
  selector: 'app-carousels',
  standalone: true,
  imports: [NgbModule,SharedModule,ShowcodeCardComponent],
  templateUrl: './carousels.component.html',
  styleUrl: './carousels.component.scss'
})
export class CarouselsComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }


  imagescontrol = [
    './assets/images/media/media-28.jpg',
    './assets/images/media/media-31.jpg',
    './assets/images/media/media-29.jpg',
  ];
}`,$=`@if (images2) {
    <ngb-carousel>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-25.jpg" class="d-block w-100" alt="..." />
            </div>
        </ng-template>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-29.jpg" class="d-block w-100" alt="..." />
            </div>

        </ng-template>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-30.jpg" class="d-block w-100" alt="..." />
            </div>

        </ng-template>
    </ngb-carousel>
    }`,W=`import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/carousel';
import * as tsCodedata from '../../../shared/prismData/advancedUi/carousel';


@Component({
  selector: 'app-carousels',
  standalone: true,
  imports: [NgbModule,SharedModule,ShowcodeCardComponent],
  templateUrl: './carousels.component.html',
  styleUrl: './carousels.component.scss'
})
export class CarouselsComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }


  imagesIndicators = [
    './assets/images/media/media-25.jpg',
    './assets/images/media/media-29.jpg',
    './assets/images/media/media-30.jpg',
  ];
}`,O=`@if (images4) {
    <ngb-carousel>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-59.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-caption d-none d-md-block">
                <h3 class="text-fixed-white">First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
        </ng-template>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-60.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-caption d-none d-md-block">
                <h3 class="text-fixed-white">Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </ng-template>
        <ng-template ngbSlide>
            <div class="picsum-img-wrapper">
                <img src="./assets/images/media/media-61.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-caption d-none d-md-block">
                <h3 class="text-fixed-white">Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
        </ng-template>
    </ngb-carousel>
    }`,P=`import { Component } from '@angular/core';
    import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
    import { SharedModule } from '../../../shared/sharedmodule';
    import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
    import * as prismCodeData from '../../../shared/prismData/advancedUi/carousel';
    import * as tsCodedata from '../../../shared/prismData/advancedUi/carousel';
    
    
    @Component({
      selector: 'app-carousels',
      standalone: true,
      imports: [NgbModule,SharedModule,ShowcodeCardComponent],
      templateUrl: './carousels.component.html',
      styleUrl: './carousels.component.scss'
    })
    export class CarouselsComponent {
      prismCode = prismCodeData;
      tsCodedata=tsCodedata
      constructor(config: NgbCarouselConfig) {
        // customize default values of carousels used by this component tree
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
      }
    
    
      images = [
        './assets/images/media/media-26.jpg',
        './assets/images/media/media-27.jpg',
        './assets/images/media/media-33.jpg',
      ];
    }`,V=`<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">

@if (images7) {
<ngb-carousel class="carousel-inner" [interval]="3000" [showNavigationArrows]="true"
    [showNavigationIndicators]="false">
    @for (image of images7; track images7) {
    <ng-template ngbSlide class="carousel-item">
        <img [src]="image.src" class="d-block w-100" alt="...">
    </ng-template>
    }
</ngb-carousel>
}
</div>`,q=`import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/carousel';
import * as tsCodedata from '../../../shared/prismData/advancedUi/carousel';


@Component({
  selector: 'app-carousels',
  standalone: true,
  imports: [NgbModule,SharedModule,ShowcodeCardComponent],
  templateUrl: './carousels.component.html',
  styleUrl: './carousels.component.scss'
})
export class CarouselsComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }


  images = [
    './assets/images/media/media-26.jpg',
    './assets/images/media/media-27.jpg',
    './assets/images/media/media-33.jpg',
  ];
}`,B=` <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
<ngb-carousel class="carousel-inner" [interval]="2800" [showNavigationArrows]="true"
    [showNavigationIndicators]="false">
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-40.jpg" class="d-block w-100" alt="..." />
    </ng-template>
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-41.jpg" class="d-block w-100" alt="..." />
    </ng-template>
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-42.jpg" class="d-block w-100" alt="..." />
    </ng-template>
</ngb-carousel>

</div>`,H=`<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false"
data-bs-interval="false">

@if (images8) {
<ngb-carousel class="carousel-inner" [interval]="2800" [showNavigationArrows]="true"
    [showNavigationIndicators]="false">
    @for (image of images8; track images8) {
    <ng-template ngbSlide class="carousel-item">
        <img [src]="image.src" class="d-block w-100" alt="...">
    </ng-template>
    }
</ngb-carousel>
}

</div>`,L=`import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/carousel';
import * as tsCodedata from '../../../shared/prismData/advancedUi/carousel';


@Component({
  selector: 'app-carousels',
  standalone: true,
  imports: [NgbModule,SharedModule,ShowcodeCardComponent],
  templateUrl: './carousels.component.html',
  styleUrl: './carousels.component.scss'
})
export class CarouselsComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  images1 = [
    './assets/images/media/media-13.jpg',
    './assets/images/media/media-14.jpg',
    './assets/images/media/media-18.jpg',
  ];
}`,G=`<div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
<ngb-carousel class="carousel-inner" [showNavigationArrows]="true"
    [showNavigationIndicators]="true">
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-63.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
            <h5 class="text-fixed-white">First slide label</h5>
            <p class="op-7">
                Some representative placeholder content for the first slide.
            </p>
        </div>
    </ng-template>
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-64.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
            <h5 class="text-fixed-white">Second slide label</h5>
            <p class="op-7">
                Some representative placeholder content for the second slide.
            </p>
        </div>
    </ng-template>
    <ng-template ngbSlide class="carousel-item">
        <img src="./assets/images/media/media-62.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
            <h5 class="text-fixed-white">Third slide label</h5>
            <p class="op-7">
                Some representative placeholder content for the third slide.
            </p>
        </div>
    </ng-template>
</ngb-carousel>
</div>`;function Q(s,m){if(s&1&&(l(0,"img",3),t(1,"div",4)(2,"h5",5),h(3),r(),t(4,"p"),h(5),r()()),s&2){let i=v(2).$implicit;o("src",i.src,u),a(3),C(i.title),a(2),C(i.description)}}function X(s,m){s&1&&p(0,Q,6,3,"ng-template",2)}function Y(s,m){if(s&1&&(t(0,"div",6),l(1,"img",3),r()),s&2){let i=v(2).$implicit;a(),o("src",i,u)}}function Z(s,m){s&1&&p(0,Y,2,1,"ng-template",2)}function ee(s,m){if(s&1&&p(0,X,1,0,null,2)(1,Z,1,0,null,2),s&2){let i=m.$implicit;b(i.title?0:1)}}var U=(()=>{class s{images=[];interval=3e3;showNavigationArrows=!1;showNavigationIndicators=!1;carouselId="carouselExample";carouselClass="carouselExample";title="";static \u0275fac=function(d){return new(d||s)};static \u0275cmp=c({type:s,selectors:[["app-ngb-carousel"]],inputs:{images:"images",interval:"interval",showNavigationArrows:"showNavigationArrows",showNavigationIndicators:"showNavigationIndicators",carouselId:"carouselId",carouselClass:"carouselClass",title:"title"},decls:4,vars:7,consts:[["data-bs-ride","carousel",3,"id"],[1,"carousel-inner",3,"interval","showNavigationArrows","showNavigationIndicators"],["ngbSlide",""],["alt","...",1,"d-block","w-100",3,"src"],[1,"carousel-caption","d-none","d-md-block"],[1,"text-fixed-white"],[1,"carousel-item","active"]],template:function(d,e){d&1&&(t(0,"div",0)(1,"ngb-carousel",1),S(2,ee,2,1,null,null,N),r()()),d&2&&(w("carousel slide ",e.carouselClass,""),o("id",e.carouselId),a(),o("interval",e.interval)("showNavigationArrows",e.showNavigationArrows)("showNavigationIndicators",e.showNavigationIndicators),a(),j(e.images))},dependencies:[g,A,k,I],encapsulation:2})}return s})();var ne=(()=>{class s{prismCode=n;reusableCode=n;tsCodedata=n;constructor(i){i.showNavigationArrows=!0,i.showNavigationIndicators=!0}images=["./assets/images/media/media-26.jpg","./assets/images/media/media-27.jpg","./assets/images/media/media-33.jpg"];imagescontrol=["./assets/images/media/media-28.jpg","./assets/images/media/media-31.jpg","./assets/images/media/media-29.jpg"];imagesIndicators=["./assets/images/media/media-25.jpg","./assets/images/media/media-29.jpg","./assets/images/media/media-30.jpg"];carouselImages=[{src:"./assets/images/media/media-59.jpg",alt:"First slide",title:"First slide label",description:"Some representative placeholder content for the first slide."},{src:"./assets/images/media/media-60.jpg",alt:"Second slide",title:"Second slide label",description:"Some representative placeholder content for the second slide."},{src:"./assets/images/media/media-61.jpg",alt:"Third slide",title:"Third slide label",description:"Some representative placeholder content for the third slide."}];imagescross=["./assets/images/media/media-43.jpg","./assets/images/media/media-44.jpg","./assets/images/media/media-45.jpg"];images1=["./assets/images/media/media-63.jpg","./assets/images/media/media-62.jpg","./assets/images/media/media-64.jpg"];imagesindividual=["./assets/images/media/media-40.jpg","./assets/images/media/media-41.jpg","./assets/images/media/media-42.jpg"];darkVariantlImages=[{src:"./assets/images/media/media-13.jpg",alt:"First slide",title:"First slide label",description:"Some representative placeholder content for the first slide."},{src:"./assets/images/media/media-14.jpg",alt:"Second slide",title:"Second slide label",description:"Some representative placeholder content for the second slide."},{src:"./assets/images/media/media-18.jpg",alt:"Third slide",title:"Third slide label",description:"Some representative placeholder content for the third slide."}];static \u0275fac=function(d){return new(d||s)(f(y))};static \u0275cmp=c({type:s,selectors:[["app-carousel"]],decls:27,vars:68,consts:[["title","Carousel","title1","Advanced Ui","activeTitle","Carousel"],[1,"row"],[1,"col-xl-4","col-md-6"],[3,"title","prism","reuseCode","tsCode"],[3,"images","id","interval","showNavigationArrows","showNavigationIndicators"],[3,"images","interval","showNavigationArrows","showNavigationIndicators"],[3,"title","reuseCode","prism","tsCode"],[3,"title","reuseCode","prism"],[3,"images","id","carouselClass","interval","showNavigationArrows","showNavigationIndicators"],[3,"images","interval","showNavigationArrows","id","showNavigationIndicators"]],template:function(d,e){d&1&&(l(0,"app-page-header",0),t(1,"div",1)(2,"div",2)(3,"app-showcode-card",3),l(4,"app-ngb-carousel",4),r()(),t(5,"div",2)(6,"app-showcode-card",3),l(7,"app-ngb-carousel",5),r()(),t(8,"div",2)(9,"app-showcode-card",6),l(10,"app-ngb-carousel",5),r()(),t(11,"div",2)(12,"app-showcode-card",3),l(13,"app-ngb-carousel",5),r()(),t(14,"div",2)(15,"app-showcode-card",7),l(16,"app-ngb-carousel",4),r()(),t(17,"div",2)(18,"app-showcode-card",3),l(19,"app-ngb-carousel",8),r()()(),t(20,"div",1)(21,"div",2)(22,"app-showcode-card",7),l(23,"app-ngb-carousel",9),r()(),t(24,"div",2)(25,"app-showcode-card",6),l(26,"app-ngb-carousel",4),r()()()),d&2&&(a(3),o("title","With controls")("prism",e.prismCode.carousel2)("reuseCode",e.reusableCode.carouselReuse)("tsCode",e.tsCodedata.carouselts2),a(),o("images",e.imagescontrol)("id","carouselExampleControls")("interval",3e3)("showNavigationArrows",!0)("showNavigationIndicators",!1),a(2),o("title","With indicators")("prism",e.prismCode.carousel3)("reuseCode",e.reusableCode.carouselReuse)("tsCode",e.tsCodedata.carouselts3),a(),o("images",e.imagesIndicators)("interval",3e3)("showNavigationArrows",!0)("showNavigationIndicators",!0),a(2),o("title","Slides Only")("reuseCode",e.reusableCode.carouselReuse)("prism",e.prismCode.carousel1)("tsCode",e.tsCodedata.carouselts),a(),o("images",e.images)("interval",1e3)("showNavigationArrows",!1)("showNavigationIndicators",!1),a(2),o("title","With captions")("prism",e.prismCode.carousel4)("reuseCode",e.reusableCode.carouselReuse)("tsCode",e.tsCodedata.carouselts4),a(),o("images",e.carouselImages)("interval",3e3)("showNavigationArrows",!0)("showNavigationIndicators",!0),a(2),o("title","Individual .carousel-item interval")("reuseCode",e.reusableCode.carouselReuse)("prism",e.prismCode.carousel6),a(),o("images",e.imagesindividual)("id","carouselExampleInterval")("interval",2800)("showNavigationArrows",!0)("showNavigationIndicators",!1),a(2),o("title","Crossfade")("prism",e.prismCode.carousel5)("reuseCode",e.reusableCode.carouselReuse)("tsCode",e.tsCodedata.carouselts5),a(),o("images",e.imagescross)("id","carouselExampleFade")("carouselClass","carousel-fade")("interval",3200)("showNavigationArrows",!0)("showNavigationIndicators",!1),a(3),o("title","Dark variant")("reuseCode",e.reusableCode.carouselReuse)("prism",e.prismCode.carousel8),a(),o("images",e.darkVariantlImages)("interval",3e3)("showNavigationArrows",!0)("id","carouselExampleDark")("showNavigationIndicators",!1),a(2),o("title","Disable touch swiping")("reuseCode",e.reusableCode.carouselReuse)("prism",e.prismCode.carousel7)("tsCode",e.tsCodedata.carouselts7),a(),o("images",e.images1)("id","carouselExampleControlsNoTouching")("interval",2800)("showNavigationArrows",!0)("showNavigationIndicators",!1))},dependencies:[g,M,D,_,U],encapsulation:2})}return s})();export{ne as CarouselComponent};
