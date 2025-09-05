import{a as ie}from"./chunk-CXQQ7CNG.js";import{a as ee,b as te}from"./chunk-MYVJRBPS.js";import"./chunk-ZP3QAILQ.js";import"./chunk-KEFF6A6H.js";import{Aa as Z,E as K,M as D,N as X,a as J}from"./chunk-IWIKM7QT.js";import{f as Y}from"./chunk-3SGW3PUB.js";import{Cb as l,Fc as p,Ha as h,Hc as g,Ia as v,Ib as F,Ic as P,Ja as _,Jc as q,Ka as x,Nc as M,Oc as j,P as W,Pc as I,Rb as z,Sa as $,Uc as r,Vc as O,Vd as N,Wc as w,Wd as Q,Xb as G,Yc as k,Zc as S,_c as T,f as R,fc as A,gc as c,he as U,ka as H,lc as B,qc as b,rc as f,sc as y,tc as i,uc as s,vb as V,vc as d,wb as L,zc as C}from"./chunk-6HZOIT4N.js";import"./chunk-2EBTC7QX.js";import{f as le}from"./chunk-66YHNWRR.js";var E={};le(E,{alertData:()=>we,alertData1:()=>de,alertData2:()=>ne,alertData3:()=>me,alertData4:()=>ce,alertData5:()=>pe,alertData6:()=>ue,alertData7:()=>ge,alertData8:()=>he,alertTS:()=>re,alertTS1:()=>oe,alertTS10:()=>ke,alertTS11:()=>Se,alertTS12:()=>Te,alertTS13:()=>Ee,alertTS14:()=>ze,alertTS15:()=>De,alertTS16:()=>Ve,alertTS17:()=>Le,alertTS2:()=>ve,alertTS3:()=>be,alertTS4:()=>fe,alertTS5:()=>ye,alertTS6:()=>Ce,alertTS7:()=>_e,alertTS8:()=>xe,alertTS9:()=>Ae,alertreuse:()=>ae});var ae=`  <ngb-alert  [type]="variant" [dismissible]="isDismissible"  >
  <ng-content >
  </ng-content>
  </ngb-alert>`,re=`<ngb-alert
type="warning"
class="alert alert-warning alert-dismissible fade show"
role="alert"
>
<strong>Holy guacamole!</strong> You should check in on some of those
fields below.
<button
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</ngb-alert>`,oe=`  @for (livealert of livealerts; track livealert; let i = $index) {
    <div id="liveAlertPlaceholder">
      <div
        id="row"
        class="alert mb-2 alert-success alert-dismissible"
        role="alert"
      >
        <div>{{ livealert.message }}</div>
        <button
          type="button"
          class="btn-close"
          (click)="closeAlerts('row')"
          data-bs-dismiss="alert"
          aria-label="Close"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
    </div>
    }
    <button
      type="button"
      (click)="showAlert()"
      class="btn btn-primary"
      id="liveAlertBtn"
    >
      Show live alert
    </button>`,ne=`  
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    livealerts: { message: string; show: boolean }[] = [];

    showAlert() {
      // Add a new alert to the array
      this.livealerts.push({
        message: 'Nice, you triggered this alert message!',
        show: true,
      });
    }
    closeAlerts(rowId: string) {
      const rowElement = document.getElementById(rowId);
      if (rowElement) {
        rowElement.remove();
      }
    }
    `,de=`  
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface SolidAlert {
      type: string;
      message: string;
      bg:string;
    }
    solidAlerts: SolidAlert[] = solidALERTS;
    const solidALERTS: SolidAlert[] = [
      {
        type: 'solid-primary',
        message: ' A simple solid primary alert\u2014check it out!',
        bg:''
      },
      {
        type: 'solid-secondary',
        message: 'A simple solid secondary alert\u2014check it out!',
        bg:''
      },
      {
        type: 'solid-info',
        message: 'A simple solid info alert\u2014check it out!',
        bg:''
      },
      {
        type: 'solid-warning',
        message: 'A simple solid warning alert\u2014check it out!',
        bg:''
      },
      {
        type: 'solid-success',
        message: 'A simple solid success alert\u2014check it out!',
        bg:''
      },
      {
        type: 'solid-danger',
        message: 'A simple solid danger alert\u2014check it out!',
        bg:''
      },
      {
        type: 'solid-light',
        message: 'A simple solid light alert\u2014check it out!',
        bg:'text-dark'
      },
      {
        type: 'solid-dark',
        message: 'A simple solid dark alert\u2014check it out!',
        bg:'text-white'
      },
    ];
    `,me=`
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface Alert {
    type: string;
    message: string;
    bg:string;
    }
   solidroundedAlerts: Alert[] = solidRoundedALERTS;
        const solidRoundedALERTS: Alert[] = [
        {
          type: 'solid-primary',
          message: '  A simple solid rounded primary alert\u2014check it out!',
        },
        {
          type: 'solid-secondary',
          message: 'A simple solid rounded secondary alert\u2014check it out!',
        },
        {
          type: 'solid-warning',
          message: '  A simple solid rounded warning alert\u2014check it out!',
        },
        {
          type: 'solid-danger',
          message: 'A simple solid rounded danger alert\u2014check it out!',
        },
      ];
      solidroundedClose(index: number) {
        // Remove the alert from the array based on the index
        this.solidroundedAlerts.splice(index, 1);
      }`,ce=`
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface Alert {
    type: string;
    message: string;
    bg:string;
    }
    roundedoutlineAlerts: Alert[] = roundedOutlineALERTS;
    const roundedOutlineALERTS: Alert[] = [
      {
        type: 'outline-primary',
        message: ' A simple outline primary alert\u2014check it out!',
      },
      {
        type: 'outline-secondary',
        message: 'A simple outline secondary alert\u2014check it out!',
      },
      {
        type: 'outline-info',
        message: 'A simple outline info alert\u2014check it out!',
      },
      {
        type: 'outline-warning',
        message: 'A simple outline warning alert\u2014check it out!',
      },
    ];
    roundedoutlineClose(index: number) {
      // Remove the alert from the array based on the index
      this.roundedoutlineAlerts.splice(index, 1);
    }`,pe=`
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface Alert {
    type: string;
    message: string;
    bg:string;
    }
    solidShadowsAlerts: Alert[] = solidShadowsALERTS;
    const solidShadowsALERTS: Alert[] = [
      {
        type: 'solid-primary',
        message: 'A simple solid primary alert with normal shadow\u2014check it out!',
      },
      {
        type: 'solid-primary',
        message: 'A simple solid primary alert with normal shadow\u2014check it out!',
      },
      {
        type: 'solid-primary',
        message: 'A simple solid primary alert with normal shadow\u2014check it out!',
      },
      {
        type: 'solid-secondary',
        message: 'A simple solid secondary alert with normal shadow\u2014check it out!',
      },
      {
        type: 'solid-secondary',
        message: ' A simple solid secondary alert with normal shadow\u2014check it out!',
      },
      {
        type: 'solid-secondary',
        message: 'A simple solid secondary alert with normal shadow\u2014check it out!',
      },
    ];
    solidShadowsAlertsClose(index: number) {
      // Remove the alert from the array based on the index
      this.solidShadowsAlerts.splice(index, 1);
    }`,ue=`
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface Alert {
    type: string;
    message: string;
    bg:string;
    }
    roundeDefaultAlerts: Alert[] = roundeDefaultALERTS;
    const roundeDefaultALERTS: Alert[] = [
      {
        type: 'primary',
        message: ' A simple rounded primary alert\u2014check it out!',
      },
      {
        type: 'secondary',
        message: 'A simple rounded secondary alert\u2014check it out!',
      },
      {
        type: 'info',
        message: 'A simple rounded info alert\u2014check it out!',
      },
      {
        type: 'warning',
        message: 'A simple rounded warning alert\u2014check it out!',
      },
    ];
    roundeDefaultClose(index: number) {
      // Remove the alert from the array based on the index
      this.roundeDefaultAlerts.splice(index, 1);
    }`,ge=`
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface Alert {
    type: string;
    message: string;
    bg:string;
    }
    const CustomeButtonALERTS: Alert[] = [
      {
        type: 'primary',
        message: ' A simple rounded primary alert\u2014check it out!',
      },
      {
        type: 'secondary',
        message: 'A simple rounded secondary alert\u2014check it out!',
      },
      {
        type: 'info',
        message: 'A simple rounded info alert\u2014check it out!',
      },
      {
        type: 'warning',
        message: 'A simple rounded warning alert\u2014check it out!',
      },
    ];
    CustomeButtonClose(index: number) {
      // Remove the alert from the array based on the index
      this.CustomeButtonAlerts.splice(index, 1);
    }`,he=`
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface Alert {
    type: string;
    message: string;
    bg:string;
    }
    CustomizedButtonAlerts: Alert1[] = CustomizedButtonALERTS;
    const CustomizedButtonALERTS: Alert1[] = [
      {
        type: 'outline-primary',
        icon:'  <svg  class="svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000" > <path d="M0 0h24v24H0z" fill="none" /> <path   d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/> </svg>',
        message: ' A customized primary alert with an icon ',
        
      },
      {
        type: 'outline-secondary',
        message: 'A customized secondary alert with an icon ',
        icon:' <svg class="svg-secondary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
      },
      {
        type: 'outline-info',
        message: ' A customized warning alert with an icon ',
        icon:'<svg class="svg-warning" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>'
      },
      {
        type: 'outline-warning',
        message: ' A customized danger alert with an icon ',
        icon:'<svg class="svg-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></svg>'
      },
    ];
    customizedAlertclose(index: number) {
      // Remove the alert from the array based on the index
      this.CustomizedButtonAlerts.splice(index, 1);
    }`,ve=`  

@for (alert of outlineAlerts; track alert; let i = $index) {
    <div
      class="alert alert-{{ alert.type }} alert-dismissible fade show my-2"
    >
      {{ alert.message }}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        (click)="OutlineClose(i)"
      >
        <i class="bi bi-x {{ alert.bg }}"></i>
      </button>
    </div>
    }`,we=`  
    import * as PrismCode from '../../../shared/prismData/alert';
    import * as tsCode from '../../../shared/prismData/alert';
    interface OutlineAlert {
      type: string;
      message: string;
      bg:string;
    }
    outlineAlerts: OutlineAlert[] = outlineALERTS;

    const outlineALERTS: OutlineAlert[] = [
      {
        type: 'outline-primary',
        message: 'A simple outline primary alert\u2014check it out!',
        bg:''
      },
      {
        type: 'outline-secondary',
        message: 'A simple outline secondary alert\u2014check it out!',
        bg:''
      },
      {
        type: 'outline-info',
        message: 'A simple outline info alert\u2014check it out!',
        bg:''
      },
      {
        type: 'outline-warning',
        message: 'A simple outline warning alert\u2014check it out!',
        bg:''
      },
      {
        type: 'outline-success',
        message: 'A simple outline success alert\u2014check it out!',
        bg:''
      },
      {
        type: 'outline-danger',
        message: 'A simple outline danger alert\u2014check it out!',
        bg:''
      },
      {
        type: 'outline-light',
        message: 'A simple outline light alert\u2014check it out!',
        bg:'text-dark'
      },
      {
        type: 'outline-dark',
        message: 'A simple outline dark alert\u2014check it out!',
        bg:'text-dark'
      },
    ];
`,be=`    
@for (alert of solidShadowsAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{
      alert.type
    }} shadow-sm alert-dismissible fade show my-2"
  >
    A simple solid primary alert with small shadow\u2014check it out!
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      (click)="solidShadowsAlertsClose(i)"
      aria-label="Close"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  }`,fe=`   <div class="alert alert-primary shadow-sm">A simple primary alert with small shadow\u2014check it out!</div>
    <div class="alert alert-primary shadow">A simple primary alert with normal shadow\u2014check it out!</div>
    <div class="alert alert-primary shadow-lg">A simple primary alert with large shadow\u2014check it out!</div>
    <div class="alert alert-secondary shadow-sm">A simple secondary alert with small shadow\u2014check it out!
    </div>
    <div class="alert alert-secondary shadow">A simple secondary alert with normal shadow\u2014check it out!
    </div>
    <div class="alert alert-secondary shadow-lg">A simple secondary alert with large shadow\u2014check it out!
    </div>`,ye=` <div class="alert alert-primary" role="alert">
    A simple primary alert\u2014check it out!
</div>
<div class="alert alert-secondary" role="alert">
    A simple secondary alert\u2014check it out!
</div>
<div class="alert alert-success" role="alert">
    A simple success alert\u2014check it out!
</div>
<div class="alert alert-danger" role="alert">
    A simple danger alert\u2014check it out!
</div>
<div class="alert alert-warning" role="alert">
    A simple warning alert\u2014check it out!
</div>
<div class="alert alert-info" role="alert">
    A simple info alert\u2014check it out!
</div>
<div class="alert alert-light" role="alert">
    A simple light alert\u2014check it out!
</div>
<div class="alert alert-dark" role="alert">
    A simple dark alert\u2014check it out!
</div>`,Ce=` <div class="alert alert-primary" role="alert">
A simple primary alert with <a href="javascript:void(0);" class="alert-link">an example
    link</a>.
Give it a click if you like.
</div>
<div class="alert alert-secondary" role="alert">
A simple secondary alert with <a href="javascript:void(0);" class="alert-link">an example
    link</a>. Give it a click if you like.
</div>
<div class="alert alert-success" role="alert">
A simple success alert with <a href="javascript:void(0);" class="alert-link">an example
    link</a>.
Give it a click if you like.
</div>
<div class="alert alert-danger" role="alert">
A simple danger alert with <a href="javascript:void(0);" class="alert-link">an example
    link</a>.
Give it a click if you like.
</div>
<div class="alert alert-warning" role="alert">
A simple warning alert with <a href="javascript:void(0);" class="alert-link">an example
    link</a>.
Give it a click if you like.
</div>
<div class="alert alert-info" role="alert">
A simple info alert with <a href="javascript:void(0);" class="alert-link">an example link</a>.
Give it a click if you like.
</div>
<div class="alert alert-light" role="alert">
A simple light alert with <a href="javascript:void(0);" class="alert-link">an example
    link</a>.
Give it a click if you like.
</div>
<div class="alert alert-dark" role="alert">
A simple dark alert with <a href="javascript:void(0);" class="alert-link">an example link</a>.
Give it a click if you like.
</div>`,_e=`      @for (alert of solidAlerts; track alert; let i = $index) {
    <div
      class="alert alert-{{ alert.type }} alert-dismissible fade show my-2 {{
        alert.bg
      }}"
    >
      {{ alert.message }}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        (click)="solidClose(i)"
      >
        <i class="bi bi-x {{ alert.bg }}"></i>
      </button>
    </div>
    } `,xe=`  
@for (alert of roundedoutlineAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{
      alert.type
    }} rounded-pill alert-dismissible fade show my-2"
  >
    {{ alert.message }}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      (click)="roundedoutlineClose(i)"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  }
      `,Ae=`   @for (alert of roundeDefaultAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{
      alert.type
    }} rounded-pill alert-dismissible fade show my-2"
  >
    {{ alert.message }}
    <button
      type="button"
      class="btn-close"
      (click)="roundeDefaultClose(i)"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  } `,ke=`  @for (alert of CustomeButtonAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{
      alert.type
    }} rounded-pill alert-dismissible fade show my-2"
  >
    {{ alert.message }}
    <button
      type="button"
      (click)="CustomeButtonClose(i)"
      class="btn-close custom-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  }  `,Se=`      @for (alert of CustomizedButtonAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{
      alert.type
    }} alert-dismissible fade show custom-alert-icon shadow-sm my-2"
    role="alert"
  >
    <span [innerHTML]="getSanitizedSVG(alert.icon)"></span>

    {{ alert.message }}
    <button
      type="button"
      class="btn-close"
      (click)="customizedAlertclose(i)"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  }  `,Te=`   <div
 class="alert alert-primary d-flex align-items-center my-2"
 role="alert"
>
 <svg
   class="flex-shrink-0 me-2 svg-primary"
   xmlns="http://www.w3.org/2000/svg"
   height="1.5rem"
   viewBox="0 0 24 24"
   width="1.5rem"
   fill="#000000"
 >
   <path d="M0 0h24v24H0V0z" fill="none" />
   <path
     d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
   />
 </svg>
 <div>An example alert with an icon</div>
</div>
<div
 class="alert alert-success d-flex align-items-center my-2"
 role="alert"
>
 <svg
   class="flex-shrink-0 me-2 svg-success"
   xmlns="http://www.w3.org/2000/svg"
   height="1.5rem"
   viewBox="0 0 24 24"
   width="1.5rem"
   fill="#000000"
 >
   <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
   <path
     d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
   />
 </svg>
 <div>An example success alert with an icon</div>
</div>
<div
 class="alert alert-warning d-flex align-items-center my-2"
 role="alert"
>
 <svg
   class="flex-shrink-0 me-2 svg-warning"
   xmlns="http://www.w3.org/2000/svg"
   enable-background="new 0 0 24 24"
   height="1.5rem"
   viewBox="0 0 24 24"
   width="1.5rem"
   fill="#000000"
 >
   <g><rect fill="none" height="24" width="24" /></g>
   <g>
     <g>
       <g>
         <path
           d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"
         />
         <polygon points="13,16 11,16 11,18 13,18" />
         <polygon points="13,10 11,10 11,15 13,15" />
       </g>
     </g>
   </g>
 </svg>
 <div>An example warning alert with an icon</div>
</div>
<div
 class="alert alert-danger d-flex align-items-center my-2"
 role="alert"
>
 <svg
   class="flex-shrink-0 me-2 svg-danger"
   xmlns="http://www.w3.org/2000/svg"
   enable-background="new 0 0 24 24"
   height="1.5rem"
   viewBox="0 0 24 24"
   width="1.5rem"
   fill="#000000"
 >
   <g><rect fill="none" height="24" width="24" /></g>
   <g>
     <g>
       <g>
         <path
           d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"
         />
         <rect height="6" width="2" x="11" y="7" />
         <rect height="2" width="2" x="11" y="15" />
       </g>
     </g>
   </g>
 </svg>
 <div>An example danger alert with an icon</div>
</div> `,Ee=`      <div
id="rowA"
class="alert alert-img alert-primary alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
  <img src="./assets/images/faces/3.jpg" alt="img" />
</div>
<div>A simple primary alert with image\u2014check it out!</div>
<button
  (click)="removeRow('rowA')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="rowB"
class="alert alert-img alert-secondary alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
  <img src="./assets/images/faces/5.jpg" alt="img" />
</div>
<div>A simple secondary alert with image\u2014check it out!</div>
<button
  (click)="removeRow('rowB')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="rowC"
class="alert alert-img alert-warning alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
  <img src="./assets/images/faces/8.jpg" alt="img" />
</div>
<div>A simple warning alert with image\u2014check it out!</div>
<button
  (click)="removeRow('rowC')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="rowD"
class="alert alert-img alert-danger alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
  <img src="./assets/images/faces/11.jpg" alt="img" />
</div>
<div>A simple danger alert with image\u2014check it out!</div>
<button
  (click)="removeRow('rowD')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="rowE"
class="alert alert-img alert-info alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
  <img src="./assets/images/faces/13.jpg" alt="img" />
</div>
<div>A simple info alert with image\u2014check it out!</div>
<button
  (click)="removeRow('rowE')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="rowF"
class="alert alert-img alert-light alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
  <img src="./assets/images/faces/10.jpg" alt="img" />
</div>
<div>A simple light alert with image\u2014check it out!</div>
<button
  (click)="removeRow('rowF')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="rowG"
class="alert alert-img alert-dark alert-dismissible fase show rounded-pill flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3 avatar-rounded">
  <img src="./assets/images/faces/15.jpg" alt="img" />
</div>
<div>A simple dark alert with image\u2014check it out!</div>
<button
  (click)="removeRow('rowG')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x text-muted"></i>
</button>
</div>`,ze=`          <div
id="row1"
class="alert alert-img alert-primary alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-xs me-3">
  <img src="./assets/images/faces/3.jpg" alt="img" />
</div>
<div>A simple primary alert with image\u2014check it out!</div>
<button
  (click)="removeRow('row1')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="row2"
class="alert alert-img alert-secondary alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-sm me-3">
  <img src="./assets/images/faces/5.jpg" alt="img" />
</div>
<div>A simple secondary alert with image\u2014check it out!</div>
<button
  (click)="removeRow('row2')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="row3"
class="alert alert-img alert-warning alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar me-3">
  <img src="./assets/images/faces/8.jpg" alt="img" />
</div>
<div>A simple warning alert with image\u2014check it out!</div>
<button
  (click)="removeRow('row3')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="row4"
class="alert alert-img alert-danger alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-md me-3">
  <img src="./assets/images/faces/11.jpg" alt="img" />
</div>
<div>A simple danger alert with image\u2014check it out!</div>
<button
  (click)="removeRow('row4')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="row5"
class="alert alert-img alert-info alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-lg me-3">
  <img src="./assets/images/faces/13.jpg" alt="img" />
</div>
<div>A simple info alert with image\u2014check it out!</div>
<button
  (click)="removeRow('row5')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x"></i>
</button>
</div>
<div
id="row6"
class="alert alert-img alert-dark alert-dismissible fase show flex-wrap my-2"
role="alert"
>
<div class="avatar avatar-xl me-3">
  <img src="./assets/images/faces/14.jpg" alt="img" />
</div>
<div>A simple info alert with image\u2014check it out!</div>
<button
  (click)="removeRow('row6')"
  type="button"
  class="btn-close"
  data-bs-dismiss="alert"
  aria-label="Close"
>
  <i class="bi bi-x text-muted"></i>
</button>
</div>   `,De=` @for (alert11 of contentsalerts; track alert11.type) {
    <div class="col-xl-6">
            <ngb-alert [type]="alert11.type" (closed)="close11(alert11)">
                
                    <div [class]="alert11.class">
                    <h6 class="aletr-heading mb-0 text-fixed-white"> {{ alert11.message}}</h6>
                   
                </div>  <hr class="my-0">
                <div class="p-3">
                    <p class="mb-0">We appreciate you to let us know the bug in the template and for warning us about future consequences <a href="javascript:void(0);" class="fw-medium text-decoration-underline">Visit for support for queries ?</a></p>
                </div>  </ngb-alert>
          </div>
       
        }   `,Ve=` 
@for (alert of solidroundedAlerts; track alert; let i = $index) {
  <div
    class="alert alert-{{
      alert.type
    }} rounded-pill alert-dismissible fade show mb-2"
  >
    {{ alert.message }}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      (click)="solidroundedClose(i)"
    >
      <i class="bi bi-x"></i>
    </button>
  </div>
  }   `,Le=` <div class="row gy-3">
  <div class="col-xl-6">
    <div
      class="alert alert-primary overflow-hidden p-0"
      role="alert"
      [(ngbCollapse)]="isClosedA"
    >
      <div
        class="p-3 bg-primary text-fixed-white d-flex justify-content-between"
      >
        <h6 class="alert-heading mb-0 text-fixed-white">
          Thank you for reporting this.
        </h6>
        <button
          type="button"
          class="btn-close p-0 text-fixed-white"
          data-bs-dismiss="alert"
          aria-label="Close"
          (click)="Closetoggle('A')"
          [attr.aria-expanded]="!isClosedA"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
      <hr class="my-0" />
      <div class="p-3">
        <p class="mb-0">
          We appreciate you to let us know the bug in the template and
          for warning us about future consequences
          <a
            href="javascript:void(0);"
            class="fw-semibold text-decoration-underline"
            >Visit for support for queries ?</a
          >
        </p>
      </div>
    </div>
  </div>
  <div class="col-xl-6">
    <div
      class="alert alert-secondary overflow-hidden p-0"
      role="alert"
      [(ngbCollapse)]="isClosedB"
    >
      <div
        class="p-3 bg-secondary text-fixed-white d-flex justify-content-between"
      >
        <h6 class="alert-heading mb-0 text-fixed-white">
          Thank you for reporting this.
        </h6>
        <button
          type="button"
          class="btn-close p-0 text-fixed-white"
          data-bs-dismiss="alert"
          aria-label="Close"
          (click)="Closetoggle('B')"
          [attr.aria-expanded]="!isClosedB"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
      <hr class="my-0" />
      <div class="p-3">
        <p class="mb-0">
          We appreciate you to let us know the bug in the template and
          for warning us about future consequences
          <a
            href="javascript:void(0);"
            class="fw-semibold text-decoration-underline"
            >Visit for support for queries ?</a
          >
        </p>
      </div>
    </div>
  </div>
  <div class="col-xl-6">
    <div
      class="alert alert-success overflow-hidden p-0"
      role="alert"
      [(ngbCollapse)]="isClosedC"
    >
      <div
        class="p-3 bg-success text-fixed-white d-flex justify-content-between"
      >
        <h6 class="alert-heading mb-0 text-fixed-white">
          Thank you for reporting this.
        </h6>
        <button
          type="button"
          class="btn-close p-0 text-fixed-white"
          data-bs-dismiss="alert"
          aria-label="Close"
          (click)="Closetoggle('C')"
          [attr.aria-expanded]="!isClosedC"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
      <hr class="my-0" />
      <div class="p-3">
        <p class="mb-0">
          We appreciate you to let us know the bug in the template and
          for warning us about future consequences
          <a
            href="javascript:void(0);"
            class="fw-semibold text-decoration-underline"
            >Visit for support for queries ?</a
          >
        </p>
      </div>
    </div>
  </div>
  <div class="col-xl-6">
    <div
      class="alert alert-warning overflow-hidden p-0"
      role="alert"
      [(ngbCollapse)]="isClosedD"
    >
      <div
        class="p-3 bg-warning text-fixed-white d-flex justify-content-between"
      >
        <h6 class="alert-heading mb-0 text-fixed-white">
          Thank you for reporting this.
        </h6>
        <button
          type="button"
          class="btn-close p-0 text-fixed-white"
          data-bs-dismiss="alert"
          aria-label="Close"
          (click)="Closetoggle('D')"
          [attr.aria-expanded]="!isClosedD"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
      <hr class="my-0" />
      <div class="p-3">
        <p class="mb-0">
          We appreciate you to let us know the bug in the template and
          for warning us about future consequences
          <a
            href="javascript:void(0);"
            class="fw-semibold text-decoration-underline"
            >Visit for support for queries ?</a
          >
        </p>
      </div>
    </div>
  </div>
</div> `;var je=["*"],se=(()=>{class o{isDismissible=!1;variant="";close=new $;title="";linkText="";buttonClass="";onClose(){this.close.emit()}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=z({type:o,selectors:[["spk-alerts"]],inputs:{isDismissible:"isDismissible",variant:"variant",title:"title",linkText:"linkText",buttonClass:"buttonClass"},outputs:{close:"close"},ngContentSelectors:je,decls:2,vars:2,consts:[[3,"closed","type","dismissible"]],template:function(n,t){n&1&&(P(),i(0,"ngb-alert",0),p("closed",function(){return t.onClose()}),q(1),s()),n&2&&c("type",t.variant+" mb-3")("dismissible",t.isDismissible)},dependencies:[X,D],encapsulation:2})}return o})();var Ie=["staticAlert"],Re=["selfClosingAlert"];function We(o,u){if(o&1&&(i(0,"div",4)(1,"spk-alerts",106),r(2),s()()),o&2){let e=u.$implicit;l(),c("variant",e.color)("title",e.title),l(),w(" ",e.title," ")}}function He(o,u){if(o&1){let e=C();i(0,"div",6)(1,"spk-alerts",107),p("close",function(){let t=h(e).$index,a=g();return v(a.handleClose(t))}),r(2),i(3,"a",108),r(4,"an example link"),s(),r(5,". Give it a click if you like. "),s()()}if(o&2){let e=u.$implicit;l(),c("variant",e.variant)("title",e.title)("isDismissible",!1),l(),w(" ",e.title," ")}}function $e(o,u){if(o&1){let e=C();i(0,"spk-alerts",109),p("close",function(){let t=h(e).$index,a=g();return v(a.solidClose(t))}),r(1),i(2,"button",110),p("close",function(){let t=h(e).$index,a=g();return v(a.solidClose(t))}),d(3,"i",14),s()()}if(o&2){let e=u.$implicit;c("variant",e.type)("title",e.message)("isDismissible",!0),l(),w(" ",e.message," ")}}function Fe(o,u){if(o&1){let e=C();i(0,"div",10)(1,"spk-alerts",109),p("close",function(){let t=h(e).$index,a=g();return v(a.solidroundedClose(t))}),r(2),i(3,"button",110),p("close",function(){let t=h(e).$index,a=g();return v(a.solidroundedClose(t))}),d(4,"i",14),s()()()}if(o&2){let e=u.$implicit,n=g();l(),c("variant",n.getVariant(e))("title",e.title)("isDismissible",!0),l(),w(" ",e.title," ")}}function Ge(o,u){if(o&1){let e=C();i(0,"div",111),r(1),i(2,"button",112),p("click",function(){let t=h(e).index,a=g();return v(a.removeAlert(t))}),d(3,"i",14),s()()}if(o&2){let e=u.$implicit;l(),w(" ",e," ")}}function Pe(o,u){if(o&1){let e=C();i(0,"div",4)(1,"spk-alerts",109),p("close",function(){let t=h(e).$index,a=g();return v(a.OutlineClose(t))}),r(2),i(3,"button",110),p("close",function(){let t=h(e).$index,a=g();return v(a.OutlineClose(t))}),d(4,"i",14),s()()()}if(o&2){let e=u.$implicit;l(),c("variant",e.color)("title",e.title)("isDismissible",!0),l(),w(" ",e.title," ")}}function qe(o,u){if(o&1){let e=C();i(0,"div",10)(1,"spk-alerts",109),p("close",function(){let t=h(e).$index,a=g();return v(a.shodowClose(t))}),r(2),i(3,"button",110),p("close",function(){let t=h(e).$index,a=g();return v(a.shodowClose(t))}),d(4,"i",14),s()()()}if(o&2){let e=u.$implicit,n=g();l(),c("variant",n.getVariant(e))("title",e.title)("isDismissible",!0),l(),w(" ",e.title," ")}}function Oe(o,u){if(o&1){let e=C();i(0,"div",10)(1,"spk-alerts",109),p("close",function(){h(e);let t=g();return v(t.differentShadowsAlertsClose(t.i))}),r(2),i(3,"button",110),p("close",function(){h(e);let t=g();return v(t.differentShadowsAlertsClose(t.i))}),d(4,"i",14),s()()()}if(o&2){let e=u.$implicit;l(),c("variant",e.color)("title",e.title)("isDismissible",!0),l(),w(" ",e.title," ")}}function Ne(o,u){if(o&1){let e=C();i(0,"div",6)(1,"spk-alerts",109),p("close",function(){let t=h(e).$index,a=g();return v(a.RoundedOutlineClose(t))}),r(2),i(3,"button",110),p("close",function(){let t=h(e).$index,a=g();return v(a.RoundedOutlineClose(t))}),d(4,"i",14),s()()()}if(o&2){let e=u.$implicit;l(),c("variant",e.color)("title",e.title)("isDismissible",!0),l(),w(" ",e.title," ")}}function Qe(o,u){if(o&1){let e=C();i(0,"spk-alerts",113),p("close",function(){let t=h(e).$index,a=g();return v(a.roundeDefaultClose(t))}),r(1),i(2,"button",110),p("close",function(){let t=h(e).$index,a=g();return v(a.roundeDefaultClose(t))}),d(3,"i",14),s()()}if(o&2){let e=u.$implicit;c("variant",e.type)("isDismissible",!0),l(),w(" ",e.message," ")}}function Ue(o,u){if(o&1){let e=C();i(0,"spk-alerts",113),p("close",function(){let t=h(e).$index,a=g();return v(a.CustomeButtonClose(t))}),r(1),i(2,"button",114),p("close",function(){let t=h(e).$index,a=g();return v(a.CustomeButtonClose(t))}),d(3,"i",14),s()()}if(o&2){let e=u.$implicit;c("variant",e.color)("isDismissible",!0),l(),w(" ",e.title," ")}}function Ye(o,u){if(o&1){let e=C();i(0,"spk-alerts",113),p("close",function(){let t=h(e).$index,a=g();return v(a.customizedAlertclose(t))}),d(1,"span",115),r(2),i(3,"button",110),p("close",function(){let t=h(e).$index,a=g();return v(a.customizedAlertclose(t))}),d(4,"i",14),s()()}if(o&2){let e=u.$implicit,n=g();c("variant",e.type)("isDismissible",!0),l(),c("innerHTML",n.getSanitizedSVG(e.icon),V),l(),w(" ",e.message," ")}}function Je(o,u){if(o&1&&(i(0,"spk-alerts",22),d(1,"span",115),r(2),s()),o&2){let e=u.$implicit,n=g();c("variant",e.type),l(),c("innerHTML",n.getSanitizedSVG(e.icon),V),l(),w(" ",e.message," ")}}function Ke(o,u){if(o&1){let e=C();i(0,"spk-alerts",113),p("close",function(){let t=h(e).$index,a=g();return v(a.imageAlertsClose(t))}),i(1,"div",116),d(2,"img",117),s(),r(3),i(4,"button",110),p("close",function(){let t=h(e).$index,a=g();return v(a.imageAlertsClose(t))}),d(5,"i",118),s()()}if(o&2){let e=u.$implicit;c("variant",e.type)("isDismissible",!0),l(2),c("src",e.image,L),l(),w(" ",e.message," "),l(2),c("ngClass",e.type==="dark alert-img  rounded-pill flex-wrap"?"text-muted":"")}}function Xe(o,u){if(o&1){let e=C();i(0,"spk-alerts",113),p("close",function(){let t=h(e).$index,a=g();return v(a.ImageSizeAlertclose(t))}),i(1,"div"),d(2,"img",117),s(),r(3),i(4,"button",110),p("close",function(){let t=h(e).$index,a=g();return v(a.ImageSizeAlertclose(t))}),d(5,"i",118),s()()}if(o&2){let e=u.$implicit;c("variant",e.type)("isDismissible",!0),l(),B("avatar ",e.avatarClass," me-3"),l(),c("src",e.image,L),l(),w(" ",e.message," "),l(2),c("ngClass",e.type==="dark alert-img   flex-wrap"?"text-muted":"")}}function Ze(o,u){if(o&1){let e=C();i(0,"div",52)(1,"spk-alerts",109),p("close",function(){let t=h(e).$index,a=g();return v(a.additionalInfoClose(t))}),i(2,"div")(3,"h6",119),r(4),s()(),d(5,"hr",120),i(6,"div",121)(7,"p",122),r(8),i(9,"a",123),r(10),s()()(),i(11,"button",124),p("close",function(){let t=h(e).$index,a=g();return v(a.additionalInfoClose(t))}),d(12,"i",14),s()()()}if(o&2){let e=u.$implicit;l(),c("variant",e.variant)("title",e.title)("isDismissible",!0),l(),B("p-3 bg-",e.variant," text-fixed-white d-flex justify-content-between"),l(2),O(e.title),l(4),w("",e.message," "),l(2),w(" ",e.linkTitle,"")}}var et=[{type:"success",message:"This is an success alert"},{type:"info",message:"This is an info alert"},{type:"warning",message:"This is a warning alert"},{type:"danger",message:"This is a danger alert"},{type:"primary",message:"This is a primary alert"},{type:"secondary",message:"This is a secondary alert"},{type:"light",message:"This is a light alert"},{type:"dark",message:"This is a dark alert"}],tt=[{type:"primary svg-primary  shadow-sm ",icon:' <svg class="flex-shrink-0 me-2 svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>',message:" A customized primary alert with an icon "},{type:"success svg-success  shadow-sm",message:"A customized success alert with an icon ",icon:' <svg class="flex-shrink-0 me-2 svg-success" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>'},{type:"warning svg-warning  shadow-sm",message:" A customized warning alert with an icon ",icon:'<svg class="flex-shrink-0 me-2 svg-warning" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"></path><polygon points="13,16 11,16 11,18 13,18"></polygon><polygon points="13,10 11,10 11,15 13,15"></polygon></g></g></g></svg>'},{type:"danger svg-danger  shadow-sm",message:" A customized danger alert with an icon ",icon:'<svg class="flex-shrink-0 me-2 svg-danger" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"></path><rect height="6" width="2" x="11" y="7"></rect><rect height="2" width="2" x="11" y="15"></rect></g></g></g></svg>'}],it=[{type:"primary rounded-pill",message:" A simple rounded primary alert\u2014check it out!"},{type:"success rounded-pill",message:"A simple rounded success alert\u2014check it out!"},{type:"info rounded-pill",message:"A simple rounded info alert\u2014check it out!"},{type:"secondary rounded-pill",message:"A simple rounded secondary alert\u2014check it out!"},{type:"warning rounded-pill",message:"A simple rounded warning alert\u2014check it out!"},{type:"danger rounded-pill",message:"A simple rounded danger alert\u2014check it out!"}],st=[{type:"primary svg-primary custom-alert-icon shadow-sm ",icon:'  <svg  class="svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000" > <path d="M0 0h24v24H0z" fill="none" /> <path   d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/> </svg>',message:" A customized primary alert with an icon "},{type:"secondary svg-secondary custom-alert-icon shadow-sm",message:"A customized secondary alert with an icon ",icon:' <svg class="svg-secondary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'},{type:"warning svg-warning custom-alert-icon shadow-sm",message:" A customized warning alert with an icon ",icon:'<svg class="svg-warning" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>'},{type:"danger svg-danger custom-alert-icon shadow-sm",message:" A customized danger alert with an icon ",icon:'<svg class="svg-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></svg>'}],lt=[{type:"solid-primary ",message:" A simple solid primary alert\u2014check it out!",bg:""},{type:"solid-secondary ",message:"A simple solid secondary alert\u2014check it out!",bg:""},{type:"solid-info ",message:"A simple solid info alert\u2014check it out!",bg:""},{type:"solid-warning ",message:"A simple solid warning alert\u2014check it out!",bg:""},{type:"solid-success ",message:"A simple solid success alert\u2014check it out!",bg:""},{type:"solid-danger ",message:"A simple solid danger alert\u2014check it out!",bg:""},{type:"solid-light ",message:"A simple solid light alert\u2014check it out!",bg:"text-dark"},{type:"solid-dark text-white ",message:"A simple solid dark alert\u2014check it out!",bg:"text-dark"}],_t=(()=>{class o{sanitizer;prsimCodeData=E;tsCodeData=E;reusableCode=E;i;toggleClass="line";alerts;alertData=[{color:"primary",title:"A simple primary alert\u2014check it out!"},{color:"secondary",title:"A simple secondary alert\u2014check it out!"},{color:"success",title:"A simple success alert\u2014check it out!"},{color:"danger",title:"A simple danger alert\u2014check it out!"},{color:"warning",title:"A simple warning alert\u2014check it out!"},{color:"info",title:"A simple info alert\u2014check it out!"},{color:"light",title:"A simple light alert\u2014check it out!"},{color:"dark",title:"A simple dark alert\u2014check it out!"}];outlineAlerts=[{color:"outline-primary",title:"A simple outline primary alert\u2014check it out!"},{color:"outline-secondary",title:"A simple outline secondary alert\u2014check it out!"},{color:"outline-info",title:"A simple outline info alert\u2014check it out!"},{color:"outline-warning",title:"A simple outline warning alert\u2014check it out!"},{color:"outline-success",title:"A simple outline success alert\u2014check it out!"},{color:"outline-danger",title:"A simple outline danger alert\u2014check it out!"},{color:"outline-light",title:"A simple outline light alert\u2014check it out!"},{color:"outline-dark",title:"A simple outline dark alert\u2014check it out!"}];OutlineClose(e){this.outlineAlerts.splice(e,1)}solidAlerts=lt;solidClose(e){this.solidAlerts.splice(e,1)}shadowAlert=[{color:"primary shadow-sm",title:"A simple solid primary alert\u2014check it out!"},{color:"primary shadow",title:"A simple solid primary alert\u2014check it out!"},{color:"primary shadow-lg",title:"A simple solid primary alert\u2014check it out!"},{color:"secondary shadow-sm",title:"A simple solid secondary alert\u2014check it out!"},{color:"secondary ",title:"A simple solid secondary alert\u2014check it out!"},{color:"secondary",title:"A simple solid secondary alert\u2014check it out!"}];shodowClose(e){this.shadowAlert.splice(e,1)}getVariant(e){return e.outline?`alert-outline-${e.color}`:`solid-${e.color}`}DiffshadowAlert=[{title:"A simple primary alert with small shadow\u2014check it out!",color:"primary shadow-sm"},{title:"A simple primary alert with normal shadow\u2014check it out!",color:"primary shadow"},{title:"A simple primary alert with large shadow\u2014check it out!",color:"primary shadow-lg"},{title:"A simple secondary alert with small shadow\u2014check it out!",color:"secondary shadow-sm"},{title:"A simple secondary alert with normal shadow\u2014check it out!",color:"secondary shadow"},{title:"A simple secondary alert with large shadow\u2014check it out!",color:"secondary shadow-lg"}];differentShadowsAlertsClose(e){this.DiffshadowAlert.splice(e,1)}LinkAlerts=[{variant:"primary",title:"A simple primary alert with"},{variant:"secondary",title:"A simple secondary alert with"},{variant:"success",title:"A simple success alert with"},{variant:"danger",title:"A simple danger alert with"},{variant:"warning",title:"A simple warning alert with"},{variant:"info",title:"A simple info alert with"},{variant:"light",title:"A simple light alert with"},{variant:"dark",title:"A simple dark alert with"}];handleClose(e){this.LinkAlerts.splice(e,1)}solidroundedAlerts=[{color:"primary rounded-pill",title:"A simple solid Rounded primary alert\u2014check it out!"},{color:"success rounded-pill",title:"A simple solid Rounded success alert\u2014check it out!"},{color:"info rounded-pill",title:"A simple solid Rounded info alert\u2014check it out!"},{color:"secondary rounded-pill",title:"A simple solid Rounded secondary alert\u2014check it out!"},{color:"warning rounded-pill",title:"A simple solid Rounded warning alert\u2014check it out!"},{color:"danger rounded-pill",title:"A simple solid Rounded danger alert\u2014check it out!"}];roundedclose(e){this.solidroundedAlerts.splice(e,1)}roundedoutlineAlerts=[{color:"outline-primary rounded-pill",title:"A simple Rounded  outline primary alert\u2014check it out!"},{color:"outline-success rounded-pill",title:"A simple Rounded outline success alert\u2014check it out!"},{color:"outline-info rounded-pill",title:"A simple Rounded outline info alert\u2014check it out!"},{color:"outline-secondary rounded-pill",title:"A simple Rounded outline secondary alert\u2014check it out!"},{color:"outline-warning rounded-pill",title:"A simple Rounded outline warning alert\u2014check it out!"},{color:"outline-danger rounded-pill",title:"A simple Rounded outline danger alert\u2014check it out!"}];RoundedOutlineClose(e){this.roundedoutlineAlerts.splice(e,1)}roundedDefaultAlert=[{color:"primary rounded-pill",title:"A simple primary alert\u2014check it out!"},{color:"secondary rounded-pill",title:"A simple secondary alert\u2014check it out!"},{color:"warning rounded-pill",title:"A simple warning alert\u2014check it out!"},{color:"danger rounded-pill",title:"A simple danger alert\u2014check it out!"}];roundeDefaultClose(e){this.roundeDefaultAlerts.splice(e,1)}CustomeButtonAlerts=[{color:"primary rounded-pill",title:"A simple primary alert\u2014check it out!"},{color:"secondary rounded-pill",title:"A simple secondary alert\u2014check it out!"},{color:"warning rounded-pill",title:"A simple warning alert\u2014check it out!"},{color:"danger rounded-pill",title:"A simple danger alert\u2014check it out!"}];CustomeButtonClose(e){this.CustomeButtonAlerts.splice(e,1)}imageAlerts=[{type:"primary alert-img  rounded-pill flex-wrap",message:"A simple primary alert with image\u2014check it out!",image:"./assets/images/faces/3.jpg"},{type:"secondary alert-img  rounded-pill flex-wrap",message:"A simple secondary alert with image\u2014check it out!",image:"./assets/images/faces/5.jpg"},{type:"warning alert-img  rounded-pill flex-wrap",message:"A simple warning alert with image\u2014check it out!",image:"./assets/images/faces/8.jpg"},{type:"danger alert-img  rounded-pill flex-wrap",message:"A simple danger alert with image\u2014check it out!",image:"./assets/images/faces/11.jpg"},{type:"info alert-img  rounded-pill flex-wrap",message:"A simple info alert with image\u2014check it out!",image:"./assets/images/faces/13.jpg"},{type:"light alert-img  rounded-pill flex-wrap",message:"A simple light alert with image\u2014check it out!",image:"./assets/images/faces/10.jpg"},{type:"dark alert-img  rounded-pill flex-wrap",message:"A simple dark alert with image\u2014check it out!",image:"./assets/images/faces/15.jpg"}];imageAlertsClose(e){this.imageAlerts.splice(e,1)}imageSizeAlertsClose(e){this.imageSizeAlerts.splice(e,1)}additionalInfoClose(e){this.additionalInfoAlert.splice(e,1)}additionalInfoAlert=[{variant:"primary p-0 overflow-hidden",title:"Thank you for reporting this.",message:"We appreciate you letting us know the bug in the template and for warning us about future consequences.",linkTitle:"Visit for support for queries ?"},{variant:"success p-0 overflow-hidden",title:"Thank you for reporting this.",message:"We appreciate you letting us know the bug in the template and for warning us about future consequences.",linkTitle:"Visit for support for queries ?"},{variant:"info p-0 overflow-hidden",title:"Thank you for reporting this.",message:"We appreciate you letting us know the bug in the template and for warning us about future consequences.",linkTitle:"Visit for support for queries ?"},{variant:"secondary p-0 overflow-hidden",title:"Thank you for reporting this.",message:"We appreciate you letting us know the bug in the template and for warning us about future consequences.",linkTitle:"Visit for support for queries ?"}];livealerts=[];removeAlert(e){this.livealerts.splice(e,1)}showAlert(){this.livealerts.push("Nice, you triggered this alert message!")}close(e){this.alerts.splice(this.alerts.indexOf(e),1)}closeAlerts(e){let n=document.getElementById(e);n&&n.remove()}CustomizedIconAlerts=tt;roundeDefaultAlerts=it;CustomizedButtonAlerts=st;solidroundedClose(e){this.solidroundedAlerts.splice(e,1)}customizedIconAlertclose(e){this.CustomizedIconAlerts.splice(e,1)}roundedoutlineClose(e){this.roundedoutlineAlerts.splice(e,1)}customizedAlertclose(e){this.CustomizedButtonAlerts.splice(e,1)}customizedImageSizeAlertclose(e){this.imageSizeAlerts.splice(e,1)}imageSizeAlerts=[{type:"primary alert-img   flex-wrap",message:"A simple primary alert with image\u2014check it out!",image:"./assets/images/faces/3.jpg",avatarClass:"avatar-xs"},{type:"secondary alert-img   flex-wrap",message:"A simple secondary alert with image\u2014check it out!",image:"./assets/images/faces/5.jpg",avatarClass:"avatar-sm"},{type:"warning alert-img   flex-wrap",message:"A simple warning alert with image\u2014check it out!",image:"./assets/images/faces/8.jpg",avatarClass:""},{type:"danger alert-img   flex-wrap",message:"A simple danger alert with image\u2014check it out!",image:"./assets/images/faces/11.jpg",avatarClass:"avatar-md"},{type:"info alert-img   flex-wrap",message:"A simple info alert with image\u2014check it out!",image:"./assets/images/faces/13.jpg",avatarClass:"avatar-lg"},{type:"dark alert-img   flex-wrap",message:"A simple dark alert with image\u2014check it out!",image:"./assets/images/faces/14.jpg",avatarClass:"avatar-xl"}];ImageSizeAlertclose(e){this.imageSizeAlerts.splice(e,1)}removeRow(e){let n=document.getElementById(e);n&&n.remove()}isClosed=!1;isClosed1=!1;isClosed2=!1;isClosed3=!1;isClosed4=!1;isClosed5=!1;isClosed6=!1;isClosed7=!1;isClosed8=!1;isClosed9=!1;isClosed10=!1;isClosed11=!1;isClosed12=!1;isClosed13=!1;isClosedA=!1;isClosedB=!1;isClosedC=!1;isClosedD=!1;Closetoggle(e){e=="zero"&&(this.isClosed=!0),e=="one"&&(this.isClosed1=!0),e=="two"&&(this.isClosed2=!0),e=="three"&&(this.isClosed3=!0),e=="four"&&(this.isClosed4=!0),e=="five"&&(this.isClosed5=!0),e=="six"&&(this.isClosed6=!0),e=="seven"&&(this.isClosed7=!0),e=="eight"&&(this.isClosed8=!0),e=="nine"&&(this.isClosed9=!0),e=="ten"&&(this.isClosed10=!0),e=="eleven"&&(this.isClosed11=!0),e=="twelve"&&(this.isClosed12=!0),e=="A"&&(this.isClosedA=!0),e=="B"&&(this.isClosedB=!0),e=="C"&&(this.isClosedC=!0),e=="D"&&(this.isClosedD=!0)}reset(){this.alerts=Array.from(et)}_message$=new R;staticAlertClosed=!1;successMessage="";staticAlert;selfClosingAlert;constructor(e){this.sanitizer=e,this.reset(),this._message$.pipe(J(),H(n=>this.successMessage=n),W(5e3)).subscribe(()=>this.selfClosingAlert?.close())}getSanitizedSVG(e){return this.sanitizer.bypassSecurityTrustHtml(e)}changeSuccessMessage(){this._message$.next(`${new Date} - Message successfully changed.`)}static \u0275fac=function(n){return new(n||o)(F(Y))};static \u0275cmp=z({type:o,selectors:[["app-alerts"]],viewQuery:function(n,t){if(n&1&&(M(Ie,5),M(Re,5)),n&2){let a;j(a=I())&&(t.staticAlert=a.first),j(a=I())&&(t.selfClosingAlert=a.first)}},decls:334,vars:79,consts:[["title","Alerts","title1","Ui Elements","activeTitle","Alerts"],[1,"row"],[1,"col-xl-12"],[1,"card-title",3,"title","prism"],[1,"mb-2"],[3,"title","reuseCode","prism"],[1,""],[3,"title","reuseCode","prism","tsCode"],[3,"variant","title","isDismissible"],[1,"card-title",3,"title","prism","tsCode"],[1,"mb-3"],[3,"classbody","title","prism"],["type","warning","role","alert",1,"alert","alert-warning","alert-dismissible","fade","show"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close"],[1,"bi","bi-x"],[3,"title","prism","tsCode"],["id","liveAlertPlaceholder"],["class","alert alert-success alert-dismissible mb-2","role","alert","aria-live","polite",4,"ngFor","ngForOf"],["type","button","id","liveAlertBtn",1,"btn","btn-primary",3,"click"],[1,"example"],[3,"variant","isDismissible"],[3,"title","reuseCode","prism","tsCode","classbody"],[3,"variant"],[3,"title","reuseCode","prism","classbody"],[1,"col-xxl-3","col-xl-6","col-lg-6","col-md-6","col-sm-6","col-12"],[1,"card",3,"ngbCollapseChange","ngbCollapse"],[1,"alert","custom-alert1","alert-primary"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close","ms-auto",3,"click"],[1,"text-center","px-5","pb-0","svg-primary"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"custom-alert-icon","svg-primary"],["d","M0 0h24v24H0z","fill","none"],["d","M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"],[1,"btn","btn-sm","btn-outline-danger","m-1"],[1,"btn","btn-sm","btn-primary","m-1"],[1,"alert","custom-alert1","alert-secondary"],[1,"text-center","px-5","pb-0","svg-secondary"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"custom-alert-icon","svg-secondary"],["d","M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"],[1,"btn","btn-sm","btn-secondary","m-1"],[1,"alert","custom-alert1","alert-warning"],[1,"text-center","px-5","pb-0","svg-warning"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"custom-alert-icon","svg-warning"],["d","M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"],[1,"btn","btn-sm","btn-outline-secondary","m-1"],[1,"btn","btn-sm","btn-warning","m-1"],[1,"alert","custom-alert1","alert-danger"],[1,"text-center","px-5","pb-0","svg-danger"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"custom-alert-icon","svg-danger"],["d","M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"],[1,"btn","btn-sm","btn-danger","m-1"],[3,"title","prism"],[1,"row","gy-3","additional-style"],[1,"col-xl-6"],[1,"col-xl-3"],[1,"card","border-0",3,"ngbCollapseChange","ngbCollapse"],[1,"alert","alert-primary","border","border-primary","mb-0","p-2"],[1,"d-flex","align-items-start"],[1,"me-2","svg-primary"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-primary"],["d","M0 0h24v24H0V0z","fill","none"],["d","M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"],[1,"text-primary","w-100"],[1,"fw-semibold","d-flex","justify-content-between"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close","p-0",3,"click"],[1,"fs-12","op-8","mb-1"],[1,"fs-12"],["href","javascript:void(0);",1,"text-secondary","fw-semibold","me-1","d-inline-block"],["href","javascript:void(0);",1,"text-primary","fw-semibold","me-1"],[1,"alert","alert-secondary","border","border-secondary","mb-0","p-2"],[1,"me-2","svg-secondary"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-secondary"],["d","M0 0h24v24H0V0zm0 0h24v24H0V0z","fill","none"],["d","M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"],[1,"text-secondary","w-100"],["href","javascript:void(0);",1,"text-danger","fw-semibold","me-2","d-inline-block"],["href","javascript:void(0);",1,"text-secondary","fw-semibold"],[1,"alert","alert-warning","border","border-warning","mb-0","p-2"],[1,"me-2","svg-warning"],["xmlns","http://www.w3.org/2000/svg","enable-background","new 0 0 24 24","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-warning"],["fill","none","height","24","width","24"],["d","M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"],["points","13,16 11,16 11,18 13,18"],["points","13,10 11,10 11,15 13,15"],[1,"text-warning","w-100"],["href","javascript:void(0);",1,"text-dark","fw-semibold","me-2","d-inline-block"],["href","javascript:void(0);",1,"text-warning","fw-semibold"],[1,"alert","alert-danger","border","border-danger","mb-0","p-2"],[1,"me-2","svg-danger"],["xmlns","http://www.w3.org/2000/svg","enable-background","new 0 0 24 24","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-danger"],["d","M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"],["height","6","width","2","x","11","y","7"],["height","2","width","2","x","11","y","15"],[1,"text-danger","w-100"],["href","javascript:void(0);",1,"text-info","fw-semibold","me-2","d-inline-block"],["href","javascript:void(0);",1,"text-danger","fw-semibold"],[1,"alert","alert-solid-primary","border","border-primary","mb-0","p-2"],[1,"me-2","svg-white"],["xmlns","http://www.w3.org/2000/svg","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-white"],[1,"text-fixed-white","w-100"],["href","javascript:void(0);",1,"text-fixed-white","fw-semibold","me-1","op-7"],["href","javascript:void(0);",1,"text-fixed-white","fw-semibold","me-1"],[1,"alert","alert-solid-secondary","border","border-secondary","mb-0","p-2"],["href","javascript:void(0);",1,"text-fixed-white","fw-semibold","me-2"],[1,"alert","alert-solid-warning","border","border-warning","mb-0","p-2"],["xmlns","http://www.w3.org/2000/svg","enable-background","new 0 0 24 24","height","1.5rem","viewBox","0 0 24 24","width","1.5rem","fill","#000000",1,"flex-shrink-0","svg-white"],[1,"alert","alert-solid-danger","border","border-danger","mb-0","p-2"],[3,"variant","title"],["linkText","an example link","linkHref","javascript:void(0)",3,"close","variant","title","isDismissible"],["href","javascript:void(0);",1,"alert-link"],[3,"close","variant","title","isDismissible"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close",3,"close"],["role","alert","aria-live","polite",1,"alert","alert-success","alert-dismissible","mb-2"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[3,"close","variant","isDismissible"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close","custom-close",3,"close"],[3,"innerHTML"],[1,"avatar","avatar-sm","me-3","avatar-rounded"],["alt","img",3,"src"],[1,"bi","bi-x",3,"ngClass"],[1,"aletr-heading","mb-0","text-fixed-white"],[1,"my-0"],[1,"p-3"],[1,"mb-0"],["href","javascript:void(0);",1,"fw-medium","text-decoration-underline"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close","text-fixed-white",3,"close"]],template:function(n,t){n&1&&(d(0,"app-page-header",0),i(1,"div",1)(2,"div",2)(3,"app-showcode-card",3),f(4,We,3,3,"div",4,b),s()(),i(6,"div",2)(7,"app-showcode-card",5),f(8,He,6,4,"div",6,b),s()(),i(10,"div",2)(11,"app-showcode-card",7),f(12,$e,4,4,"spk-alerts",8,b),s()(),i(14,"div",2)(15,"app-showcode-card",9),f(16,Fe,5,4,"div",10,b),s()(),i(18,"div",2)(19,"app-showcode-card",11)(20,"ngb-alert",12)(21,"strong"),r(22,"Holy guacamole!"),s(),r(23," You should check in on some of those fields below. "),i(24,"button",13),d(25,"i",14),s()()()(),i(26,"div",2)(27,"app-showcode-card",15)(28,"div",16),G(29,Ge,4,1,"div",17),s(),i(30,"button",18),p("click",function(){return t.showAlert()}),r(31," Show live alert "),s()()(),i(32,"div",2)(33,"app-showcode-card",9),f(34,Pe,5,4,"div",4,b),s()(),i(36,"div",2)(37,"app-showcode-card",9)(38,"div",19),f(39,qe,5,4,"div",10,b),s()()(),i(41,"div",2)(42,"app-showcode-card",3),f(43,Oe,5,4,"div",10,b),s()(),i(45,"div",2)(46,"app-showcode-card",9),f(47,Ne,5,4,"div",6,b),s()(),i(49,"div",2)(50,"app-showcode-card",7),f(51,Qe,4,3,"spk-alerts",20,b),s()(),i(53,"div",2)(54,"app-showcode-card",7),f(55,Ue,4,3,"spk-alerts",20,b),s()(),i(57,"div",2)(58,"app-showcode-card",21),f(59,Ye,5,4,"spk-alerts",20,b),s()(),i(61,"div",2)(62,"app-showcode-card",5),f(63,Je,3,3,"spk-alerts",22,b),s()(),i(65,"div",2)(66,"app-showcode-card",23),f(67,Ke,6,5,"spk-alerts",20,b),s()(),i(69,"div",2)(70,"app-showcode-card",5),f(71,Xe,6,8,"spk-alerts",20,b),s()(),i(73,"div",2)(74,"div",1)(75,"div",24)(76,"div",25),T("ngbCollapseChange",function(m){return S(t.isClosed1,m)||(t.isClosed1=m),m}),i(77,"div",26)(78,"button",27),p("click",function(){return t.Closetoggle("one")}),d(79,"i",14),s(),i(80,"div",28),_(),i(81,"svg",29),d(82,"path",30)(83,"path",31),s(),x(),i(84,"h5"),r(85,"Information?"),s(),i(86,"p",6),r(87," This alert is created to just show the related information. "),s(),i(88,"div",6)(89,"button",32),r(90," Decline "),s(),i(91,"button",33),r(92,"Accept"),s()()()()()(),i(93,"div",24)(94,"div",25),T("ngbCollapseChange",function(m){return S(t.isClosed2,m)||(t.isClosed2=m),m}),i(95,"div",34)(96,"button",27),p("click",function(){return t.Closetoggle("two")}),d(97,"i",14),s(),i(98,"div",35),_(),i(99,"svg",36),d(100,"path",30)(101,"path",37),s(),x(),i(102,"h5"),r(103,"Confirmed"),s(),i(104,"p",6),r(105," This alert is created to just show the confirmation message. "),s(),i(106,"div",6)(107,"button",38),r(108,"Close"),s()()()()()(),i(109,"div",24)(110,"div",25),T("ngbCollapseChange",function(m){return S(t.isClosed3,m)||(t.isClosed3=m),m}),i(111,"div",39)(112,"button",27),p("click",function(){return t.Closetoggle("three")}),d(113,"i",14),s(),i(114,"div",40),_(),i(115,"svg",41),d(116,"path",30)(117,"path",42),s(),x(),i(118,"h5"),r(119,"Warning"),s(),i(120,"p",6),r(121," This alert is created to just show the warning message. "),s(),i(122,"div",6)(123,"button",43),r(124," Back "),s(),i(125,"button",44),r(126,"Continue"),s()()()()()(),i(127,"div",24)(128,"div",25),T("ngbCollapseChange",function(m){return S(t.isClosed4,m)||(t.isClosed4=m),m}),i(129,"div",45)(130,"button",27),p("click",function(){return t.Closetoggle("four")}),d(131,"i",14),s(),i(132,"div",46),_(),i(133,"svg",47),d(134,"path",30)(135,"path",48),s(),x(),i(136,"h5"),r(137,"danger"),s(),i(138,"p",6),r(139," This alert is created to just show the danger message. "),s(),i(140,"div",6)(141,"button",49),r(142,"Delete"),s()()()()()()()(),i(143,"div",2)(144,"app-showcode-card",50)(145,"div",51),f(146,Ze,13,9,"div",52,b),s()()(),i(148,"div",2)(149,"div",1)(150,"div",53)(151,"div",54),T("ngbCollapseChange",function(m){return S(t.isClosed5,m)||(t.isClosed5=m),m}),i(152,"div",55)(153,"div",56)(154,"div",57),_(),i(155,"svg",58),d(156,"path",59)(157,"path",60),s()(),x(),i(158,"div",61)(159,"div",62),r(160," Information Alert"),i(161,"button",63),p("click",function(){return t.Closetoggle("five")}),d(162,"i",14),s()(),i(163,"div",64),r(164," Information alert to show to information "),s(),i(165,"div",65)(166,"a",66),r(167,"cancel"),s(),i(168,"a",67),r(169,"open"),s()()()()()()(),i(170,"div",53)(171,"div",54),T("ngbCollapseChange",function(m){return S(t.isClosed6,m)||(t.isClosed6=m),m}),i(172,"div",68)(173,"div",56)(174,"div",69),_(),i(175,"svg",70),d(176,"path",71)(177,"path",72),s()(),x(),i(178,"div",73)(179,"div",62),r(180," Success Alert"),i(181,"button",63),p("click",function(){return t.Closetoggle("six")}),d(182,"i",14),s()(),i(183,"div",64),r(184," Success alert to show to success message "),s(),i(185,"div",65)(186,"a",74),r(187,"cancel"),s(),i(188,"a",75),r(189,"open"),s()()()()()()(),i(190,"div",53)(191,"div",54),T("ngbCollapseChange",function(m){return S(t.isClosed7,m)||(t.isClosed7=m),m}),i(192,"div",76)(193,"div",56)(194,"div",77),_(),i(195,"svg",78)(196,"g"),d(197,"rect",79),s(),i(198,"g")(199,"g")(200,"g"),d(201,"path",80)(202,"polygon",81)(203,"polygon",82),s()()()()(),x(),i(204,"div",83)(205,"div",62),r(206," Warning Alert"),i(207,"button",63),p("click",function(){return t.Closetoggle("seven")}),d(208,"i",14),s()(),i(209,"div",64),r(210," Warning alert to show warning message "),s(),i(211,"div",65)(212,"a",84),r(213,"cancel"),s(),i(214,"a",85),r(215,"open"),s()()()()()()(),i(216,"div",53)(217,"div",54),T("ngbCollapseChange",function(m){return S(t.isClosed8,m)||(t.isClosed8=m),m}),i(218,"div",86)(219,"div",56)(220,"div",87),_(),i(221,"svg",88)(222,"g"),d(223,"rect",79),s(),i(224,"g")(225,"g")(226,"g"),d(227,"path",89)(228,"rect",90)(229,"rect",91),s()()()()(),x(),i(230,"div",92)(231,"div",62),r(232," Danger Alert"),i(233,"button",63),p("click",function(){return t.Closetoggle("eight")}),d(234,"i",14),s()(),i(235,"div",64),r(236," Danger alert to show the danger message "),s(),i(237,"div",65)(238,"a",93),r(239,"cancel"),s(),i(240,"a",94),r(241,"open"),s()()()()()()()()(),i(242,"div",2)(243,"div",1)(244,"div",53)(245,"div",54),T("ngbCollapseChange",function(m){return S(t.isClosed9,m)||(t.isClosed9=m),m}),i(246,"div",95)(247,"div",56)(248,"div",96),_(),i(249,"svg",97),d(250,"path",59)(251,"path",60),s()(),x(),i(252,"div",98)(253,"div",62),r(254," Information Alert"),i(255,"button",63),p("click",function(){return t.Closetoggle("nine")}),d(256,"i",14),s()(),i(257,"div",64),r(258," Information alert to show to information "),s(),i(259,"div",65)(260,"a",99),r(261,"cancel"),s(),i(262,"a",100),r(263,"open"),s()()()()()()(),i(264,"div",53)(265,"div",54),T("ngbCollapseChange",function(m){return S(t.isClosed10,m)||(t.isClosed10=m),m}),i(266,"div",101)(267,"div",56)(268,"div",96),_(),i(269,"svg",97),d(270,"path",71)(271,"path",72),s()(),x(),i(272,"div",98)(273,"div",62),r(274," Success Alert"),i(275,"button",63),p("click",function(){return t.Closetoggle("ten")}),d(276,"i",14),s()(),i(277,"div",64),r(278," Success alert to show to success message "),s(),i(279,"div",65)(280,"a",102),r(281,"close"),s()()()()()()(),i(282,"div",53)(283,"div",54),T("ngbCollapseChange",function(m){return S(t.isClosed11,m)||(t.isClosed11=m),m}),i(284,"div",103)(285,"div",56)(286,"div",96),_(),i(287,"svg",104)(288,"g"),d(289,"rect",79),s(),i(290,"g")(291,"g")(292,"g"),d(293,"path",80)(294,"polygon",81)(295,"polygon",82),s()()()()(),x(),i(296,"div",98)(297,"div",62),r(298," Warning Alert"),i(299,"button",63),p("click",function(){return t.Closetoggle("eleven")}),d(300,"i",14),s()(),i(301,"div",64),r(302," Warning alert to show to warning message "),s(),i(303,"div",65)(304,"a",99),r(305,"skip"),s(),i(306,"a",100),r(307,"open"),s()()()()()()(),i(308,"div",53)(309,"div",54),T("ngbCollapseChange",function(m){return S(t.isClosed12,m)||(t.isClosed12=m),m}),i(310,"div",105)(311,"div",56)(312,"div",96),_(),i(313,"svg",104)(314,"g"),d(315,"rect",79),s(),i(316,"g")(317,"g")(318,"g"),d(319,"path",89)(320,"rect",90)(321,"rect",91),s()()()()(),x(),i(322,"div",98)(323,"div",62),r(324," Danger Alert"),i(325,"button",63),p("click",function(){return t.Closetoggle("twelve")}),d(326,"i",14),s()(),i(327,"div",64),r(328," Danger alert to show to danger message "),s(),i(329,"div",65)(330,"a",99),r(331,"close"),s(),i(332,"a",100),r(333,"continue"),s()()()()()()()()()()),n&2&&(l(3),c("title","Default alerts")("prism",t.prsimCodeData.alertTS5),l(),y(t.alertData),l(3),c("title","Links in alerts")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS6),l(),y(t.LinkAlerts),l(3),c("title"," Solid Colored Alerts")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS7)("tsCode",t.tsCodeData.alertData1),l(),y(t.solidAlerts),l(3),c("title","Rounded Solid Alerts")("prism",t.prsimCodeData.alertTS16)("tsCode",t.tsCodeData.alertData3),l(),y(t.solidroundedAlerts),l(3),c("classbody","pb-2")("title","Basic Alert")("prism",t.prsimCodeData.alertTS),l(8),c("title","Live example")("prism",t.prsimCodeData.alertTS1)("tsCode",t.tsCodeData.alertData2),l(2),c("ngForOf",t.livealerts),l(4),c("title","Outline Alerts")("prism",t.prsimCodeData.alertTS2)("tsCode",t.tsCodeData.alertData),l(),y(t.outlineAlerts),l(3),c("title","Solid Alerts With Different Shadows")("prism",t.prsimCodeData.alertTS3)("tsCode",t.tsCodeData.alertData5),l(2),y(t.shadowAlert),l(3),c("title","Default Alerts With Different Shadows")("prism",t.prsimCodeData.alertTS4),l(),y(t.DiffshadowAlert),l(3),c("title","Rounded Outline Alerts")("prism",t.prsimCodeData.alertTS8)("tsCode",t.tsCodeData.alertData4),l(),y(t.roundedoutlineAlerts),l(3),c("title","Rounded Default Alerts")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS9)("tsCode",t.tsCodeData.alertData6),l(),y(t.roundeDefaultAlerts),l(3),c("title"," Rounded Alerts With Custom Close Button")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS10)("tsCode",t.tsCodeData.alertData7),l(),y(t.CustomeButtonAlerts),l(3),c("title","  Customized Alerts With SVGs")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS11)("tsCode",t.tsCodeData.alertData8)("classbody",""),l(),y(t.CustomizedButtonAlerts),l(3),c("title","Alerts with icons")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS12),l(),y(t.CustomizedIconAlerts),l(3),c("title","  Alerts With Images")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS13)("classbody","my-2"),l(),y(t.imageAlerts),l(3),c("title","   Alerts With Different size Images")("reuseCode",t.reusableCode.alertreuse)("prism",t.prsimCodeData.alertTS14),l(),y(t.imageSizeAlerts),l(5),k("ngbCollapse",t.isClosed1),l(2),A("aria-expanded",!t.isClosed1),l(16),k("ngbCollapse",t.isClosed2),l(2),A("aria-expanded",!t.isClosed2),l(14),k("ngbCollapse",t.isClosed3),l(2),A("aria-expanded",!t.isClosed3),l(16),k("ngbCollapse",t.isClosed4),l(2),A("aria-expanded",!t.isClosed4),l(14),c("title","Additional content")("prism",t.prsimCodeData.alertTS17),l(2),y(t.additionalInfoAlert),l(5),k("ngbCollapse",t.isClosed5),l(10),A("aria-expanded",!t.isClosed5),l(10),k("ngbCollapse",t.isClosed6),l(10),A("aria-expanded",!t.isClosed6),l(10),k("ngbCollapse",t.isClosed7),l(16),A("aria-expanded",!t.isClosed7),l(10),k("ngbCollapse",t.isClosed8),l(16),A("aria-expanded",!t.isClosed8),l(12),k("ngbCollapse",t.isClosed9),l(10),A("aria-expanded",!t.isClosed9),l(10),k("ngbCollapse",t.isClosed10),l(10),A("aria-expanded",!t.isClosed10),l(8),k("ngbCollapse",t.isClosed11),l(16),A("aria-expanded",!t.isClosed11),l(10),k("ngbCollapse",t.isClosed12),l(16),A("aria-expanded",!t.isClosed12))},dependencies:[te,ee,Z,D,K,ie,se,U,N,Q],encapsulation:2})}return o})();export{_t as AlertsComponent};
