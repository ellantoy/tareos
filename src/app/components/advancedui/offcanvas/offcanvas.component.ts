import { Component, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/offcanvas'

@Component({
  selector: 'app-offcanvas',
  standalone: true,
  imports: [SharedModule,CommonModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent {
  closeResult = '';
  prismCode = prismCodeData;
  constructor(private offcanvasService: NgbOffcanvas) {}

  open(content: any) {
    this.offcanvasService
      .open(content, { ariaLabelledBy: 'offcanvas-basic-title' })
    
  }

  openNoBackdrop(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { backdrop: false });
  }

  openStaticBackdrop(content1: TemplateRef<any>) {
    this.offcanvasService.open(content1, { backdrop: 'static' });
  }
  EnableBackdrop(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { scroll: false });
  }
  openTop(content2: TemplateRef<any>) {
    this.offcanvasService.open(content2, { position: 'top' });
  }
  openRight(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }

  openBottom(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'bottom' });
  }

  private getDismissReason(reason: any): string {
    if (reason === OffcanvasDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on the backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}