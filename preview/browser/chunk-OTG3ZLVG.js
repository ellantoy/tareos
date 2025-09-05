import{a as $}from"./chunk-CXQQ7CNG.js";import{a as q,b as B}from"./chunk-MYVJRBPS.js";import"./chunk-ZP3QAILQ.js";import"./chunk-KEFF6A6H.js";import{Aa as I,_ as R,ia as L,ta as N}from"./chunk-IWIKM7QT.js";import"./chunk-3SGW3PUB.js";import{Cb as C,Fc as s,Ha as a,Hb as y,Hc as w,Ia as n,Ib as S,Nc as M,Oc as x,Pc as E,Rb as V,Tc as _,Uc as l,Xb as h,gc as f,he as T,qd as p,tc as t,uc as e,vc as v,zc as c}from"./chunk-6HZOIT4N.js";import"./chunk-2EBTC7QX.js";import{f as U}from"./chunk-66YHNWRR.js";var k={};U(k,{model1:()=>F,model10:()=>le,model11:()=>oe,model12:()=>ne,model13:()=>re,model14:()=>de,model15:()=>me,model2:()=>W,model3:()=>O,model4:()=>z,model5:()=>H,model6:()=>Q,model7:()=>J,model8:()=>K,model9:()=>ee,modelts1:()=>P,modelts10:()=>ie,modelts11:()=>ae,modelts12:()=>se,modelts2:()=>D,modelts3:()=>X,modelts4:()=>j,modelts5:()=>G,modelts6:()=>A,modelts7:()=>Y,modelts8:()=>Z,modelts9:()=>te});var F=`<button type="button" class="btn btn-primary" data-bs-toggle="modal" (click)="open(content)"
data-bs-target="#exampleModal">
Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
        <ng-template #content let-c="close" let-d="dismiss">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLabel1">Modal title</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="d('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="c('Closelick')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save
                    changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,P=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
  openBasic(basicModal: any) {
    this.modalService.open(basicModal);
  }
}`,W=`<button type="button" class="btn btn-primary" data-bs-toggle="modal" (click)="open(content1)"
data-bs-target="#staticBackdrop">
Launch static backdrop modal
</button>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
        <ng-template #content1 let-c="close" let-d="dismiss">
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="d('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>I will not close if you click outside me. Don't even try to
                    press
                    escape key.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="c('Closelick')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,D=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
 
  StaticBackdrop(staticbackdropModal: any) {
    this.modalService.open(staticbackdropModal);
  }

}`,O=`<button type="button" class="btn btn-primary" data-bs-toggle="modal"
(click)="openScrollableContent(longContent)" data-bs-target="#exampleModalScrollable">
Scrolling long content
</button>
<div class="modal fade" id="exampleModalScrollable" tabindex="-1" aria-labelledby="exampleModalScrollable"
data-bs-keyboard="false" aria-hidden="true">
<div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
        <ng-template #longContent let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel1">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Libero
                    ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                    nisi
                    ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                    voluptatibus, ipsam quo est rerum modi quos expedita facere,
                    ex
                    tempore fuga similique ipsa blanditiis et accusamus
                    temporibus
                    commodi voluptas! Nobis veniam illo architecto expedita quam
                    ratione quaerat omnis. In, recusandae eos! Pariatur,
                    deleniti
                    quis ad nemo ipsam officia temporibus, doloribus fuga
                    asperiores
                    ratione distinctio velit alias hic modi praesentium aperiam
                    officiis eaque, accusamus aut. Accusantium assumenda,
                    commodi
                    nulla provident asperiores fugit inventore iste amet aut
                    placeat
                    consequatur reprehenderit. Ratione tenetur eligendi, quis
                    aperiam dolores magni iusto distinctio voluptatibus minus a
                    unde
                    at! Consequatur voluptatum in eaque obcaecati, impedit
                    accusantium ea soluta, excepturi, quasi quia commodi
                    blanditiis?
                    Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                    consequuntur quod quo veniam? Labore dignissimos reiciendis
                    accusamus recusandae est consequuntur iure.</p>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save
                    Changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,X=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
  scrollableContent(ScrollingcontentModal: any) {
    this.modalService.open(ScrollingcontentModal, { scrollable: true });
  }


}`,z=`<button type="button" class="btn btn-primary" data-bs-toggle="modal"
(click)="openVerticallyCentered(Content2)" data-bs-target="#exampleModalScrollable2">
Vertically centered modal
</button>
<div class="modal fade" id="exampleModalScrollable2" tabindex="-1" aria-labelledby="exampleModalScrollable2"
data-bs-keyboard="false" aria-hidden="true">
<!-- Scrollable modal -->
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <ng-template #Content2 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel2">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Libero
                    ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                    nisi
                    ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save
                    Changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,j=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
 
  VerticalCenter(VerticalCenterModal: any) {
    this.modalService.open(VerticalCenterModal, { centered: true });
  }

}`,H=`<button type="button" class="btn btn-primary" data-bs-toggle="modal" (click)="VerticallyScrol(Content3)"
data-bs-target="#exampleModalScrollable3">
Vertically centered scrollable modal
</button>
<div class="modal fade" id="exampleModalScrollable3" tabindex="-1" aria-labelledby="exampleModalScrollable3"
data-bs-keyboard="false" aria-hidden="true">
<!-- Scrollable modal -->
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
        <ng-template #Content3 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel3">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                    voluptatibus, ipsam quo est rerum modi quos expedita facere,
                    ex
                    tempore fuga similique ipsa blanditiis et accusamus
                    temporibus
                    commodi voluptas! Nobis veniam illo architecto expedita quam
                    ratione quaerat omnis. In, recusandae eos! Pariatur,
                    deleniti
                    quis ad nemo ipsam officia temporibus, doloribus fuga
                    asperiores
                    ratione distinctio velit alias hic modi praesentium aperiam
                    officiis eaque, accusamus aut. Accusantium assumenda,
                    commodi
                    nulla provident asperiores fugit inventore iste amet aut
                    placeat
                    consequatur reprehenderit. Ratione tenetur eligendi, quis
                    aperiam dolores magni iusto distinctio voluptatibus minus a
                    unde
                    at! Consequatur voluptatum in eaque obcaecati, impedit
                    accusantium ea soluta, excepturi, quasi quia commodi
                    blanditiis?
                    Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                    consequuntur quod quo veniam? Labore dignissimos reiciendis
                    accusamus recusandae est consequuntur iure.</p>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save
                    Changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,G=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
 
  VerticalCenterScroll(VerticalCenterScrollModal: any) {
    this.modalService.open(VerticalCenterScrollModal, { scrollable: true });
  }

}`,Q=`<button type="button" class="btn btn-primary" data-bs-toggle="modal" (click)="Tooltippopover(Content4)"
data-bs-target="#exampleModalScrollable4">
Launch demo modal
</button>
<div class="modal fade" id="exampleModalScrollable4" tabindex="-1" aria-labelledby="exampleModalScrollable4"
data-bs-keyboard="false" aria-hidden="true">
<!-- Scrollable modal -->
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
        <ng-template #Content4 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel4">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h5>Popover in a modal</h5>
                <p>This <a href="javascript:void(0);" role="button" class="btn btn-secondary"
                        data-bs-toggle="popover" popoverTitle="Popover title"
                        ngbPopover="Popover body content is set in this attribute.">button</a>
                    triggers a popover on click.</p>
                <hr>
                <h5>Tooltips in a modal</h5>
                <p><a href="javascript:void(0);" class="text-primary" data-bs-toggle="tooltip"
                        ngbTooltip="Tooltip">This
                        link</a> and <a href="javascript:void(0);" class="text-primary"
                        data-bs-toggle="tooltip" ngbTooltip="Tooltip">that link</a> have tooltips on
                    hover.
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save
                    Changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,A=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
  TooltipPopovers(TooltipPopoversModal: any) {
    this.modalService.open(TooltipPopoversModal, { centered: true });
  }
}`,J=`<button type="button" class="btn btn-primary" data-bs-toggle="modal" (click)="UsingGrid(Content5)"
data-bs-target="#exampleModalScrollable5">
Launch demo modal
</button>
<div class="modal fade" id="exampleModalScrollable5" tabindex="-1" aria-labelledby="exampleModalScrollable5"
data-bs-keyboard="false" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
        <ng-template #Content5 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="staticBackdropLabel5">Modal title
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close">
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4 bg-light border">.col-md-4</div>
                        <div class="col-md-4 ms-auto bg-light border">.col-md-4
                            .ms-auto</div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-3 ms-auto bg-light border">.col-md-3
                            .ms-auto</div>
                        <div class="col-md-2 ms-auto bg-light border">.col-md-2
                            .ms-auto</div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6 ms-auto bg-light border">.col-md-6
                            .ms-auto</div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-9 bg-light border">
                            Level 1: .col-sm-9
                            <div class="row">
                                <div class="col-8 col-sm-6 bg-light border">
                                    Level 2: .col-8 .col-sm-6
                                </div>
                                <div class="col-4 col-sm-6 bg-light border">
                                    Level 2: .col-4 .col-sm-6
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save
                    Changes</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,Y=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
   
  Gridmodal(GridCenterModal: any) {
    this.modalService.open(GridCenterModal, { centered: true });
  }
}`,K=`<a class="btn btn-primary" data-bs-toggle="modal" (click)=" ToggleModals(Content6)" role="button">Open
first modal
</a>
<div class="modal fade" id="exampleModalToggle" aria-labelledby="exampleModalToggleLabel" tabindex="-1"
aria-hidden="true" style="display: none;">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <ng-template #Content6 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalToggleLabel">Modal 1
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Show a second modal and hide this one with the button below.
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" data-bs-target="#exampleModalToggle2"
                    (click)=" ToggleModals2(Content8)" data-bs-toggle="modal">Open second
                    modal</button>
            </div>
        </ng-template>
    </div>
</div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-labelledby="exampleModalToggleLabel2" tabindex="-1"
aria-hidden="true" style="display: none;">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <ng-template #Content8 let-modal>
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalToggleLabel2">Modal 2
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Hide this modal and show the first with the button below.
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" data-bs-target="#exampleModalToggle"
                    (click)=" ToggleModals(Content6)" data-bs-toggle="modal">Back to first</button>
            </div>
        </ng-template>
    </div>
</div>
</div>`,Z=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
   
  private firstModalRef: any;
  private secondModalRef: any;

   openFirstModal(content1: any) {
  // Close the second modal if it's open
  if (this.secondModalRef) {
    this.secondModalRef.close();
  }

  // Open the first modal
  const modalRef = this.modalService.open(content1, this.modalOptions);
  this.firstModalRef = modalRef;

  modalRef.result.then((result: any) => {
    // Handle modal close event if needed
  }).catch((reason: any) => {
    // Handle modal dismiss event if needed
  });
}

openSecondModal(content1: any, content2: any) {
  // Close the first modal if it's open
  if (this.firstModalRef) {
    this.firstModalRef.close();
  }

  const modalRef = this.modalService.open(content2, this.modalOptions);
  this.secondModalRef = modalRef;

  modalRef.result.then((result: any) => {
    // Handle modal close event if needed
  }).catch((reason: any) => {
    // Handle modal dismiss event if needed
  });
}
}`,ee=`      <a
(click)="openXl(XlContentModal)"
type="button"
class="btn btn-primary m-1"
data-bs-toggle="modal"
data-bs-target="#exampleModalXl"
>
Extra large modal
</a>
<a
(click)="openLg(LargeModal)"
type="button"
class="btn btn-secondary m-1"
data-bs-toggle="modal"
data-bs-target="#exampleModalLg"
>
Large modal
</a>
<a
(click)="openSm(SmallModal)"
type="button"
class="btn btn-warning m-1"
data-bs-toggle="modal"
data-bs-target="#exampleModalSm"
>
Small modal
</a>
<ng-template #XlContentModal let-modal>
<div class="modal-header">
  <h6 class="modal-title" id="exampleModalXlLabel">
    Extra large modal
  </h6>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    (click)="modal.dismiss('Cross click')"
    aria-label="Close"
  ></button>
</div>
<div class="modal-body">...</div>
</ng-template>
<ng-template #LargeModal let-modal>
<div class="modal-header">
  <h6 class="modal-title" id="exampleModalLgLabel">Large modal</h6>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    (click)="modal.dismiss('Cross click')"
    aria-label="Close"
  ></button>
</div>
<div class="modal-body">...</div>
</ng-template>
<ng-template #SmallModal let-modal>
<div class="modal-header">
  <h6 class="modal-title" id="exampleModalSmLabel">Small modal</h6>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    (click)="modal.dismiss('Cross click')"
    aria-label="Close"
  ></button>
</div>
<div class="modal-body">...</div>
</ng-template>`,te=`mport { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
  openSm(SmallModal: any) {
    this.modalService.open(SmallModal, { size: 'sm' });
  }
  openXl(XlContentModal: any) {
    this.modalService.open(XlContentModal, { size: 'xl' });
  }
  openLg(LargeModal: any) {
    this.modalService.open(LargeModal, { size: 'lg' });
  }
}`,le=`  <div class="bd-example">
<a type="button" class="btn btn-primary mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreen"  (click)="openFullscreen(FullscreenModal)">Full screen</a>
<a type="button" class="btn btn-secondary mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreenSm" (click)="BelowSm(BelowSmModal)">Full screen below
    sm</a>
<a type="button" class="btn btn-warning mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreenMd"  (click)="BelowMd(BelowMdModal)">Full screen below
    md</a>
<a type="button" class="btn btn-info mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreenLg"  (click)="BelowLg(BelowLgModal)">Full screen below
    lg</a>
<a type="button" class="btn btn-success mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreenXl" (click)="BelowXl(BelowXlModal)">Full screen below
    xl</a>
<a type="button" class="btn btn-danger mb-1 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreenXxl" (click)="BelowXxl(BelowXxlModal)">Full screen below
    xxl</a>
</div>
<ng-template #FullscreenModal let-modal>
<div class="modal-header">
<h6 class="modal-title" id="exampleModalFullscreenLabel">
  Full screen modal
</h6>
<button
  type="button"
  class="btn-close"
  data-bs-dismiss="modal"
  (click)="modal.dismiss('Cross click')"
  aria-label="Close"
></button>
</div>
<div class="modal-body">...</div>
<div class="modal-footer">
<button
  type="button"
  class="btn btn-secondary"
  data-bs-dismiss="modal"
  (click)="modal.close('Save click')"
>
  Close
</button>
</div>
</ng-template>
<ng-template #BelowSmModal let-modal>
<div class="modal-header">
<h6 class="modal-title" id="exampleModalFullscreenSmLabel">
  Full screen below sm
</h6>
<button
  type="button"
  class="btn-close"
  data-bs-dismiss="modal"
  aria-label="Close"
  (click)="modal.dismiss('Cross click')"
></button>
</div>
<div class="modal-body">...</div>
<div class="modal-footer">
<button
  type="button"
  class="btn btn-secondary"
  data-bs-dismiss="modal"
  (click)="modal.close('Save click')"
>
  Close
</button>
</div>
</ng-template>
<ng-template #BelowMdModal let-modal>
<div class="modal-header">
<h6 class="modal-title" id="exampleModalFullscreenMdLabel">
  Full screen below md
</h6>
<button
  (click)="modal.dismiss('Cross click')"
  type="button"
  class="btn-close"
  data-bs-dismiss="modal"
  aria-label="Close"
></button>
</div>
<div class="modal-body">...</div>
<div class="modal-footer">
<button
  type="button"
  class="btn btn-secondary"
  data-bs-dismiss="modal"
  (click)="modal.close('Save click')"
>
  Close
</button>
</div>
</ng-template>
<ng-template #BelowLgModal let-modal>
<div class="modal-header">
<h6 class="modal-title" id="exampleModalFullscreenLgLabel">
  Full screen below lg
</h6>
<button
  (click)="modal.dismiss('Cross click')"
  type="button"
  class="btn-close"
  data-bs-dismiss="modal"
  aria-label="Close"
></button>
</div>
<div class="modal-body">...</div>
<div class="modal-footer">
<button
  type="button"
  (click)="modal.close('Save click')"
  class="btn btn-secondary"
  data-bs-dismiss="modal"
>
  Close
</button>
</div>
</ng-template>
<ng-template #BelowXlModal let-modal>
<div class="modal-header">
<h6 class="modal-title" id="exampleModalFullscreenXlLabel">
  Full screen below xl
</h6>
<button
  (click)="modal.dismiss('Cross click')"
  type="button"
  class="btn-close"
  data-bs-dismiss="modal"
  aria-label="Close"
></button>
</div>
<div class="modal-body">...</div>
<div class="modal-footer">
<button
  type="button"
  (click)="modal.close('Save click')"
  class="btn btn-secondary"
  data-bs-dismiss="modal"
>
  Close
</button>
</div>
</ng-template>
<ng-template #BelowXxlModal let-modal>
<div class="modal-header">
<h6 class="modal-title" id="exampleModalFullscreenXxlLabel">
  Full screen below xxl
</h6>
<button
  (click)="modal.dismiss('Cross click')"
  type="button"
  class="btn-close"
  data-bs-dismiss="modal"
  aria-label="Close"
></button>
</div>
<div class="modal-body">...</div>
<div class="modal-footer">
<button
  type="button"
  (click)="modal.close('Save click')"
  class="btn btn-secondary"
  data-bs-dismiss="modal"
>
  Close
</button>
</div>
</ng-template>`,ie=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
   
  openFullscreen(FullscreenModal: any) {
    this.modalService.open(FullscreenModal, { fullscreen: true });
  }
  BelowSm(BelowSmModal: any) {
    this.modalService.open(BelowSmModal);
  }
  BelowMd(BelowMdModal: any) {
    this.modalService.open(BelowMdModal);
  }
  BelowLg(BelowLgModal: any) {
    this.modalService.open(BelowLgModal);
  }
  BelowXl(BelowXlModal: any) {
    this.modalService.open(BelowXlModal);
  }
  BelowXxl(BelowXxlModal: any) {
    this.modalService.open(BelowXxlModal);
  }
}`,oe=`<button type="button" class="btn btn-primary mb-1 me-1" data-bs-toggle="modal" (click)="openMdo(Content17)"
data-bs-target="#formmodal" data-bs-whatever="@mdo">Open modal for
mdo</button>
<button type="button" class="btn btn-secondary mb-1 me-1" data-bs-toggle="modal"
(click)="openFat(Content18)" data-bs-target="#formmodal" data-bs-whatever="@fat">Open modal for
fat</button>
<button type="button" class="btn btn-light mb-1 me-1" data-bs-toggle="modal"
(click)="opengetbootstrap(Content19)" data-bs-target="#formmodal" data-bs-whatever="@getbootstrap">Open
modal for
getbootstrap</button>
<div class="modal fade" id="formmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <ng-template #Content17 let-modal>
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLabel">New message to mdo</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                        <input type="text" class="form-control" id="recipient-name" value="@mdo">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Send
                    message</button>
            </div>
        </div>
    </ng-template>
</div>
</div>
<div class="modal fade" id="formmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <ng-template #Content18 let-modal>
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLabel">New message to &#64;fat</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                        <input type="text" class="form-control" id="recipient-name" value="@fat">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Send
                    message</button>
            </div>
        </div>
    </ng-template>
</div>
</div>
<div class="modal fade" id="formmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <ng-template #Content19 let-modal>
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLabel">New message to &#64;getbootstrap</h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                        <input type="text" class="form-control" id="recipient-name"
                            value="@getbootstrap">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" (click)="modal.close('Close click')"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Send
                    message</button>
            </div>
        </div>
    </ng-template>
</div>
</div>`,ae=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
  Openmdo(OpenmdoModal: any) {
    this.modalService.open(OpenmdoModal);
  }
  Openfat(OpenfatModal: any) {
    this.modalService.open(OpenfatModal);
  }
  Opengetbootstrap(OpengetbootstrapModal: any) {
    this.modalService.open(OpengetbootstrapModal);
  }

 
}`,ne=`<div class="row ">
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-scale"
        data-bs-toggle="modal" (click)="openScale(scale)">Scale</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-slide-in-right"
        data-bs-toggle="modal" (click)="openSlideRight(right)">Slide In Right</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-slide-in-bottom"
        data-bs-toggle="modal" (click)="openSlideBottom(bottom)">Slide In Bottom</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-newspaper"
        data-bs-toggle="modal" (click)="openNewspaper(newspaper)">News paper</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-fall"
        data-bs-toggle="modal" (click)="openFall(fall)">Fall</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-flip-horizontal"
        data-bs-toggle="modal" (click)="openFlipHorizontal(flip)">Flip Horizontal</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-flip-vertical"
        data-bs-toggle="modal" (click)="openFlipVertical(flipV)">Flip Vertical</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-super-scaled"
        data-bs-toggle="modal" (click)="openSuperScaled(super)">Super Scaled</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-sign"
        data-bs-toggle="modal" (click)="openSign(sign)">Sign</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-rotate-bottom"
        data-bs-toggle="modal" (click)="openRotateBottom(bottom)">Rotate Bottom</a>
</div>
<div class="col-sm-6 col-md-4 col-xl-3">
    <a class="modal-effect btn btn-primary d-grid mb-3" data-bs-effect="effect-rotate-left"
        data-bs-toggle="modal" (click)="openRotateLeft(left)">Rotate Left</a>
</div>
</div>
<div class="modal fade" id="modaldemo8">
<div class="modal-dialog modal-dialog-centered text-center" role="document">
    <div class="modal-content modal-content-demo">
        <ng-template #scale let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #right let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #bottom let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #newspaper let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #fall let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #flip let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #flipV let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #super let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #sign let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
    <div class="modal-content modal-content-demo">
        <ng-template #left let-modal>
            <div class="modal-header">
                <h6 class="modal-title">Message Preview</h6><button aria-label="Close" class="btn-close"
                    data-bs-dismiss="modal" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body text-start">
                <h6>Why We Use Electoral College, Not Popular Vote</h6>
                <p class="text-muted mb-0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable
                    English.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save changes</button>
                <button class="btn btn-light" data-bs-dismiss="modal"
                    (click)="modal.close('Close click')">Close</button>
            </div>
        </ng-template>
    </div>
</div>

</div>`,se=`import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models';
import * as tsCodedata from '../../../shared/prismData/advancedUi/models';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}
   
  openScale(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__zoomIn',
    });
  }

  openSlideRight(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__slideInRight',
    });
  }

  openSlideBottom(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__backInUp',
    });
  }
  openNewspaper(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__rotateIn',
    });
  }
  openFall(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'effect-fall',
    });
  }
  openFlipHorizontal(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__flipInY',
    });
  }
  openFlipVertical(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__flipInX',
    });
  }
  openSuperScaled(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__zoomIn',
    });
  }
  openSign(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__flipInX',
    });
  }
  openRotateBottom(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__slideInUp',
    });
  }
  openRotateLeft(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__slideInLeft',
    });
  }

  openJustMe(justme: any) {
    this.modalService.open(justme, {
      centered: true,
      windowClass: 'dark-modal',
    });
  }

  openright(right: any) {
    this.modalService.open(right, { centered: true });
  }

 
}`,re=' <button type="button" class="btn-close" aria-label="Close"></button>',de='<button type="button" class="btn-close" disabled aria-label="Close"></button>',me=` <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-white" disabled aria-label="Close"></button>

//card-body class = "bg-black"`;var ce=["modal1"],pe=["modal2"];function ue(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",95),l(2,"Modal title"),e(),t(3,"a",96),s("click",function(){let i=a(o).dismiss;return n(i("Cross click"))}),e()(),t(4,"div",97),l(5," ... "),e(),t(6,"div",98)(7,"a",99),s("click",function(){let i=a(o).close;return n(i("Closelick"))}),l(8,"Close"),e(),t(9,"a",100),l(10,"Save changes"),e()()}}function be(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",101),l(2,"Modal title "),e(),t(3,"a",96),s("click",function(){let i=a(o).dismiss;return n(i("Cross click"))}),e()(),t(4,"div",97)(5,"p"),l(6,"I will not close if you click outside me. Don't even try to press escape key."),e()(),t(7,"div",98)(8,"a",99),s("click",function(){let i=a(o).close;return n(i("Closelick"))}),l(9,"Close"),e(),t(10,"a",100),l(11,"Understood"),e()()}}function _e(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",101),l(2,"Modal title"),e(),t(3,"a",96),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97)(5,"p"),l(6," I will not close if you click outside me. Don't even try to press escape key. "),e()(),t(7,"div",98)(8,"a",99),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(9," Close "),e(),t(10,"a",100),l(11," Understood "),e()()}}function ge(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",102),l(2,"Modal title"),e(),t(3,"a",96),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97)(5,"p"),l(6," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsum quasi, error quibusdam debitis maiores hic eum? Vitae nisi ipsa maiores fugiat deleniti quis reiciendis veritatis. "),e(),t(7,"p"),l(8," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea voluptatibus, ipsam quo est rerum modi quos expedita facere, ex tempore fuga similique ipsa blanditiis et accusamus temporibus commodi voluptas! Nobis veniam illo architecto expedita quam ratione quaerat omnis. In, recusandae eos! Pariatur, deleniti quis ad nemo ipsam officia temporibus, doloribus fuga asperiores ratione distinctio velit alias hic modi praesentium aperiam officiis eaque, accusamus aut. Accusantium assumenda, commodi nulla provident asperiores fugit inventore iste amet aut placeat consequatur reprehenderit. Ratione tenetur eligendi, quis aperiam dolores magni iusto distinctio voluptatibus minus a unde at! Consequatur voluptatum in eaque obcaecati, impedit accusantium ea soluta, excepturi, quasi quia commodi blanditiis? Qui blanditiis iusto corrupti necessitatibus dolorem fugiat consequuntur quod quo veniam? Labore dignissimos reiciendis accusamus recusandae est consequuntur iure. "),e(),v(9,"br")(10,"br")(11,"br")(12,"br")(13,"br")(14,"br")(15,"br")(16,"br")(17,"br")(18,"br")(19,"br")(20,"br")(21,"br")(22,"br")(23,"br")(24,"br")(25,"br")(26,"br")(27,"br")(28,"br")(29,"br")(30,"br")(31,"br")(32,"br")(33,"br")(34,"br"),t(35,"p"),l(36,"Lorem ipsum dolor sit amet."),e()(),t(37,"div",98)(38,"a",99),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(39," Close "),e(),t(40,"a",100),l(41," Save Changes "),e()()}}function he(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",103),l(2,"Modal title"),e(),t(3,"a",96),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97)(5,"h5"),l(6,"Popover in a modal"),e(),t(7,"p"),l(8," This "),t(9,"a",104),l(10,"button"),e(),l(11," triggers a popover on click. "),e(),v(12,"hr"),t(13,"h5"),l(14,"Tooltips in a modal"),e(),t(15,"p")(16,"a",105),l(17,"This link"),e(),l(18," and "),t(19,"a",105),l(20,"that link"),e(),l(21," have tooltips on hover. "),e()(),t(22,"div",98)(23,"a",99),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(24," Close "),e(),t(25,"button",100),l(26," Save Changes "),e()()}}function Ce(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",106),l(2,"Modal title"),e(),t(3,"a",96),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97)(5,"p"),l(6," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea voluptatibus, ipsam quo est rerum modi quos expedita facere, ex tempore fuga similique ipsa blanditiis et accusamus temporibus commodi voluptas! Nobis veniam illo architecto expedita quam ratione quaerat omnis. In, recusandae eos! Pariatur, deleniti quis ad nemo ipsam officia temporibus, doloribus fuga asperiores ratione distinctio velit alias hic modi praesentium aperiam officiis eaque, accusamus aut. Accusantium assumenda, commodi nulla provident asperiores fugit inventore iste amet aut placeat consequatur reprehenderit. Ratione tenetur eligendi, quis aperiam dolores magni iusto distinctio voluptatibus minus a unde at! Consequatur voluptatum in eaque obcaecati, impedit accusantium ea soluta, excepturi, quasi quia commodi blanditiis? Qui blanditiis iusto corrupti necessitatibus dolorem fugiat consequuntur quod quo veniam? Labore dignissimos reiciendis accusamus recusandae est consequuntur iure. "),e(),v(7,"br")(8,"br")(9,"br")(10,"br")(11,"br")(12,"br")(13,"br")(14,"br")(15,"br")(16,"br")(17,"br"),t(18,"p"),l(19,"Lorem ipsum dolor sit amet."),e()(),t(20,"div",98)(21,"a",99),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(22," Close "),e(),t(23,"a",100),l(24," Save Changes "),e()()}}function fe(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",109),l(2,"Modal 2 "),e(),t(3,"a",96),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97),l(5," Hide this modal and show the first with the button below. "),e(),t(6,"div",98)(7,"button",110),s("click",function(){a(o);let i=w(2),b=_(45);return n(i.openFirstModal(b))}),l(8,"Back to first"),e()()}}function ve(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",107),l(2,"Modal 1 "),e(),t(3,"a",96),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97),l(5," Show a second modal and hide this one with the button below. "),e(),t(6,"div",98)(7,"button",108),s("click",function(){a(o);let i=_(10),b=w();return n(b.openSecondModal(i))}),l(8,"Open second modal"),e(),h(9,fe,9,0,"ng-template",null,40,p),e()}}function ke(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Modal 2"),e(),t(3,"a",112),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97),l(5," Hide this modal and show the first with the button below. "),e(),t(6,"div",98)(7,"button",113),s("click",function(){a(o);let i=w(),b=_(19);return n(i.openFirstModal(b))}),l(8," Back to first "),e()()}}function we(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",114),l(2,"Modal title"),e(),t(3,"a",96),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97)(5,"div",115)(6,"div",42)(7,"div",116),l(8,".col-md-4"),e(),t(9,"div",117),l(10," .col-md-4 .ms-auto "),e()(),t(11,"div",118)(12,"div",119),l(13," .col-md-3 .ms-auto "),e(),t(14,"div",120),l(15," .col-md-2 .ms-auto "),e()(),t(16,"div",118)(17,"div",121),l(18," .col-md-6 .ms-auto "),e()(),t(19,"div",118)(20,"div",122),l(21," Level 1: .col-sm-9 "),t(22,"div",42)(23,"div",123),l(24," Level 2: .col-8 .col-sm-6 "),e(),t(25,"div",124),l(26," Level 2: .col-4 .col-sm-6 "),e()()()()()(),t(27,"div",98)(28,"a",99),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(29," Close "),e(),t(30,"a",100),l(31," Save Changes "),e()()}}function Se(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",125),l(2,"Modal title"),e(),t(3,"a",96),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97)(5,"p"),l(6," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsum quasi, error quibusdam debitis maiores hic eum? Vitae nisi ipsa maiores fugiat deleniti quis reiciendis veritatis. "),e()(),t(7,"div",98)(8,"a",99),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(9," Close "),e(),t(10,"button",100),l(11," Save Changes "),e()()}}function Me(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",126),l(2," Full screen modal "),e(),t(3,"a",96),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97),l(5,"..."),e(),t(6,"div",98)(7,"a",99),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(8," Close "),e()()}}function xe(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",127),l(2," Full screen below sm "),e(),t(3,"a",96),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97),l(5,"..."),e(),t(6,"div",98)(7,"a",99),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(8," Close "),e()()}}function Ee(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",128),l(2," Full screen below md "),e(),t(3,"a",96),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97),l(5,"..."),e(),t(6,"div",98)(7,"a",99),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(8," Close "),e()()}}function ye(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",129),l(2," Full screen below lg "),e(),t(3,"a",96),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97),l(5,"..."),e(),t(6,"div",98)(7,"a",99),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(8," Close "),e()()}}function Ve(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",130),l(2," Full screen below xl "),e(),t(3,"a",96),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97),l(5,"..."),e(),t(6,"div",98)(7,"a",99),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(8," Close "),e()()}}function Te(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",131),l(2," Full screen below xxl "),e(),t(3,"a",96),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97),l(5,"..."),e(),t(6,"div",98)(7,"a",99),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(8," Close "),e()()}}function Re(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",132),l(2," Extra large modal "),e(),t(3,"a",96),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97),l(5,"..."),e()}}function Le(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",133),l(2,"Large modal"),e(),t(3,"a",96),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97),l(5,"..."),e()}}function Ne(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",134),l(2,"Small modal"),e(),t(3,"a",96),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97),l(5,"..."),e()}}function Ie(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Message Preview"),e(),t(3,"a",135),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",136)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",137),l(8,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."),e()(),t(9,"div",98)(10,"button",138),l(11,"Save changes"),e(),t(12,"a",139),s("click",function(){let i=a(o).$implicit;return n(i.close("Close click"))}),l(13,"Close"),e()()}}function qe(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Message Preview"),e(),t(3,"a",135),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",136)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",137),l(8,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."),e()(),t(9,"div",98)(10,"button",138),l(11,"Save changes"),e(),t(12,"a",139),s("click",function(){let i=a(o).$implicit;return n(i.close("Close click"))}),l(13,"Close"),e()()}}function Be(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Message Preview"),e(),t(3,"a",135),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",136)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",137),l(8,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."),e()(),t(9,"div",98)(10,"button",138),l(11,"Save changes"),e(),t(12,"a",139),s("click",function(){let i=a(o).$implicit;return n(i.close("Close click"))}),l(13,"Close"),e()()}}function $e(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Message Preview"),e(),t(3,"a",135),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",136)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",137),l(8,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."),e()(),t(9,"div",98)(10,"button",138),l(11,"Save changes"),e(),t(12,"a",139),s("click",function(){let i=a(o).$implicit;return n(i.close("Close click"))}),l(13,"Close"),e()()}}function Ue(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Message Preview"),e(),t(3,"a",135),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",136)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",137),l(8,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."),e()(),t(9,"div",98)(10,"button",138),l(11,"Save changes"),e(),t(12,"a",139),s("click",function(){let i=a(o).$implicit;return n(i.close("Close click"))}),l(13,"Close"),e()()}}function Fe(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Message Preview"),e(),t(3,"a",135),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",136)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",137),l(8,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."),e()(),t(9,"div",98)(10,"button",138),l(11,"Save changes"),e(),t(12,"a",139),s("click",function(){let i=a(o).$implicit;return n(i.close("Close click"))}),l(13,"Close"),e()()}}function Pe(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Message Preview"),e(),t(3,"a",135),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",136)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",137),l(8,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."),e()(),t(9,"div",98)(10,"button",138),l(11,"Save changes"),e(),t(12,"a",139),s("click",function(){let i=a(o).$implicit;return n(i.close("Close click"))}),l(13,"Close"),e()()}}function We(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Message Preview"),e(),t(3,"a",135),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",136)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",137),l(8,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."),e()(),t(9,"div",98)(10,"button",138),l(11,"Save changes"),e(),t(12,"a",139),s("click",function(){let i=a(o).$implicit;return n(i.close("Close click"))}),l(13,"Close"),e()()}}function De(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Message Preview"),e(),t(3,"a",135),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",136)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",137),l(8,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."),e()(),t(9,"div",98)(10,"button",138),l(11,"Save changes"),e(),t(12,"a",139),s("click",function(){let i=a(o).$implicit;return n(i.close("Close click"))}),l(13,"Close"),e()()}}function Oe(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Message Preview"),e(),t(3,"a",135),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",136)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p",137),l(8,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."),e()(),t(9,"div",98)(10,"button",138),l(11,"Save changes"),e(),t(12,"a",139),s("click",function(){let i=a(o).$implicit;return n(i.close("Close click"))}),l(13,"Close"),e()()}}function Xe(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",140),l(2," New Message to @mdo "),e(),t(3,"a",96),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97)(5,"form")(6,"div",68)(7,"label",141),l(8,"Recipient:"),e(),v(9,"input",142),e(),t(10,"div",68)(11,"label",143),l(12,"Message:"),e(),v(13,"textarea",144),e()()(),t(14,"div",98)(15,"a",99),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(16," Close "),e(),t(17,"button",100),l(18," Send message "),e()()}}function ze(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",140),l(2," New Message to @fat "),e(),t(3,"button",96),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97)(5,"form")(6,"div",68)(7,"label",141),l(8,"Recipient:"),e(),v(9,"input",145),e(),t(10,"div",68)(11,"label",143),l(12,"Message:"),e(),v(13,"textarea",144),e()()(),t(14,"div",98)(15,"a",99),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(16," Close "),e(),t(17,"button",100),l(18," Send message "),e()()}}function je(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",140),l(2," New Message to @getbootstrap "),e(),t(3,"a",96),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97)(5,"form")(6,"div",68)(7,"label",141),l(8,"Recipient:"),e(),v(9,"input",146),e(),t(10,"div",68)(11,"label",143),l(12,"Message:"),e(),v(13,"textarea",144),e()()(),t(14,"div",98)(15,"a",99),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(16," Close "),e(),t(17,"button",100),l(18," Send message "),e()()}}function He(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Message Preview"),e(),t(3,"a",147),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",98)(10,"button",148),l(11,"Save changes"),e(),t(12,"a",149),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(13," Close "),e()()}}function Ge(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Message Preview"),e(),t(3,"a",147),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",98)(10,"button",148),l(11,"Save changes"),e(),t(12,"a",149),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(13," Close "),e()()}}function Qe(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Message Preview"),e(),t(3,"a",147),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",98)(10,"button",148),l(11,"Save changes"),e(),t(12,"a",149),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(13," Close "),e()()}}function Ae(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Message Preview"),e(),t(3,"a",147),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",98)(10,"button",148),l(11,"Save changes"),e(),t(12,"a",149),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(13," Close "),e()()}}function Je(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Message Preview"),e(),t(3,"a",147),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",98)(10,"button",148),l(11,"Save changes"),e(),t(12,"a",149),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(13," Close "),e()()}}function Ye(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Message Preview"),e(),t(3,"a",147),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",98)(10,"button",148),l(11,"Save changes"),e(),t(12,"a",149),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(13," Close "),e()()}}function Ke(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Message Preview"),e(),t(3,"a",147),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",98)(10,"button",148),l(11,"Save changes"),e(),t(12,"a",149),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(13," Close "),e()()}}function Ze(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Message Preview"),e(),t(3,"a",147),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",98)(10,"button",148),l(11,"Save changes"),e(),t(12,"a",149),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(13," Close "),e()()}}function et(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Message Preview"),e(),t(3,"a",147),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",98)(10,"button",148),l(11,"Save changes"),e(),t(12,"a",149),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(13," Close "),e()()}}function tt(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Message Preview"),e(),t(3,"a",147),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",98)(10,"button",148),l(11,"Save changes"),e(),t(12,"a",149),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(13," Close "),e()()}}function lt(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",150),l(2,"Message Preview"),e(),t(3,"a",147),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),e()(),t(4,"div",97)(5,"h6"),l(6,"Why We Use Electoral College, Not Popular Vote"),e(),t(7,"p"),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",98)(10,"button",148),l(11,"Save changes"),e(),t(12,"a",149),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(13," Close "),e()()}}function it(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Small Modal"),e(),t(3,"a",151),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),t(4,"span",152),l(5,"\xD7"),e()()(),t(6,"div",97)(7,"p"),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",153)(10,"button",148),l(11,"Save changes"),e(),t(12,"a",149),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(13," Close "),e()()}}function ot(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Large Modal"),e(),t(3,"a",151),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),t(4,"span",152),l(5,"\xD7"),e()()(),t(6,"div",97)(7,"p"),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(9,"div",98)(10,"button",148),l(11,"Save changes"),e(),t(12,"a",149),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(13," Close "),e()()}}function at(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Grid Modal"),e(),t(3,"a",151),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),t(4,"span",152),l(5,"\xD7"),e()()(),t(6,"div",97)(7,"div",42)(8,"div",154)(9,"p"),l(10," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "),e()(),t(11,"div",154)(12,"p"),l(13," But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the who loves toil and pain can procureor sit aspernatur system. "),e()()(),t(14,"div",42)(15,"div",154)(16,"p"),l(17," expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure desires to obtain pain. "),e()(),t(18,"div",154)(19,"p"),l(20," Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat aut odit voluptatem. "),e()()()(),t(21,"div",98)(22,"button",148),l(23,"Save changes"),e(),t(24,"a",149),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(25," Close "),e()()}}function nt(d,u){if(d&1){let o=c();t(0,"div",155)(1,"a",151),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),t(2,"span",152),l(3,"\xD7"),e()(),v(4,"i",156),t(5,"h4",157),l(6,"Congratulations!"),e(),t(7,"p",158),l(8," There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. "),e(),t(9,"a",159),s("click",function(){let i=a(o).$implicit;return n(i.close("Close click"))}),l(10," Continue "),e()()}}function st(d,u){if(d&1){let o=c();t(0,"div",155)(1,"a",151),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),t(2,"span",152),l(3,"\xD7"),e()(),v(4,"i",160),t(5,"h4",161),l(6,"Error: Cannot process your entry!"),e(),t(7,"p",158),l(8," There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. "),e(),t(9,"a",162),s("click",function(){let i=a(o).$implicit;return n(i.close("Close click"))}),l(10," Continue "),e()()}}function rt(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Select2 Modal"),e(),t(3,"a",151),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),t(4,"span",152),l(5,"\xD7"),e()()(),t(6,"div",97)(7,"h6"),l(8,"Why We Use Electoral College, Not Popular Vote"),e(),t(9,"p",163),l(10," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e()(),t(11,"div",98)(12,"button",148),l(13,"Save changes"),e(),t(14,"a",149),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(15," Close "),e()()}}function dt(d,u){if(d&1){let o=c();t(0,"div",94)(1,"h6",111),l(2,"Scroll Modal"),e(),t(3,"a",151),s("click",function(){let i=a(o).$implicit;return n(i.dismiss("Cross click"))}),t(4,"span",152),l(5,"\xD7"),e()()(),t(6,"div",97)(7,"p"),l(8," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "),e(),t(9,"p"),l(10," But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. "),e(),t(11,"p"),l(12," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. "),e(),t(13,"p"),l(14," On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. "),e(),t(15,"p"),l(16," These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. "),e()(),t(17,"div",98)(18,"button",148),l(19,"Save changes"),e(),t(20,"a",149),s("click",function(){let i=a(o).$implicit;return n(i.close("Save click"))}),l(21," Close "),e()()}}var ht=(()=>{class d{modalService;renderer;prismCode=k;tsCodedata=k;modal1;modal2;constructor(o,r){this.modalService=o,this.renderer=r}openBasic(o){this.modalService.open(o)}ngOnInit(){}openScale(o){this.modalService.open(o,{centered:!0,windowClass:"animate__animated animate__zoomIn"})}openSlideRight(o){this.modalService.open(o,{centered:!0,windowClass:"animate__animated animate__slideInRight"})}openSlideBottom(o){this.modalService.open(o,{centered:!0,windowClass:"animate__animated animate__backInUp"})}openNewspaper(o){this.modalService.open(o,{centered:!0,windowClass:"animate__animated animate__rotateIn"})}openFall(o){this.modalService.open(o,{centered:!0,windowClass:"effect-fall"})}openFlipHorizontal(o){this.modalService.open(o,{centered:!0,windowClass:"animate__animated animate__flipInY"})}openFlipVertical(o){this.modalService.open(o,{centered:!0,windowClass:"animate__animated animate__flipInX"})}openSuperScaled(o){this.modalService.open(o,{centered:!0,windowClass:"animate__animated animate__zoomIn"})}openSign(o){this.modalService.open(o,{centered:!0,windowClass:"animate__animated animate__flipInX"})}openRotateBottom(o){this.modalService.open(o,{centered:!0,windowClass:"animate__animated animate__slideInUp"})}openRotateLeft(o){this.modalService.open(o,{centered:!0,windowClass:"animate__animated animate__slideInLeft"})}openJustMe(o){this.modalService.open(o,{centered:!0,windowClass:"dark-modal"})}openright(o){this.modalService.open(o,{centered:!0})}StaticBackdrop(o){this.modalService.open(o)}VerticalCenter(o){this.modalService.open(o,{centered:!0})}GridOpen(o){this.modalService.open(o,{size:"lg"})}SuccessOpen(o){this.modalService.open(o,{centered:!0})}WarningOpen(o){this.modalService.open(o,{centered:!0})}Select2Open(o){this.modalService.open(o,{size:"sm"})}openScrollable(o){this.modalService.open(o,{scrollable:!0})}scrollableContent(o){this.modalService.open(o,{scrollable:!0})}VerticalCenterScroll(o){this.modalService.open(o,{scrollable:!0})}TooltipPopovers(o){this.modalService.open(o,{centered:!0})}Gridmodal(o){this.modalService.open(o,{centered:!0})}togglemodal(o){this.modalService.open(o,{centered:!0})}togglemodal2(o){this.modalService.open(o,{centered:!0})}openSm(o){this.modalService.open(o,{size:"sm"})}openXl(o){this.modalService.open(o,{size:"xl"})}openLg(o){this.modalService.open(o,{size:"lg"})}openFullscreen(o){this.modalService.open(o,{fullscreen:!0})}BelowSm(o){this.modalService.open(o)}BelowMd(o){this.modalService.open(o)}BelowLg(o){this.modalService.open(o)}BelowXl(o){this.modalService.open(o)}BelowXxl(o){this.modalService.open(o)}Openmdo(o){this.modalService.open(o)}Openfat(o){this.modalService.open(o)}Opengetbootstrap(o){this.modalService.open(o)}modalOptions={centered:!0};ToggleModals2(o){this.firstModalRef&&this.firstModalRef.dismiss(),this.secondModalRef=this.modalService.open(o,{centered:!0})}firstModalRef;secondModalRef;openFirstModal(o){this.secondModalRef&&this.secondModalRef.close();let r=this.modalService.open(o,this.modalOptions);this.firstModalRef=r,r.result.then(i=>{}).catch(i=>{})}openSecondModal(o){this.firstModalRef&&this.firstModalRef.close();let r=this.modalService.open(o,this.modalOptions);this.secondModalRef=r,r.result.then(i=>{}).catch(i=>{})}static \u0275fac=function(r){return new(r||d)(S(R),S(y))};static \u0275cmp=V({type:d,selectors:[["app-modals-closes"]],viewQuery:function(r,i){if(r&1&&(M(ce,5),M(pe,5)),r&2){let b;x(b=E())&&(i.modal1=b.first),x(b=E())&&(i.modal2=b.first)}},decls:235,vars:42,consts:[["content",""],["content1",""],["staticbackdropModal",""],["ScrollingcontentModal",""],["TooltipPopoversModal",""],["VerticalCenterScrollModal",""],["content6",""],["content2",""],["GridCenterModal",""],["VerticalCenterModal",""],["FullscreenModal",""],["BelowSmModal",""],["BelowMdModal",""],["BelowLgModal",""],["BelowXlModal",""],["BelowXxlModal",""],["XlContentModal",""],["LargeModal",""],["SmallModal",""],["scale",""],["right",""],["bottom",""],["newspaper",""],["fall",""],["flip",""],["flipV",""],["super",""],["sign",""],["left",""],["OpenmdoModal",""],["OpenfatModal",""],["OpengetbootstrapModal",""],["justme",""],["smallModal",""],["largeModal",""],["gridModal",""],["successModal",""],["warningModal",""],["select2Modal",""],["scrollModal",""],["Content8",""],["title","Modal & Closes","title1","Advanced Ui","activeTitle","Modal & Closes"],[1,"row"],[1,"col-xl-6"],[3,"title","prism","tsCode"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModal",1,"btn","btn-primary",3,"click"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],["type","button","data-bs-toggle","modal","data-bs-target","#staticBackdrop",1,"btn","btn-primary",3,"click"],["id","staticBackdrop","data-bs-backdrop","static","data-bs-keyboard","false","tabindex","-1","aria-labelledby","staticBackdropLabel","aria-hidden","true",1,"modal","fade"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalScrollable",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalScrollable4",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalScrollable3",1,"btn","btn-primary",3,"click"],["data-bs-toggle","modal","role","button",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalScrollable5",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalScrollable2",1,"btn","btn-primary",3,"click"],[1,"col-xl-12"],[1,"bd-example"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreen",1,"btn","btn-primary","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreenSm",1,"btn","btn-secondary","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreenMd",1,"btn","btn-warning","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreenLg",1,"btn","btn-info","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreenXl",1,"btn","btn-success","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalFullscreenXxl",1,"btn","btn-danger","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalXl",1,"btn","btn-primary","m-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalLg",1,"btn","btn-secondary","m-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalSm",1,"btn","btn-warning","m-1",3,"click"],[1,"mb-3"],[1,"col-xl-4"],[3,"title","prism"],["type","button","aria-label","Close",1,"btn-close"],["type","button","disabled","","aria-label","Close",1,"btn-close"],["classbody","bg-black white-varient-styles",3,"title","prism"],["type","button","aria-label","Close",1,"btn-close","btn-close-white"],["type","button","disabled","","aria-label","Close",1,"btn-close","btn-close-white"],[1,"col-sm-6","col-md-4","col-xl-3"],["data-bs-effect","effect-scale","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-slide-in-right","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-slide-in-bottom","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-newspaper","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-fall","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-flip-horizontal","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-flip-vertical","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-super-scaled","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-sign","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-rotate-bottom","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["data-bs-effect","effect-rotate-left","data-bs-toggle","modal",1,"modal-effect","btn","btn-primary","d-grid","mb-3",3,"click"],["id","modaldemo8",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered","text-center"],[1,"modal-content","modal-content-demo"],["type","button","data-bs-toggle","modal","data-bs-target","#formmodal","data-bs-whatever","@mdo",1,"btn","btn-primary","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#formmodal","data-bs-whatever","@fat",1,"btn","btn-secondary","mb-1","me-1",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#formmodal","data-bs-whatever","@getbootstrap",1,"btn","btn-light","mb-1","me-1",3,"click"],[1,"modal-header"],["id","exampleModalLabel1",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary"],["id","staticBackdropLabel",1,"modal-title"],["id","staticBackdropLabel1",1,"modal-title"],["id","staticBackdropLabel4",1,"modal-title"],["role","button","placement","top","popoverTitle","Popover title","ngbPopover","Popover body content is set in this attribute",1,"btn","btn-secondary"],["ngbTooltip","tooltip","title","Tooltip",1,"text-primary"],["id","staticBackdropLabel3",1,"modal-title"],["id","exampleModalToggleLabel",1,"modal-title"],["data-bs-target","#exampleModalToggle2","data-bs-toggle","modal",1,"btn","btn-primary",3,"click"],["id","exampleModalToggleLabel2",1,"modal-title"],["data-bs-target","#exampleModalToggle","data-bs-toggle","modal",1,"btn","btn-primary",3,"click"],[1,"modal-title"],["type","button",1,"btn-close",3,"click"],[1,"btn","btn-primary",3,"click"],["id","staticBackdropLabel5",1,"modal-title"],[1,"container-fluid"],[1,"col-md-4","bg-light","border"],[1,"col-md-4","ms-auto","bg-light","border"],[1,"row","mt-3"],[1,"col-md-3","ms-auto","bg-light","border"],[1,"col-md-2","ms-auto","bg-light","border"],[1,"col-md-6","ms-auto","bg-light","border"],[1,"col-sm-9","bg-light","border"],[1,"col-8","col-sm-6","bg-light","border"],[1,"col-4","col-sm-6","bg-light","border"],["id","staticBackdropLabel2",1,"modal-title"],["id","exampleModalFullscreenLabel",1,"modal-title"],["id","exampleModalFullscreenSmLabel",1,"modal-title"],["id","exampleModalFullscreenMdLabel",1,"modal-title"],["id","exampleModalFullscreenLgLabel",1,"modal-title"],["id","exampleModalFullscreenXlLabel",1,"modal-title"],["id","exampleModalFullscreenXxlLabel",1,"modal-title"],["id","exampleModalXlLabel",1,"modal-title"],["id","exampleModalLgLabel",1,"modal-title"],["id","exampleModalSmLabel",1,"modal-title"],["aria-label","Close","data-bs-dismiss","modal",1,"btn-close",3,"click"],[1,"modal-body","text-start"],[1,"text-muted","mb-0"],[1,"btn","btn-primary"],["data-bs-dismiss","modal",1,"btn","btn-light",3,"click"],["id","exampleModalLabel",1,"modal-title"],["for","recipient-name",1,"col-form-label"],["value","@mdo","type","text","id","recipient-name",1,"form-control"],["for","message-text",1,"col-form-label"],["id","message-text",1,"form-control"],["value","@fat","type","text","id","recipient-name",1,"form-control"],["value","@getbootstrap","type","text","id","recipient-name",1,"form-control"],["type","button","aria-label","Close",1,"btn-close",3,"click"],["type","button",1,"btn","ripple","btn-primary"],["type","button",1,"btn","ripple","btn-secondary",3,"click"],[1,"fs-6"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-footer","justify-content-center"],[1,"col-md-6"],[1,"modal-body","tx-center"],[1,"icon","ion-ios-checkmark-circle-outline","tx-100","tx-success","lh-1","mg-t-20","d-inline-block"],[1,"tx-success","tx-semibold","mg-b-20"],[1,"mg-b-20","mg-x-20"],["type","button",1,"btn","ripple","btn-success",3,"click"],[1,"icon","icon","ion-ios-close-circle-outline","tx-100","tx-danger","lh-1","mg-t-20","d-inline-block"],[1,"tx-danger","mg-b-20"],["type","button",1,"btn","ripple","btn-danger",3,"click"],[1,"mt-3"]],template:function(r,i){if(r&1){let b=c();v(0,"app-page-header",41),t(1,"div",42)(2,"div",43)(3,"app-showcode-card",44)(4,"a",45),s("click",function(){a(b);let m=_(10);return n(i.openBasic(m))}),l(5," Launch demo modal "),e(),t(6,"div",46)(7,"div",47)(8,"div",48),h(9,ue,11,0,"ng-template",null,0,p),e()()()()(),t(11,"div",43)(12,"app-showcode-card",44)(13,"a",49),s("click",function(){a(b);let m=_(21);return n(i.StaticBackdrop(m))}),l(14," Launch static backdrop modal "),e(),t(15,"div",50)(16,"div",47)(17,"div",48),h(18,be,12,0,"ng-template",null,1,p),e()()()(),h(20,_e,12,0,"ng-template",null,2,p),e(),t(22,"div",43)(23,"app-showcode-card",44)(24,"a",51),s("click",function(){a(b);let m=_(27);return n(i.scrollableContent(m))}),l(25," Scrolling long content "),e(),h(26,ge,42,0,"ng-template",null,3,p),e()(),t(28,"div",43)(29,"app-showcode-card",44)(30,"a",52),s("click",function(){a(b);let m=_(33);return n(i.TooltipPopovers(m))}),l(31," Launch demo modal "),e(),h(32,he,27,0,"ng-template",null,4,p),e()(),t(34,"div",43)(35,"app-showcode-card",44)(36,"a",53),s("click",function(){a(b);let m=_(39);return n(i.VerticalCenterScroll(m))}),l(37," Vertically centered scrollable modal "),e(),h(38,Ce,25,0,"ng-template",null,5,p),e()(),t(40,"div",43)(41,"app-showcode-card",44)(42,"a",54),s("click",function(){a(b);let m=_(45);return n(i.openFirstModal(m))}),l(43,"Open first modal "),e(),h(44,ve,11,0,"ng-template",null,6,p)(46,ke,9,0,"ng-template",null,7,p),e()(),t(48,"div",43)(49,"app-showcode-card",44)(50,"a",55),s("click",function(){a(b);let m=_(53);return n(i.Gridmodal(m))}),l(51," Launch demo modal "),e(),h(52,we,32,0,"ng-template",null,8,p),e()(),t(54,"div",43)(55,"app-showcode-card",44)(56,"a",56),s("click",function(){a(b);let m=_(59);return n(i.VerticalCenter(m))}),l(57," Vertically centered modal "),e(),h(58,Se,12,0,"ng-template",null,9,p),e()()(),t(60,"div",42)(61,"div",57)(62,"app-showcode-card",44)(63,"div",58)(64,"a",59),s("click",function(){a(b);let m=_(77);return n(i.openFullscreen(m))}),l(65,"Full screen"),e(),t(66,"a",60),s("click",function(){a(b);let m=_(79);return n(i.BelowSm(m))}),l(67,"Full screen below sm"),e(),t(68,"a",61),s("click",function(){a(b);let m=_(81);return n(i.BelowMd(m))}),l(69,"Full screen below md"),e(),t(70,"a",62),s("click",function(){a(b);let m=_(83);return n(i.BelowLg(m))}),l(71,"Full screen below lg"),e(),t(72,"a",63),s("click",function(){a(b);let m=_(85);return n(i.BelowXl(m))}),l(73,"Full screen below xl"),e(),t(74,"a",64),s("click",function(){a(b);let m=_(87);return n(i.BelowXxl(m))}),l(75,"Full screen below xxl"),e()(),h(76,Me,9,0,"ng-template",null,10,p)(78,xe,9,0,"ng-template",null,11,p)(80,Ee,9,0,"ng-template",null,12,p)(82,ye,9,0,"ng-template",null,13,p)(84,Ve,9,0,"ng-template",null,14,p)(86,Te,9,0,"ng-template",null,15,p),e()(),t(88,"div",57)(89,"app-showcode-card",44)(90,"a",65),s("click",function(){a(b);let m=_(97);return n(i.openXl(m))}),l(91," Extra large modal "),e(),t(92,"a",66),s("click",function(){a(b);let m=_(99);return n(i.openLg(m))}),l(93," Large modal "),e(),t(94,"a",67),s("click",function(){a(b);let m=_(101);return n(i.openSm(m))}),l(95," Small modal "),e(),h(96,Re,6,0,"ng-template",null,16,p)(98,Le,6,0,"ng-template",null,17,p)(100,Ne,6,0,"ng-template",null,18,p),e()()(),t(102,"h6",68),l(103,"Close Buttons:"),e(),t(104,"div",42)(105,"div",69)(106,"app-showcode-card",70),v(107,"button",71),e()(),t(108,"div",69)(109,"app-showcode-card",70),v(110,"button",72),e()(),t(111,"div",69)(112,"app-showcode-card",73),v(113,"button",74)(114,"button",75),e()()(),t(115,"div",42)(116,"div",57)(117,"app-showcode-card",44)(118,"div",42)(119,"div",76)(120,"a",77),s("click",function(){a(b);let m=_(156);return n(i.openScale(m))}),l(121,"Scale"),e()(),t(122,"div",76)(123,"a",78),s("click",function(){a(b);let m=_(159);return n(i.openSlideRight(m))}),l(124,"Slide In Right"),e()(),t(125,"div",76)(126,"a",79),s("click",function(){a(b);let m=_(162);return n(i.openSlideBottom(m))}),l(127,"Slide In Bottom"),e()(),t(128,"div",76)(129,"a",80),s("click",function(){a(b);let m=_(165);return n(i.openNewspaper(m))}),l(130,"News paper"),e()(),t(131,"div",76)(132,"a",81),s("click",function(){a(b);let m=_(168);return n(i.openFall(m))}),l(133,"Fall"),e()(),t(134,"div",76)(135,"a",82),s("click",function(){a(b);let m=_(171);return n(i.openFlipHorizontal(m))}),l(136,"Flip Horizontal"),e()(),t(137,"div",76)(138,"a",83),s("click",function(){a(b);let m=_(174);return n(i.openFlipVertical(m))}),l(139,"Flip Vertical"),e()(),t(140,"div",76)(141,"a",84),s("click",function(){a(b);let m=_(177);return n(i.openSuperScaled(m))}),l(142,"Super Scaled"),e()(),t(143,"div",76)(144,"a",85),s("click",function(){a(b);let m=_(180);return n(i.openSign(m))}),l(145,"Sign"),e()(),t(146,"div",76)(147,"a",86),s("click",function(){a(b);let m=_(162);return n(i.openRotateBottom(m))}),l(148,"Rotate Bottom"),e()(),t(149,"div",76)(150,"a",87),s("click",function(){a(b);let m=_(183);return n(i.openRotateLeft(m))}),l(151,"Rotate Left"),e()()(),t(152,"div",88)(153,"div",89)(154,"div",90),h(155,Ie,14,0,"ng-template",null,19,p),e(),t(157,"div",90),h(158,qe,14,0,"ng-template",null,20,p),e(),t(160,"div",90),h(161,Be,14,0,"ng-template",null,21,p),e(),t(163,"div",90),h(164,$e,14,0,"ng-template",null,22,p),e(),t(166,"div",90),h(167,Ue,14,0,"ng-template",null,23,p),e(),t(169,"div",90),h(170,Fe,14,0,"ng-template",null,24,p),e(),t(172,"div",90),h(173,Pe,14,0,"ng-template",null,25,p),e(),t(175,"div",90),h(176,We,14,0,"ng-template",null,26,p),e(),t(178,"div",90),h(179,De,14,0,"ng-template",null,27,p),e(),t(181,"div",90),h(182,Oe,14,0,"ng-template",null,28,p),e()()()()()(),t(184,"div",42)(185,"div",57)(186,"app-showcode-card",44)(187,"button",91),s("click",function(){a(b);let m=_(194);return n(i.Openmdo(m))}),l(188," Open modal for @mdo "),e(),t(189,"button",92),s("click",function(){a(b);let m=_(196);return n(i.Openfat(m))}),l(190," Open modal for @fat "),e(),t(191,"button",93),s("click",function(){a(b);let m=_(198);return n(i.Opengetbootstrap(m))}),l(192," Open modal for @getbootstrap "),e(),h(193,Xe,19,0,"ng-template",null,29,p)(195,ze,19,0,"ng-template",null,30,p)(197,je,19,0,"ng-template",null,31,p),e()()(),h(199,He,14,0,"ng-template",null,19,p)(201,Ge,14,0,"ng-template",null,20,p)(203,Qe,14,0,"ng-template",null,21,p)(205,Ae,14,0,"ng-template",null,22,p)(207,Je,14,0,"ng-template",null,23,p)(209,Ye,14,0,"ng-template",null,24,p)(211,Ke,14,0,"ng-template",null,25,p)(213,Ze,14,0,"ng-template",null,26,p)(215,et,14,0,"ng-template",null,27,p)(217,tt,14,0,"ng-template",null,28,p)(219,lt,14,0,"ng-template",null,32,p)(221,it,14,0,"ng-template",null,33,p)(223,ot,14,0,"ng-template",null,34,p)(225,at,26,0,"ng-template",null,35,p)(227,nt,11,0,"ng-template",null,36,p)(229,st,11,0,"ng-template",null,37,p)(231,rt,16,0,"ng-template",null,38,p)(233,dt,22,0,"ng-template",null,39,p)}r&2&&(C(3),f("title","Basic Modal")("prism",i.prismCode.model1)("tsCode",i.tsCodedata.modelts1),C(9),f("title","Static backdrop")("prism",i.prismCode.model2)("tsCode",i.tsCodedata.modelts2),C(11),f("title","Scrolling long content")("prism",i.prismCode.model3)("tsCode",i.tsCodedata.modelts3),C(6),f("title","Tooltips and popovers")("prism",i.prismCode.model6)("tsCode",i.tsCodedata.modelts6),C(6),f("title","Vertical Centered Scrollable")("prism",i.prismCode.model5)("tsCode",i.tsCodedata.modelts5),C(6),f("title","Toggle between modals")("prism",i.prismCode.model8)("tsCode",i.tsCodedata.modelts8),C(8),f("title","Using the grid")("prism",i.prismCode.model7)("tsCode",i.tsCodedata.modelts7),C(6),f("title","Vertically centered modal")("prism",i.prismCode.model4)("tsCode",i.tsCodedata.modelts4),C(7),f("title","Fullscreen modal")("prism",i.prismCode.model10)("tsCode",i.tsCodedata.modelts10),C(27),f("title","Optional sizes")("prism",i.prismCode.model9)("tsCode",i.tsCodedata.modelts9),C(17),f("title","Basic Close")("prism",i.prismCode.model13),C(3),f("title","Disabel state")("prism",i.prismCode.model14),C(3),f("title","White variant")("prism",i.prismCode.model15),C(5),f("title","Modal Animation Effects")("prism",i.prismCode.model12)("tsCode",i.tsCodedata.modelts12),C(69),f("title","Varying modal content")("prism",i.prismCode.model11)("tsCode",i.tsCodedata.modelts11))},dependencies:[B,q,T,I,L,N,$],encapsulation:2})}return d})();export{ht as ModalsClosesComponent};
