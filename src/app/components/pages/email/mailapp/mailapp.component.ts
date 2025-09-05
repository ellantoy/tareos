import { Component, HostListener, OnInit,Renderer2,ElementRef,ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig,NgbDropdownModule, NgbModule, NgbOffcanvas, NgbTooltipModule  } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,FormGroup ,FormControl, ReactiveFormsModule} from '@angular/forms';
import { NgxEditorModule, Validators, Editor, Toolbar } from 'ngx-editor';
import { NgSelectModule } from '@ng-select/ng-select';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { SharedModule } from '../../../../shared/sharedmodule';
import jsonDoc from '../../../../shared/data/editor';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
@Component({
  selector: 'app-mailapp',
  standalone: true,
  imports: [SharedModule,SpkNgSelectComponent,NgbDropdownModule,SpkDropdownsComponent,
    ReactiveFormsModule,FormsModule,NgxEditorModule,NgbModule, OverlayscrollbarsModule,NgbTooltipModule],
  templateUrl: './mailapp.component.html',
  providers: [NgbModalConfig, NgbModal],
  styleUrl: './mailapp.component.scss'
})
export class MailappComponent implements OnInit{

  @ViewChild('totalMailsElement', { static: false }) totalMailsElement!: ElementRef 
  @ViewChild('mailNavigation', { static: false }) mailNavigationElement!: ElementRef 
  constructor(config: NgbModalConfig, private modalService: NgbModal,private offcanvasService:NgbOffcanvas,private renderer: Renderer2) {
   
  }
  open(content: any) {
    this.modalService.open(content,{ size: 'lg' });
  }
  openOffcanvas(content1:any){
    this.offcanvasService.open(content1, { position: 'end' , scroll: true,panelClass:"mail-info-offcanvas" });

  }
  ngOnInit(): void {
    this.editor = new Editor();
  }
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl(
      { value: jsonDoc, disabled: false },
      Validators.required()
    ),
  });
  Selection = [
    { value: 1, label: 'jay@gmail.com' },
    { value: 2, label: 'kia@gmail.com' },
    { value: 3, label: 'don@gmail.com' },
    { value: 4, label: 'kimo@gmail.com' },
  
];

  selectedAccounts = [];

  compareAccounts = (item:any, selected:any) => {
    if (selected.country && item.country) {
      return item.country === selected.country;
    }
    if (item.name && selected.name) {
      return item.name === selected.name;
    }
    return false;
  };

  i: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.adjustLayout();
  }
  adjustLayout(): void {
    if (this.totalMailsElement && this.mailNavigationElement) {
      const totalMailsNativeElement = this.totalMailsElement.nativeElement;
      const mailNavigationNativeElement = this.mailNavigationElement.nativeElement;
  
      if (window.innerWidth > 1399) {
        this.renderer.removeClass(totalMailsNativeElement, 'd-none');
      } else if (window.innerWidth < 1399 && !this.i) {
        this.renderer.addClass(totalMailsNativeElement, 'd-none');
      } else {
        this.renderer.removeClass(totalMailsNativeElement, 'd-none');
      }
  
      if (window.innerWidth > 991) {
        this.renderer.setStyle(mailNavigationNativeElement, 'display', 'block');
        this.renderer.setStyle(totalMailsNativeElement, 'display', 'block');
      } else {
        if (totalMailsNativeElement.style.display == 'block' && !this.i) {
          mailNavigationNativeElement.style.display = 'none';
        }
  
        if (window.innerWidth < 992) {
          this.renderer.setStyle(totalMailsNativeElement, 'display', 'none');
        }
      }
  
      this.onMailTypeClick();
  
      if (window.screen.width < 992) {
        this.renderer.setStyle(mailNavigationNativeElement, 'display', 'block');
        this.renderer.addClass(totalMailsNativeElement, 'd-none');
        this.i = true;
      }
  
      this.onTotalMailsCloseClick();
  
      if (window.screen.width <= 991) {
        this.renderer.setStyle(totalMailsNativeElement, 'display', 'block');
        this.renderer.removeClass(totalMailsNativeElement, 'd-none');
        this.renderer.setStyle(mailNavigationNativeElement, 'display', 'none');
        this.i = true;
      }
    }
  }
  
  onMailTypeClick(): void {
    if (window.innerWidth <= 991) {
      const totalMailsNativeElement = this.totalMailsElement.nativeElement;
      const mailNavigationNativeElement = this.mailNavigationElement.nativeElement;
      this.renderer.setStyle(totalMailsNativeElement, 'display', 'block');
      this.renderer.removeClass(totalMailsNativeElement, 'd-none');
      this.renderer.setStyle(mailNavigationNativeElement, 'display', 'none');
      this.i = true;
    }
  }
  
  onTotalMailsCloseClick(): void {
    if (window.innerWidth < 991) {
      const totalMailsNativeElement = this.totalMailsElement.nativeElement;
      const mailNavigationNativeElement = this.mailNavigationElement.nativeElement;
      this.renderer.setStyle(mailNavigationNativeElement, 'display', 'block');
      this.renderer.addClass(totalMailsNativeElement, 'd-none');
      this.i = true;
    }
  }
  Mails=[
    {label:"jay@gmail.com",value:1},
    {label:"kia@gmail.com",value:2},
    {label:"don@gmail.com",value:3},
    {label:"kimo@gmail.com",value:4},
  ]
  selectedTags=[1]
  mails = [
    { name: 'All Mails', icon: 'ti ti-mail', badge: '64', badgeClass: 'bg-success' },
    { name: 'Inbox', icon: 'ti ti-inbox' },
    { name: 'Sent', icon: 'ti ti-send' },
    { name: 'Drafts', icon: 'ti ti-notes' },
    { name: 'Spam', icon: 'ti ti-alert-circle' },
    { name: 'Archive', icon: 'ti ti-archive', badge: '6', badgeClass: 'bg-secondary' },
    { name: 'Important', icon: 'ti ti-bookmark' },
    { name: 'Trash', icon: 'ti ti-trash',badge: '43', badgeClass: 'bg-warning'  },
    { name: 'Starred', icon: 'ti ti-star'},
  ];

  labels = [
    { name: 'Mail', iconClass: 'text-success' },
    { name: 'Home', iconClass: 'text-info' },
    { name: 'Work', iconClass: 'text-secondary' },
    { name: 'Friends', iconClass: 'text-warning' }
  ];
  onlineUsers = [
    {
      name: 'Angelica',
      message: 'Can please send me the file.',
      avatar: './assets/images/faces/4.jpg'
    },
    {
      name: 'Rexha',
      message: 'Waiting for response 👍.',
      avatar: './assets/images/faces/6.jpg'
    }
  ];
  allMails = [
    {
      sender: 'Iliana Lilly',
      time: '12:12AM',
      subject: 'Meeting Agenda',
      message: 'Reviewing the agenda for tomorrow\'s meeting. We\'ll be discussing the project timeline and budget allocation.',
      avatar: './assets/images/faces/5.jpg',
      iconClass:'ri-attachment-2 align-middle fs-12',
      badge: null,
      isChecked: false,
      isStarred: true,
    },
    {
      sender: 'Priceton Gray',
      time: '03:18PM',
      subject: 'Exclusive Offers Inside!',
      message: 'Unlock exclusive deals and discounts inside! Don\'t miss out on this limited-time opportunity to save big on your favorite products and services.',
      avatar: './assets/images/faces/12.jpg',
      badge: null,
      isChecked: true,
      isStarred: false,
    },
    {
      sender: 'Charlie Edson',
      time: 'Yesterday, 06:45AM',
      subject: 'Limited-Time Offer: Save on Your Next Trip!',
      message: 'Unlock exclusive deals and discounts inside! Don\'t miss out on this limited-time opportunity to save big on your favorite products and services.',
      avatar: null,
      badge: 'Promotion',
      isChecked: false,
      isStarred: false,
      initials: 'CH',
      avatarClass: 'bg-primary',
      badgeClass: 'bg-warning'
    },
    {
      sender: 'Isha Bella',
      time: 'May 15 2024, 08:16PM',
      subject: 'You Have New Notifications',
      message: 'Stay connected with your friends and family. See who\'s commented on your latest post and catch up on messages from loved ones.',
      avatar: './assets/images/faces/7.jpg',
      isStarred: false,
      badge: 'Social',
      badgeClass: 'bg-success'
    },
    {
      sender: 'Danny Raj',
      time: 'May 13 2024, 11:24AM',
      subject: 'New Connection Request',
      message: 'Expand your professional network with a new connection. Accept the request to connect and start networking today to explore new opportunities.',
      avatar: './assets/images/faces/15.jpg',
      badge: null,
      isChecked: false,
      isStarred: true,
    },
    {
      sender: 'Spencer Robin',
      time: 'May 18 2024, 11:15PM',
      subject: 'Invitation By Summer Soiree Under the Stars!',
      message: 'Hello,You are invited to join us for an unforgettable evening of summer magic at our Summer Soiree Under the stars.',
      avatar: null,
      badge: 'Personal',
      isChecked: false,
      isStarred: true,
      initials: 'SR',
      avatarClass: 'bg-info',
      badgeClass: 'bg-secondary'
    },
    {
      sender: 'Harry Justin',
      time: 'April 05 2024, 08:12AM',
      subject: 'New Connection Request',
      message: 'Expand your professional network with a new connection. Accept the request to connect and start networking today to explore new opportunities.',
      avatar: null,
      badge: null,
      isChecked: false,
      isStarred: false,
      initials: 'HJ',
      avatarClass: 'bg-warning',
    },
    {
      sender: 'Nicolas Noor',
      time: 'March 20, 08:30PM',
      subject: 'Claim Your Prize Now!',
      message: 'Congratulations! You\'ve won a prize! Click here to claim your reward before it\'s too late and enjoy your well-deserved prize. ',
      avatar: './assets/images/faces/13.jpg',
      badge: null,
      isChecked: false,
      isStarred: false,
    }
  ];
  recipients = [
    { name: 'Hadley Kylin', status: 'online', avatar: './assets/images/faces/11.jpg' },
    { name: 'Iliana Lilly', status: 'online', avatar: './assets/images/faces/7.jpg' },
    { name: 'Jasmine Della', status: 'offline', avatar: './assets/images/faces/4.jpg' },
    { name: 'Emanuel Rush', status: 'online', avatar: './assets/images/faces/8.jpg' },
    { name: 'Nyra Tiyana', status: 'offline', avatar: './assets/images/faces/3.jpg' },
    { name: 'Maria Violet', status: 'offline', avatar: './assets/images/faces/11.jpg' },
    { name: 'Priceton Gray', status: 'online', avatar: './assets/images/faces/16.jpg' },
    { name: 'Charlie Edson', status: 'offline', avatar: './assets/images/faces/10.jpg' },
    { name: 'Spencer Robin', status: 'offline', avatar: './assets/images/faces/15.jpg' }
  ];
  allTasksChecked!: boolean;

  toggleSelectAll(event: Event) {
    this.allTasksChecked = (event.target as HTMLInputElement).checked;
  }
}