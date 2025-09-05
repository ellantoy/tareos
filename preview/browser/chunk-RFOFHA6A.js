import{a as j}from"./chunk-CXQQ7CNG.js";import{a as P,b as D}from"./chunk-MYVJRBPS.js";import"./chunk-ZP3QAILQ.js";import"./chunk-KEFF6A6H.js";import{qa as L,ra as A,sa as $}from"./chunk-IWIKM7QT.js";import"./chunk-3SGW3PUB.js";import{Cb as n,Fc as d,Ha as T,Hc as h,Ia as f,Ic as H,Jc as x,Lc as F,Nc as Y,Oc as R,Pc as M,Rb as v,Sa as k,Uc as c,Vd as V,Wc as S,Xb as y,gc as l,he as U,kc as B,lc as E,oc as _,qc as g,rc as p,sc as b,tc as a,uc as i,vc as u,wb as I,zc as w}from"./chunk-6HZOIT4N.js";import"./chunk-2EBTC7QX.js";import{f as Q}from"./chunk-66YHNWRR.js";var C={};Q(C,{toasts1:()=>K,toasts10:()=>st,toasts2:()=>O,toasts3:()=>q,toasts4:()=>G,toasts5:()=>W,toasts6:()=>X,toasts7:()=>Z,toasts8:()=>tt,toasts9:()=>et,toastsReuse:()=>z});var z=`@if(content1){
  <ngb-toast [class]="buttonClass" [autohide]="autohide" role="alert" aria-live="assertive"
  aria-atomic="true">
  <div class="d-flex">
      {{content1}}
    <button class="btn-close {{btnClass}} me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"
      (click)="show9 = true"></button>
  </div>
  <ng-content></ng-content>
</ngb-toast>
}
@else {

  <ngb-toast
 [delay]="5000"
 [autohide]="autohide"
 [header]="header"
 [ngClass]="buttonClass"
 (hide)="show = false" 
 >
     <ng-content>
         <ng-template ngbToastHeader (hide)="show = true;">
             <img
               class="bd-placeholder-img rounded me-2"
               src="./assets/images/brand-logos/favicon.ico"
               alt="Your Image"
               />
               <strong class="me-auto">zeno</strong>
               <small>11 mins ago</small>
         </ng-template>
         {{content}}
     </ng-content>
     <!-- <button aria-label="Close" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
     >
     <span aria-hidden="true"></span>
   </button> -->
 </ngb-toast> 
}
`,K=`<button type="button" class="btn btn-primary btn-wave" id="liveToastBtn" (click)="showToast()" >Show live
toast</button>
<div class="toast-container position-fixed top-0 end-0 p-3">

@for (toast of toasts; track toasts) {
<ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToast(toast)"  [class.bg-warning]="!toast.autohide">
<div class="toast-header text-default">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/favicon.ico"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>`,O=`@if (show6){
    <ngb-toast  class="toast align-items-center text-bg-primary  border-0 fade show  mb-4" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-white">
              Hello, world! This is the Primary toast message
            </div>
            <button
              aria-label="Close"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show6 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }
   @if (show7){
    <ngb-toast  class="toast align-items-center text-bg-secondary border-0 fade show mb-4" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-white">
                Hello, world! This is the Secondary toast.
            </div>
            <button
              aria-label="Close"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show7 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }
   @if (show8){
    <ngb-toast  class="toast align-items-center text-bg-warning border-0 fade show mb-4" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-white">
                Hello, world! This is the  warning toast message.
            </div>
            <button
              aria-label="Close"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show8 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }
   @if (show9){
    <ngb-toast  class="toast align-items-center text-bg-info border-0 fade show" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-white">
                Hello, world! This is the info toast message.
            </div>
            <button
              aria-label="Close"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show9 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }`,q=`@if (show) {
    <ngb-toast [autohide]="false" (hidden)="show = false">
        <ng-template ngbToastHeader>
            <div class="me-auto">
                <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                <strong class="mx-1 ">Udon</strong>
            </div>
            <small>11 mins ago</small>
        </ng-template>
        Hello, world! This is a toast message.
    </ngb-toast>
}`,G=`<div class="toast-container position-static">
@if (show1) {
    <ngb-toast [autohide]="false" (hidden)="show1 = false">
        <ng-template ngbToastHeader>
            <div class="me-auto">
                <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                <strong class="mx-1 ">Udon</strong>
            </div>
            <small>just now</small>
        </ng-template>
        See? Just like this.
    </ngb-toast>
}
@if (show2) {
    <ngb-toast [autohide]="false" (hidden)="show1 = false">
        <ng-template ngbToastHeader>
            <div class="me-auto">
                <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                <strong class="mx-1 ">Udon</strong>
            </div>
            <small>2 seconds ago</small>
        </ng-template>
        Heads up, toasts will stack automatically
    </ngb-toast>
}

</div>`,W=`@if (show3) {
    <ngb-toast [autohide]="false" (hidden)="show3 = false">
        <ng-template ngbToastHeader>
            <div class="me-auto">
                <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                <strong class="mx-1 ">Udon</strong>
            </div>
            <small>11 mins ago</small>
        </ng-template>
        Hello, world! This is a toast message.
    </ngb-toast>
}`,X=` @if (show10){
    <ngb-toast  class="toast align-items-center  mb-2 fade show" [autohide]="false">
        <div
          class="align-items-center show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="d-flex">
            <div class="text-black">
                Hello, world! This is a toast message.
            </div>
            <button
              aria-label="Close"
              class="btn-close  me-2 m-auto"
              data-bs-dismiss="toast"
              (click)="show10 = false"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </ngb-toast>
   }
<div>
    <span class="my-4 text-muted">
        Alternatively, you can also add additional controls and components to
        toasts.
    </span>
</div>
@if (show11){
<ngb-toast
[autohide]="false"
class="toast fade show mt-2"
role="alert"
aria-live="assertive"
aria-atomic="true"
>
<div class="toast-body">
  Hello, world! This is a toast message.
  <div class="mt-2 pt-2 me-2 border-top">
    <button type="button" class="btn btn-primary btn-sm btn-wave">
      Take action
    </button>
    <button
      type="button"
      class="btn btn-secondary btn-sm btn-wave"
      data-bs-dismiss="toast"
      (click)="show11 = false"
    >
      Close
    </button>
  </div>
</div>
</ngb-toast>
}`,Z=`<div class="btn-list">
<button type="button" class="btn btn-primary-light me-2 btn-wave" id="primaryToastBtn" data-bs-dismiss="toast"
                            aria-label="Close"  (click)="showToastprimary()" >Primary</button>
<button type="button" class="btn btn-secondary-light me-2 btn-wave" id="secondaryToastBtn" (click)="showToastseconday()"
>secondary</button>
<button type="button" class="btn btn-warning-light me-2 btn-wave" id="warningToastBtn"  (click)="showToastwarning()"
>warning</button>
<button type="button" class="btn btn-info-light me-2 btn-wave" id="infoToastBtn"  (click)="showToastinfo()"
>info</button>
<button type="button" class="btn btn-success-light me-2 btn-wave" id="successToastBtn"  (click)="showToastsuccess()"
>success</button>
<button type="button" class="btn btn-danger-light me-2 btn-wave" id="dangerToastBtn"  (click)="showToastdanger()"
>danger</button>
</div>
<div class="toast-container position-fixed top-0 end-0 p-3">
@for (toast of toasts1; track toasts1) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastprimary(toast)"  [class.bg-primary-transparent]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/favicon.ico"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastprimary(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toasts2; track toasts2) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastsecondary(toast)"  [class.bg-secondary-transparent]="!toast.autohide">
<div class="toast-header bg-secondary text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastsecondary(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toasts3; track toasts3) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastwarning(toast)"  [class.bg-warning-transparent]="!toast.autohide">
<div class="toast-header bg-warning text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastwarning(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}

@for (toast of toasts4; track toasts4) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastinfo(toast)"  [class.bg-info-transparent]="!toast.autohide">
<div class="toast-header bg-info text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastinfo(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}

@for (toast of toasts5; track toasts5) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastsuccess(toast)"  [class.bg-success-transparent]="!toast.autohide">
<div class="toast-header bg-success text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastsuccess(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toasts6; track toasts6) {
    <ngb-toast 
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastdanger(toast)"  [class.bg-danger-transparent]="!toast.autohide">
<div class="toast-header bg-danger text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideToastdanger(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Your,toast message here.</div>
</ngb-toast>
}
</div>`,tt=`<div class="btn-list">
<button type="button" class="btn btn-primary me-2 btn-wave" id="solidprimaryToastBtn"  (click)="SolidToastprimary()">Primary</button>
<button type="button" class="btn btn-secondary me-2 btn-wave" id="solidsecondaryToastBtn"  (click)="SolidToastsecondary()">secondary</button>
<button type="button" class="btn btn-warning me-2 btn-wave" id="solidwarningToastBtn"  (click)="SolidToastwarning()">warning</button>
<button type="button" class="btn btn-info me-2 btn-wave" id="solidinfoToastBtn"  (click)="SolidToastinfo()">info</button>
<button type="button" class="btn btn-success me-2 btn-wave" id="solidsuccessToastBtn"  (click)="SolidToastsuccess()">success</button>
<button type="button" class="btn btn-danger me-2 btn-wave" id="soliddangerToastBtn"  (click)="SolidToastdanger()">danger</button>
</div>
<div class="toast-container position-fixed top-0 end-0 p-3">

@for (toast of toastsA; track toastsA) {
    <ngb-toast id="solid-primaryToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastprimary(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastprimary(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-primary text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}

@for (toast of toastsB; track toastsB) {
    <ngb-toast id="solid-secondaryToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastsecondary(toast)"  [class.bg-secondary]="!toast.autohide">
<div class="toast-header bg-secondary text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastsecondary(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-secondary text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}


@for (toast of toastsC; track toastsC) {
    <ngb-toast id="solid-warningToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastwarning(toast)"  [class.bg-warning]="!toast.autohide">
<div class="toast-header bg-warning text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastwarning(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-warning text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}

@for (toast of toastsD; track toastsD) {
    <ngb-toast id="solid-infoToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastinfo(toast)"  [class.bg-info]="!toast.autohide">
<div class="toast-header bg-info text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastinfo(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-info text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toastsE; track toastsE) {
    <ngb-toast id="solid-successToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastsuccess(toast)"  [class.bg-success]="!toast.autohide">
<div class="toast-header bg-success text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastsuccess(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-success text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}
@for (toast of toastsF; track toastsF) {
    <ngb-toast id="solid-dangerToast"
[delay]="5000"  [autohide]="toast.autohide"  (hide)="hideToastdanger(toast)"  [class.bg-danger]="!toast.autohide">
<div class="toast-header bg-danger text-fixed-white">
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="hideSolidToastdanger(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body bg-danger text-fixed-white">Your,toast message here.</div>
</ngb-toast>
}
</div>`,et=`<div class="btn-list">
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="topleftToastBtn" (click)="TopLeft()">Top Left</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="topcenterToastBtn" (click)="TopCenter()">Top Center</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="toprightToastBtn" (click)="TopRight()">Top Right</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middleleftToastBtn" (click)="MiddleLeft()">Middle Left</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlecenterToastBtn" (click)="MiddleCenter()">Middle Center</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlerightToastBtn" (click)="MiddleRight()">Middle Right</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomleftToastBtn" (click)="BottomLeft()">Bottom Left</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomcenterToastBtn" (click)="BottomCenter()">Bottom Center</button>
<button type="button" class="btn btn-outline-primary me-2 btn-wave" id="bottomrightToastBtn" (click)="BottomRight()">Bottom Right</button>
</div>
<div class="toast-container position-fixed top-0 start-0 p-3">
@for (toast of toasts7; track toasts7) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="toplefthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="toplefthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-0 start-50  translate-middle-x p-3">
@for (toast of toasts8; track toasts8) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="TopCenterhideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="TopCenterhideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-0 end-0 p-3">
@for (toast of toasts9; track toasts9) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="TopRighthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="TopRighthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-50 start-0 translate-middle-y p-3">
@for (toast of toasts10; track toasts10) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="MiddleLefthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="MiddleLefthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-50 start-50 translate-middle">
@for (toast of toasts11; track toasts11) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="MiddleCenterhideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="MiddleCenterhideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed top-50 end-0 translate-middle-y p-3">
@for (toast of toasts12; track toasts12) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="MiddleRighthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="MiddleRighthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed bottom-0 start-0 p-3">
@for (toast of toasts13; track toasts13) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="BottomLefthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="BottomLefthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">
@for (toast of toasts14; track toasts14) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="BottomCenterthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="BottomCenterthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>
<div class="toast-container position-fixed bottom-0 end-0 p-3">
@for (toast of toasts15; track toasts15) {
    <ngb-toast
[delay]="5000"  [autohide]="toast.autohide"  (hide)="BottomRighthideToast(toast)"  [class.bg-primary]="!toast.autohide">
<div class="toast-header bg-primary text-fixed-white" >
<img
class="bd-placeholder-img rounded me-2"
src="./assets/images/brand-logos/toggle-dark.png"
alt="Your Image"
/>
<strong class="me-auto">Udon</strong>
<small>11 mins ago</small>
<button
type="button"
class="btn-close"
(click)="BottomRighthideToast(toast)"
aria-label="Close"
></button>
</div>

<div class="toast-body">Hello, world! This is a toast message.</div>
</ngb-toast>
}
</div>`,st=`<div class="bd-example bg-light bd-example-toasts d-flex p-0">
<div aria-live="polite" aria-atomic="true"
    class="d-flex justify-content-center align-items-center w-100">
    
        @if (show5) {
            <ngb-toast class="shadow-lg fade" [autohide]="false" (hidden)="show5 = false">
                <ng-template ngbToastHeader>
                    <div class="me-auto">
                        <img class="bd-placeholder-img rounded me-2" src="./assets/images/brand-logos/favicon.ico" alt="...">
                        <strong class="mx-1 ">Udon</strong>
                    </div>
                    <small>11 mins ago</small>
                </ng-template>
                Hello, world! This is a toast message.
            </ngb-toast>
        }
</div>
</div>`;var J=["*","*"];function at(e,r){if(e&1){let t=w();a(0,"ngb-toast",2)(1,"div",3),c(2),a(3,"button",4),d("click",function(){T(t);let s=h();return f(s.onClose())}),i()(),x(4),i()}if(e&2){let t=h();B(t.buttonClass),l("autohide",t.autohide),n(2),S(" ",t.content1," "),n(),E("btn-close ",t.btnClass," me-2 m-auto")}}function it(e,r){if(e&1&&(u(0,"img",7),a(1,"strong",8),c(2,"zeno"),i(),a(3,"small"),c(4,"11 mins ago"),i()),e&2){let t=h(3);F("src","./assets/images/brand-logos/",t.toastImage,".png",I)}}function nt(e,r){if(e&1){let t=w();y(0,it,5,2,"ng-template",6),d("hide",function(){T(t);let s=h(2);return f(s.show=!0)}),c(1)}if(e&2){let t=h(2);n(),S(" ",t.content," ")}}function lt(e,r){if(e&1){let t=w();a(0,"ngb-toast",5),d("hide",function(){T(t);let s=h();return f(s.show=!1)}),x(1,1,null,nt,2,1),i()}if(e&2){let t=h();l("delay",5e3)("autohide",t.autohide)("header",t.header)("ngClass",t.buttonClass)}}var N=(()=>{class e{show=!1;title="";content="";header="";buttonClass="";toastImage="";btnClass="";content1="";autohide=!1;hide=new k;closeToast=new k;onClose(){this.closeToast.emit()}onHide(){this.show=!1,this.hide.emit()}show9=!0;hidden=()=>{this.show9=!1};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=v({type:e,selectors:[["spk-toast"]],inputs:{show:"show",title:"title",content:"content",header:"header",buttonClass:"buttonClass",toastImage:"toastImage",btnClass:"btnClass",content1:"content1",autohide:"autohide"},outputs:{hide:"hide",closeToast:"closeToast"},ngContentSelectors:J,decls:2,vars:1,consts:[["role","alert","aria-live","assertive","aria-atomic","true",3,"class","autohide"],[1,"mb-2",3,"delay","autohide","header","ngClass"],["role","alert","aria-live","assertive","aria-atomic","true",3,"autohide"],[1,"d-flex"],["data-bs-dismiss","toast","aria-label","Close",3,"click"],[1,"mb-2",3,"hide","delay","autohide","header","ngClass"],["ngbToastHeader","",3,"hide"],["alt","Your Image",1,"bd-placeholder-img","rounded","me-2",3,"src"],[1,"me-auto"]],template:function(o,s){o&1&&(H(J),y(0,at,5,7,"ngb-toast",0)(1,lt,3,4,"ngb-toast",1)),o&2&&_(s.content1?0:1)},dependencies:[$,A,L,U,V],encapsulation:2})}return e})();var rt=["toastContainer"];function dt(e,r){return this.toasts8}function ct(e,r){return this.toasts9}function mt(e,r){return this.toasts10}function ut(e,r){return this.toasts11}function pt(e,r){return this.toasts12}function bt(e,r){return this.toasts13}function gt(e,r){return this.toasts14}function ht(e,r){return this.toasts15}function Tt(e,r){e&1&&u(0,"spk-toast",12),e&2&&l("toastImage","toggle-logo")("autohide",!0)}function ft(e,r){if(e&1){let t=w();a(0,"spk-toast",57),d("closeToast",function(){T(t);let s=h();return f(s.handleToastClose1())})("contentClick",function(s){T(t);let m=h();return f(m.preventClose(s))}),i()}e&2&&l("toastImage","toggle-logo")("buttonClass","toast align-items-center text-bg-primary border-0 mb-4")("autohide",!1)}function wt(e,r){if(e&1){let t=w();a(0,"spk-toast",58),d("closeToast",function(){T(t);let s=h();return f(s.handleToastClose2())}),i()}e&2&&l("toastImage","toggle-logo")("buttonClass","toast align-items-center text-bg-secondary border-0 mb-4")("autohide",!1)}function _t(e,r){if(e&1){let t=w();a(0,"spk-toast",58),d("closeToast",function(){T(t);let s=h();return f(s.handleToastClose3())}),i()}e&2&&l("toastImage","toggle-logo")("buttonClass","toast align-items-center text-bg-info border-0 mb-4")("autohide",!1)}function yt(e,r){if(e&1){let t=w();a(0,"spk-toast",58),d("closeToast",function(){T(t);let s=h();return f(s.handleToastClose4())}),i()}e&2&&l("toastImage","toggle-logo")("buttonClass","toast align-items-center text-bg-warning border-0 mb-4")("autohide",!1)}function Ct(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-primary text-fixed-white")("autohide",!0)}function vt(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-secondary text-fixed-white")("autohide",!0)}function kt(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-warning text-fixed-white")("autohide",!0)}function xt(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-info text-fixed-white")("autohide",!0)}function St(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-success text-fixed-white")("autohide",!0)}function It(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-danger text-fixed-white")("autohide",!0)}function Bt(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function Et(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-success-transparent")("autohide",!0)}function Ht(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-info-transparent")("autohide",!0)}function Ft(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-secondary-transparent")("autohide",!0)}function Yt(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-secondary-transparent")("autohide",!0)}function Rt(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-warning-transparent")("autohide",!0)}function Mt(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-info-transparent")("autohide",!0)}function Vt(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-success-transparent")("autohide",!0)}function Ut(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-danger-transparent")("autohide",!0)}function Lt(e,r){e&1&&u(0,"spk-toast",12),e&2&&l("toastImage","toggle-logo")("autohide",!1)}function At(e,r){if(e&1){let t=w();a(0,"spk-toast",59),d("closeToast",function(){T(t);let s=h();return f(s.handleToastClose())}),i()}e&2&&l("toastImage","toggle-logo")("buttonClass","toast align-items-center fade show mb-3")("content1","Hello, world! This is a toast message.")("autohide",!1)}function $t(e,r){if(e&1){let t=w();a(0,"spk-toast",24),c(1," Hello, world! This is a toast message. "),a(2,"div",60)(3,"button",61),c(4," Take action "),i(),a(5,"button",62),d("click",function(){T(t);let s=h();return f(s.show10=!1)}),c(6," Close "),i()()()}e&2&&l("toastImage","toggle-logo")("buttonClass","toast fade show mt-2")("autohide",!1)}function Pt(e,r){if(e&1){let t=w();a(0,"spk-toast",64),d("click",function(){T(t);let s=h(2);return f(s.show15=!1)}),i()}e&2&&l("toastImage","toggle-logo")("buttonClass","toast colored-toast bg-primary-gradient toastify-js text-fixed-white")("autohide",!1)}function Dt(e,r){if(e&1&&y(0,Pt,1,3,"spk-toast",63),e&2){let t=h();_(t.show15?0:-1)}}function jt(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function Jt(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function Nt(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function Qt(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function zt(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function Kt(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function Ot(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function qt(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}function Gt(e,r){e&1&&u(0,"spk-toast",24),e&2&&l("toastImage","toggle-white")("buttonClass","toast colored-toast bg-primary-transparent")("autohide",!0)}var ce=(()=>{class e{prismCode=C;reusableCode=C;show=!0;show1=!0;showContent=!0;show2=!0;show3=!0;show4=!0;show5=!0;show6=!0;show7=!0;show8=!0;show9=!0;show10=!0;show11=!0;show12=!0;show13=!0;show14=!0;show15=!0;show16=!0;isclose=!0;isCollapsed=!0;isCollapsed2=!0;isCollapsed3=!0;isCollapsed4=!0;isCollapsed5=!0;isCollapsed6=!0;isCollapsed7=!0;preventClose(t){t.stopPropagation()}toastContainer;show0=!1;autohide=!0;constructor(){}ngOnInit(){}toasts=[];toasts1=[];toasts2=[];toasts3=[];toasts4=[];toasts5=[];toasts6=[];toastsA=[];toastsB=[];toastsC=[];toastsD=[];toastsE=[];toastsF=[];toastsG=[];toastsH=[];toastsI=[];toastsJ=[];toastsK=[];toasts7=[];toasts8=[];toasts9=[];toasts10=[];toasts11=[];toasts12=[];toasts13=[];toasts14=[];toasts15=[];toasts16=[];toasts17=[];toasts18=[];showToast(){let t={autohide:!0};this.toasts.push(t)}showToastprimary(){let t={autohide:!0};this.toasts1.push(t)}showToastprimary1(){let t={autohide:!0};this.toasts16.push(t)}showToastprimary2(){let t={autohide:!0};this.toasts17.push(t)}showToastsecondary(){let t={autohide:!0};this.toasts18.push(t)}showToastseconday(){let t={autohide:!0};this.toasts2.push(t)}showToastwarning(){let t={autohide:!0};this.toasts3.push(t)}showToastinfo(){let t={autohide:!0};this.toasts4.push(t)}showToastsuccess(){let t={autohide:!0};this.toasts5.push(t)}showToastdanger(){let t={autohide:!0};this.toasts6.push(t)}hideToastprimary(t){this.toasts1=this.toasts1.filter(o=>o!==t)}hideToastprimary1(t){this.toasts16=this.toasts16.filter(o=>o!==t)}hideToastprimary2(t){this.toasts17=this.toasts17.filter(o=>o!==t)}hideToastwarning(t){this.toasts3=this.toasts3.filter(o=>o!==t)}hideToastinfo(t){this.toasts4=this.toasts4.filter(o=>o!==t)}hideToastsuccess(t){this.toasts5=this.toasts5.filter(o=>o!==t)}hideToastdanger(t){this.toasts6=this.toasts6.filter(o=>o!==t)}hidehedaer=[{message:" Hello, world! This is the Primary toast message.",bgColor:"text-bg-primary mb-4"},{message:" Hello, world! This is the Primary toast message.",bgColor:"text-bg-secondary mb-4"},{message:" Hello, world! This is the Primary toast message.",bgColor:"text-bg-warning mb-4"},{message:" Hello, world! This is the Primary toast message.",bgColor:"text-bg-info"}];SolidToastprimary(){let t={autohide:!0};this.toastsA.push(t)}SolidToastprimary1(){let t={autohide:!0};this.toastsH.push(t)}SolidToastjs(){let t={autohide:!0};this.toastsK.push(t)}SolidToastprimary2(){let t={autohide:!0};this.toastsI.push(t)}SolidToastsecondary(){let t={autohide:!0};this.toastsJ.push(t)}SolidToastwarning(){let t={autohide:!0};this.toastsC.push(t)}SolidToastinfo(){let t={autohide:!0};this.toastsD.push(t)}SolidToastsuccess(){let t={autohide:!0};this.toastsE.push(t)}SolidToastdanger(){let t={autohide:!0};this.toastsF.push(t)}hideToast(t){this.toasts=this.toasts.filter(o=>o!==t)}hideSolidToastprimary(t){this.toastsA=this.toastsA.filter(o=>o!==t)}hideSolidToastprimary1(t){this.toastsH=this.toastsH.filter(o=>o!==t)}hideSolidToastprimary2(t){this.toastsI=this.toastsI.filter(o=>o!==t)}hideSolidToastwarning(t){this.toastsC=this.toastsC.filter(o=>o!==t)}hideSolidToastinfo(t){this.toastsD=this.toastsD.filter(o=>o!==t)}hideSolidToastsuccess(t){this.toastsE=this.toastsE.filter(o=>o!==t)}hideSolidToastdanger(t){this.toastsF=this.toastsF.filter(o=>o!==t)}hidden=()=>{this.show9=!1};handleToastClose(){this.showContent=!1}handleToastClose1(){this.show11=!1}handleToastClose2(){this.show12=!1}handleToastClose3(){this.show13=!1}handleToastClose4(){this.show14=!1}contentClose(){this.show10=!1}close(){this.isclose=!1,setTimeout(()=>this.isclose=!0,3e3)}TopLeft(){let t={autohide:!0};this.toasts7.push(t)}TopCenter(){let t={autohide:!0};this.toasts8.push(t)}TopCenterhideToast(t){this.toasts8=this.toastsA.filter(o=>o!==t)}TopRight(){let t={autohide:!0};this.toasts9.push(t)}TopRighthideToast(t){this.toasts9=this.toastsA.filter(o=>o!==t)}MiddleLeft(){let t={autohide:!0};this.toasts10.push(t)}MiddleLefthideToast(t){this.toasts10=this.toastsA.filter(o=>o!==t)}MiddleCenter(){let t={autohide:!0};this.toasts11.push(t)}MiddleCenterhideToast(t){this.toasts11=this.toastsA.filter(o=>o!==t)}MiddleRight(){let t={autohide:!0};this.toasts12.push(t)}MiddleRighthideToast(t){this.toasts12=this.toastsA.filter(o=>o!==t)}BottomLeft(){let t={autohide:!0};this.toasts13.push(t)}BottomLefthideToast(t){this.toasts13=this.toastsA.filter(o=>o!==t)}BottomCenter(){let t={autohide:!0};this.toasts14.push(t)}BottomCenterthideToast(t){this.toasts14=this.toastsA.filter(o=>o!==t)}BottomRight(){let t={autohide:!0};this.toasts15.push(t)}BottomRighthideToast(t){this.toasts15=this.toastsA.filter(o=>o!==t)}showToastBasic=!1;showToastStack1=!1;showToastStack2=!1;showBasicToast(){this.showToastBasic=!0}showStackToasts(){this.showToastStack1=!0,setTimeout(()=>this.showToastStack2=!0,1e3)}solidtoasts=[{buttonClass:"toast colored-toast bg-primary text-fixed-white",autohide:!0},{buttonClass:"toast colored-toast bg-secondary text-fixed-white",autohide:!0},{buttonClass:"toast colored-toast bg-primary text-fixed-white",autohide:!0},{buttonClass:"toast colored-toast bg-primary text-fixed-white",autohide:!0},{buttonClass:"toast colored-toast bg-primary text-fixed-white"}];static \u0275fac=function(o){return new(o||e)};static \u0275cmp=v({type:e,selectors:[["app-toasts"]],viewQuery:function(o,s){if(o&1&&Y(rt,5),o&2){let m;R(m=M())&&(s.toastContainer=m.first)}},decls:163,vars:45,consts:[["title","Toasts","title1","Ui Elements","activeTitle","Toasts"],[1,"row"],[1,"col-xl-6"],["classbody","basitoastbody",3,"title","prism","reuseCode"],["content"," Hello, world! This is a toast message",3,"hide","toastImage","autohide"],["classbody","stackingbody",3,"title","prism","reuseCode"],[1,"toast-container","position-static"],["buttonClass","mb-3","content","See? Just like this.",3,"hide","toastImage","autohide"],["buttonClass","mb-3","content","Heads up, toasts will stack automatically",3,"hide","toastImage","autohide"],[3,"reuseCode","title","prism"],["type","button","id","liveToastBtn",1,"btn","btn-primary","btn-wave",3,"click"],[1,"toast-container","position-fixed","top-0","end-0","p-3","mt-3"],["content"," Hello, world! This is a toast message",3,"toastImage","autohide"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","Hello, world! This is a toast message.",3,"toastImage","buttonClass","autohide"],[1,"col-xl-12"],["classbody","bgtoastbody",3,"reuseCode","title","prism"],[1,"btn-list"],["type","button","id","solidprimaryToastBtn",1,"btn","btn-primary","me-2","btn-wave",3,"click"],["type","button","id","solidsecondaryToastBtn",1,"btn","btn-secondary","me-2","btn-wave",3,"click"],["type","button","id","solidsecondaryToastBtn",1,"btn","btn-warning","me-2","btn-wave",3,"click"],["type","button","id","solidinfoToastBtn",1,"btn","btn-info","me-2","btn-wave",3,"click"],["type","button","id","solidsuccessToastBtn",1,"btn","btn-success","me-2","btn-wave",3,"click"],["type","button","id","soliddangerToastBtn",1,"btn","btn-danger","me-2","btn-wave",3,"click"],[1,"toast-container","position-fixed","top-0","end-0","p-3"],["content","Your,toast message here.",3,"toastImage","buttonClass","autohide"],["type","button","id","primaryToastBtn",1,"btn","btn-primary-light","me-2","btn-wave",3,"click"],["type","button","id","successToastBtn",1,"btn","btn-success-light","me-2","btn-wave",3,"click"],["type","button","id","infoToastBtn",1,"btn","btn-info-light","me-2","btn-wave",3,"click"],["type","button","id","secondaryToastBtn",1,"btn","btn-secondary-light","me-2","btn-wave",3,"click"],["type","button","id","warningToastBtn",1,"btn","btn-warning-light","me-2","btn-wave",3,"click"],["type","button","id","dangerToastBtn",1,"btn","btn-danger-light","me-2","btn-wave",3,"click"],[3,"toastImage","buttonClass","content1","autohide"],[1,"my-4","text-muted"],[1,"bd-example","bg-light","bd-example-toasts","aligning-toasts","d-flex","justify-content-center","align-items-center","px-2"],["buttonClass","shadow-lg","content"," Hello, world! This is a toast message",3,"hide","toastImage","autohide"],[1,"card","custom-card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],["id","toast-button",1,"btn","btn-primary-gradient","btn-wave","waves-effect","waves-light",3,"click"],["type","button","id","topleftToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","topcenterToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","toprightToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","middleleftToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","middlecenterToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","middlerightToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","bottomleftToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","bottomcenterToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],["type","button","id","bottomrightToastBtn",1,"btn","btn-outline-primary","me-2","btn-wave",3,"click"],[1,"toast-container","position-fixed","top-0","start-0","p-3"],[1,"toast-container","position-fixed","top-0","start-50","translate-middle-x","p-3"],[1,"toast-container","position-fixed","top-50","start-0","translate-middle-y","p-3"],[1,"toast-container","position-fixed","top-50","start-50","translate-middle"],[1,"toast-container","position-fixed","top-50","end-0","translate-middle-y","p-3"],[1,"toast-container","position-fixed","bottom-0","start-0","p-3"],[1,"toast-container","position-fixed","bottom-0","start-50","translate-middle-x","p-3"],[1,"toast-container","position-fixed","bottom-0","end-0","p-3"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","Hello, world! This is a toast message.",3,"closeToast","contentClick","toastImage","buttonClass","autohide"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","Hello, world! This is a toast message.",3,"closeToast","toastImage","buttonClass","autohide"],[3,"closeToast","toastImage","buttonClass","content1","autohide"],[1,"mt-3","pt-2","border-top"],["type","button",1,"btn","btn-primary","btn-sm","btn-wave","me-2"],["type","button","data-bs-dismiss","toast",1,"btn","btn-secondary","btn-sm","btn-wave",3,"click"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","I'm a toast Message",3,"toastImage","buttonClass","autohide"],["btnClass","btn-close btn-close-white me-2 m-auto","content1","I'm a toast Message",3,"click","toastImage","buttonClass","autohide"]],template:function(o,s){o&1&&(u(0,"app-page-header",0),a(1,"div",1)(2,"div",2)(3,"app-showcode-card",3)(4,"spk-toast",4),d("hide",function(){return s.show=!1}),i()(),a(5,"app-showcode-card",5)(6,"div",6)(7,"spk-toast",7),d("hide",function(){return s.show=!1}),i(),a(8,"spk-toast",8),d("hide",function(){return s.show=!1}),i()()()(),a(9,"div",2)(10,"app-showcode-card",9)(11,"button",10),d("click",function(){return s.showToast()}),c(12," Show live toast "),i(),a(13,"div",11),p(14,Tt,1,2,"spk-toast",12,g),i()(),a(16,"app-showcode-card",9),y(17,ft,1,3,"spk-toast",13)(18,wt,1,3,"spk-toast",13)(19,_t,1,3,"spk-toast",13)(20,yt,1,3,"spk-toast",13),i()()(),a(21,"div",1)(22,"div",14)(23,"app-showcode-card",15)(24,"div",16)(25,"button",17),d("click",function(){return s.SolidToastprimary()}),c(26," Primary "),i(),a(27,"button",18),d("click",function(){return s.SolidToastsecondary()}),c(28," secondary "),i(),a(29,"button",19),d("click",function(){return s.SolidToastwarning()}),c(30," Warning "),i(),a(31,"button",20),d("click",function(){return s.SolidToastinfo()}),c(32," info "),i(),a(33,"button",21),d("click",function(){return s.SolidToastsuccess()}),c(34," success "),i(),a(35,"button",22),d("click",function(){return s.SolidToastdanger()}),c(36," danger "),i()(),a(37,"div",23),p(38,Ct,1,3,"spk-toast",24,g),p(40,vt,1,3,"spk-toast",24,g),p(42,kt,1,3,"spk-toast",24,g),p(44,xt,1,3,"spk-toast",24,g),p(46,St,1,3,"spk-toast",24,g),p(48,It,1,3,"spk-toast",24,g),i()()(),a(50,"div",14)(51,"app-showcode-card",9)(52,"div",16)(53,"button",25),d("click",function(){return s.showToastprimary()}),c(54," Primary "),i(),a(55,"button",26),d("click",function(){return s.showToastsuccess()}),c(56,"success"),i(),a(57,"button",27),d("click",function(){return s.showToastinfo()}),c(58,"info"),i(),a(59,"button",28),d("click",function(){return s.showToastseconday()}),c(60," secondary "),i(),a(61,"button",29),d("click",function(){return s.showToastwarning()}),c(62," warning "),i(),a(63,"button",27),d("click",function(){return s.showToastinfo()}),c(64," info "),i(),a(65,"button",26),d("click",function(){return s.showToastsuccess()}),c(66," success "),i(),a(67,"button",30),d("click",function(){return s.showToastdanger()}),c(68," danger "),i()(),a(69,"div",23),p(70,Bt,1,3,"spk-toast",24,g),p(72,Et,1,3,"spk-toast",24,g),p(74,Ht,1,3,"spk-toast",24,g),p(76,Ft,1,3,"spk-toast",24,g),p(78,Yt,1,3,"spk-toast",24,g),p(80,Rt,1,3,"spk-toast",24,g),p(82,Mt,1,3,"spk-toast",24,g),p(84,Vt,1,3,"spk-toast",24,g),p(86,Ut,1,3,"spk-toast",24,g),i()()(),a(88,"div",14)(89,"app-showcode-card",9),y(90,Lt,1,2,"spk-toast",12),i()(),a(91,"div",14)(92,"app-showcode-card",9),y(93,At,1,4,"spk-toast",31),a(94,"div")(95,"span",32),c(96," Alternatively, you can also add additional controls and components to toasts. "),i()(),y(97,$t,7,3,"spk-toast",24),i()()(),a(98,"div",1)(99,"div",14)(100,"app-showcode-card",9)(101,"div",33)(102,"spk-toast",34),d("hide",function(){return s.show=!1}),i()()()(),a(103,"div",14)(104,"div",35)(105,"div",36)(106,"div",37),c(107," TOASTIFY JS "),i()(),a(108,"div",38)(109,"button",39),d("click",function(){return s.SolidToastjs()}),c(110,"Click For Live Toast"),i(),a(111,"div",23),p(112,Dt,1,1,null,null,g),i()()()()(),a(114,"div",1)(115,"div",14)(116,"app-showcode-card",9)(117,"div",16)(118,"button",40),d("click",function(){return s.TopLeft()}),c(119,"Top Left"),i(),a(120,"button",41),d("click",function(){return s.TopCenter()}),c(121,"Top Center"),i(),a(122,"button",42),d("click",function(){return s.TopRight()}),c(123,"Top Right"),i(),a(124,"button",43),d("click",function(){return s.MiddleLeft()}),c(125,"Middle Left"),i(),a(126,"button",44),d("click",function(){return s.MiddleCenter()}),c(127,"Middle Center"),i(),a(128,"button",45),d("click",function(){return s.MiddleRight()}),c(129,"Middle Right"),i(),a(130,"button",46),d("click",function(){return s.BottomLeft()}),c(131,"Bottom Left"),i(),a(132,"button",47),d("click",function(){return s.BottomCenter()}),c(133,"Bottom Center"),i(),a(134,"button",48),d("click",function(){return s.BottomRight()}),c(135,"Bottom Right"),i()(),a(136,"div",49),p(137,jt,1,3,"spk-toast",24,g),i(),a(139,"div",50),p(140,Jt,1,3,"spk-toast",24,dt,!0),i(),a(142,"div",23),p(143,Nt,1,3,"spk-toast",24,ct,!0),i(),a(145,"div",51),p(146,Qt,1,3,"spk-toast",24,mt,!0),i(),a(148,"div",52),p(149,zt,1,3,"spk-toast",24,ut,!0),i(),a(151,"div",53),p(152,Kt,1,3,"spk-toast",24,pt,!0),i(),a(154,"div",54),p(155,Ot,1,3,"spk-toast",24,bt,!0),i(),a(157,"div",55),p(158,qt,1,3,"spk-toast",24,gt,!0),i(),a(160,"div",56),p(161,Gt,1,3,"spk-toast",24,ht,!0),i()()()()),o&2&&(n(3),l("title","Basic example")("prism",s.prismCode.toasts3)("reuseCode",s.reusableCode.toastsReuse),n(),l("toastImage","toggle-logo")("autohide",!1),n(),l("title","Stacking")("prism",s.prismCode.toasts4)("reuseCode",s.reusableCode.toastsReuse),n(2),l("toastImage","toggle-logo")("autohide",!1),n(),l("toastImage","toggle-logo")("autohide",!1),n(2),l("reuseCode",s.reusableCode.toastsReuse)("title","Live example")("prism",s.prismCode.toasts1),n(4),b(s.toasts),n(2),l("reuseCode",s.reusableCode.toastsReuse)("title","Color schemes")("prism",s.prismCode.toasts2),n(),_(s.show11?17:-1),n(),_(s.show12?18:-1),n(),_(s.show13?19:-1),n(),_(s.show14?20:-1),n(3),l("reuseCode",s.reusableCode.toastsReuse)("title","Solid Background Toasts")("prism",s.prismCode.toasts8),n(15),b(s.toastsA),n(2),b(s.toastsB),n(2),b(s.toastsC),n(2),b(s.toastsD),n(2),b(s.toastsE),n(2),b(s.toastsF),n(3),l("reuseCode",s.reusableCode.toastsReuse)("title","Color Variants Live")("prism",s.prismCode.toasts7),n(19),b(s.toasts1),n(2),b(s.toasts16),n(2),b(s.toasts17),n(2),b(s.toasts18),n(2),b(s.toasts2),n(2),b(s.toasts3),n(2),b(s.toasts4),n(2),b(s.toasts5),n(2),b(s.toasts6),n(3),l("reuseCode",s.reusableCode.toastsReuse)("title","Translucent")("prism",s.prismCode.toasts5),n(),_(s.show1?90:-1),n(2),l("reuseCode",s.reusableCode.toastsReuse)("title","Custom content")("prism",s.prismCode.toasts6),n(),_(s.showContent?93:-1),n(4),_(s.show10?97:-1),n(3),l("reuseCode",s.reusableCode.toastsReuse)("title","Aligning Toast Using Flexbox")("prism",s.prismCode.toasts10),n(2),l("toastImage","toggle-logo")("autohide",!1),n(10),b(s.toastsK),n(4),l("reuseCode",s.reusableCode.toastsReuse)("title","Toast Placements")("prism",s.prismCode.toasts9),n(21),b(s.toasts7),n(3),b(s.toasts8),n(3),b(s.toasts9),n(3),b(s.toasts10),n(3),b(s.toasts11),n(3),b(s.toasts12),n(3),b(s.toasts13),n(3),b(s.toasts14),n(3),b(s.toasts15))},dependencies:[D,P,j,N],encapsulation:2})}return e})();export{ce as ToastsComponent};
