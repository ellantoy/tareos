import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavService } from '../../services/navservice';

@Component({
  selector: 'app-landing-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './landing-layout.component.html',
  styleUrl: './landing-layout.component.scss'
})
export class LandingLayoutComponent {
  constructor(
    private router:Router, 
    private navServices: NavService, public renderer: Renderer2,
    private el: ElementRef,
    private elementRef: ElementRef){
      const htmlElement =
        this.elementRef.nativeElement.ownerDocument.documentElement;
        this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
    
      // if(window.innerWidth < 992){
      //   const htmlElement =
      //   this.elementRef.nativeElement.ownerDocument.documentElement;
      //   this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
      // }
      
    }
  ngOnDestroy(){
 
    document.body.classList.remove('landing-body');   
    const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'vertical');
    this.renderer.setAttribute(htmlElement, 'data-menu-styles', 'light');
    this.renderer.removeAttribute(htmlElement, 'data-nav-style')
}
}
