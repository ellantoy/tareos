import {
  Component,
  ElementRef,
  inject,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  NgbNavModule,
  NgbDropdownModule,
  NgbOffcanvas,
  OffcanvasDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { SharedModule } from '../../../shared/sharedmodule';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkGalleryComponent } from '../../../@spk/spk-reusable-plugins/spk-gallery/spk-gallery.component';
interface Call {
  image?: string;
  name?: string;
  time?: string;
  status?: string;
  videoCall?: string;
  callsatus?: string;
  upDown?: string;
}
interface Recent {
  message?: string;
  image?: string;
  images?:any[];
  bg?:string;
  name?: string;
  time?: string;
  unReadMsgCount?: string;
  unReadMsgStatus?: string;
  status?: string;
  chatMsgUnread: boolean;
  chatMsgTyping: boolean;
  number?:string;
  online?:string;
  bg1?:string
}
const data = [
  {
    srcUrl: './assets/images/media/media-40.jpg',
    previewUrl: './assets/images/media/media-40.jpg',
  },
  {
    srcUrl: './assets/images/media/media-41.jpg',
    previewUrl: './assets/images/media/media-41.jpg',
  },
  {
    srcUrl: './assets/images/media/media-42.jpg',
    previewUrl: './assets/images/media/media-42.jpg',
  },
  {
    srcUrl: './assets/images/media/media-43.jpg',
    previewUrl: './assets/images/media/media-43.jpg',
  },
  {
    srcUrl: './assets/images/media/media-44.jpg',
    previewUrl: './assets/images/media/media-44.jpg',
  },
  {
    srcUrl: './assets/images/media/media-45.jpg',
    previewUrl: './assets/images/media/media-45.jpg',
  },
  {
    srcUrl: './assets/images/media/media-46.jpg',
    previewUrl: './assets/images/media/media-46.jpg',
  },
  {
    srcUrl: './assets/images/media/media-60.jpg',
    previewUrl: './assets/images/media/media-60.jpg',
  },
  {
    srcUrl: './assets/images/media/media-61.jpg',
    previewUrl: './assets/images/media/media-61.jpg',
  },
];
@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    NgbNavModule,
    CommonModule,
    SharedModule,
    NgbDropdownModule,
    RouterModule,
    OverlayscrollbarsModule,SpkDropdownsComponent,SpkGalleryComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  providers: [NgbOffcanvas],
})
export class ChatComponent {
  imageData = data;
  active: any;
  closeResult = '';
  private offcanvasService = inject(NgbOffcanvas);
  isOpen: boolean = false;

  open(content: any) {
    this.offcanvasService.open(content, { position: 'end', scroll: true });
    this.isOpen = !this.isOpen;
  }

 
  recents: Recent[] = [
    
    {
      name: ' Rashid Khan',
      message: 'Hey!! you are there? 😊',
      image: './assets/images/faces/5.jpg',
      time: '11:12PM',
      unReadMsgCount: '3',
      unReadMsgStatus: 'bg-info',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Jamison Jen',
      message: 'Typing...',
      image: './assets/images/faces/2.jpg',
      time: '06:52AM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: true,
    },
    {
      name: 'Andy Max',
      message: 'Great! I am happy to here this from you. ☕',
      image: './assets/images/faces/10.jpg',
      time: '10:15AM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Kerina Cherish',
      message: 'Looking forward about the matter',
      image: './assets/images/faces/6.jpg',
      time: '03:15PM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'online',
      chatMsgUnread: true,
      chatMsgTyping: false,
    },
  ];
  allchats: Recent[] = [
    {
      name: 'Rony Erick',
      message: 'You should come definately',
      image: './assets/images/faces/11.jpg',
      time: '4:13 PM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Kenath kin',
      message: 'Did you remember the date',
      image: './assets/images/faces/3.jpg',
      time: '12:46AM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Thomas Lie',
      message: 'Hi, Thank you for everything',
      image: './assets/images/faces/13.jpg',
      time: '07:30PM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Peter Stark',
      message: 'Going to Australia!',
      image: './assets/images/faces/4.jpg',
      time: '01:18PM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Monte Christ',
      message: 'Little Busy 🍕',
      image: './assets/images/faces/13.jpg',
      time: '08:07PM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Regina Mos',
      message: 'Have a Question?',
      image: './assets/images/faces/15.jpg',
      time: '09:19PM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
  ];
  GroupData: Recent[] = [
    {
      name: 'Huge Rocks',
      bg:"secondary",
      images: [
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/2.jpg',
        './assets/images/faces/10.jpg'
      ],
      time: '12:24 PM ',
      unReadMsgCount: '2',
      unReadMsgStatus: 'bg-success-transparent',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: true,
      number:"+19",
      online:"4",
      bg1:"primary"
    },
    {
      name: 'Creative Group ',
      bg:"info",
      images: [
        './assets/images/faces/1.jpg',
        './assets/images/faces/7.jpg',
        './assets/images/faces/3.jpg',
        './assets/images/faces/9.jpg',
        './assets/images/faces/12.jpg'
      ],
      time: '12:24 PM ',
      unReadMsgCount: '2',
      unReadMsgStatus: 'bg-success-transparent',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: true,
      number:"+123",
      online:"32",
      bg1:"info"
    },
    {
      name: 'Anyside Spriritual',
      bg:"success",
      images: [
        './assets/images/faces/4.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/13.jpg',
      ],
      time: '12:24 PM ',
      unReadMsgCount: '2',
      unReadMsgStatus: 'bg-success-transparent',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: true,
      number:"+15",
      online:"3",
      bg1:"secondary"
    },
    {
      name: 'Fun Time',
      bg:"secondary",
      images: [
        './assets/images/faces/1.jpg',
        './assets/images/faces/7.jpg',
        './assets/images/faces/14.jpg',
      ],
      time: '12:24 PM ',
      unReadMsgCount: '2',
      unReadMsgStatus: 'bg-success-transparent',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: true,
      number:"+28",
      online:"5",
      bg1:"secondary"
    },
    {
      name: 'Latest News',
      bg:"warning",
      images: [
        './assets/images/faces/5.jpg',
        './assets/images/faces/6.jpg',
        './assets/images/faces/12.jpg',
        './assets/images/faces/3.jpg',
      ],
      time: '12:24 PM ',
      unReadMsgCount: '2',
      unReadMsgStatus: 'bg-success-transparent',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: true,
      number:"+53",
      online:"2",
      bg1:"warning"
    },
  ];
  GroupChatData = [
    {
      class:'checkforactive',
      status: 'online',
      image: './assets/images/faces/17.jpg',
      name: '  Huge Rocks 😍 ',
      time: '12:24PM',
      message: 'Mony Typing...',
      badge: '2',
      class1:"chat-msg-typing",
      class2:"",
      name1:""
    },
    {
      class:'chat-msg-unread checkforactive',
      status: 'online',
      image: './assets/images/faces/18.jpg',
      name: 'Creative Group',
      time: '06:16AM',
      message: ' Have any updates today?',
      class1:"",
      class2:"group-indivudial",
      name1:"Kin :"
    },
    {
      class:"chat-inactive checkforactive",
      status: 'offline',
      image: './assets/images/faces/19.jpg',
      name: ' Anyside Spriritual 😎 ',
      time: '2 days ago',
      message: 'Samantha, Adam, Jessica, Emily, Alex',
      class1:"",
      class2:"",
      name1:""
    },
    {
      class:"chat-inactive checkforactive",
      status: 'offline',
      image: './assets/images/faces/20.jpg',
      name: ' Fun Time',
      time: '3 days ago',
      message: 'Elsa,Henry,Susan, Emily, Ashlin',
      class1:"",
      class2:"",
      name1:""
    },
    {
      class:"chat-inactive checkforactive",
      status: 'offline',
      image: './assets/images/faces/21.jpg',
      name: 'Latest News',
      time: '10 days ago',
      message: 'Emanuel, Rony, Alina, Lilly, Rush',
      class1:"",
      class2:"",
      name1:""
    },
  ];
  calls: Call[] = [
    {
      name: 'Olivia',
      image: './assets/images/faces/5.jpg',
      time: 'Today,12:47PM',
      status: 'online',
      videoCall: '',
      callsatus: 'ms-1 incoming-call-success',
      upDown: '',
    },
    {
      name: ' Melissa',
      image: './assets/images/faces/7.jpg',
      time: 'Today,10:27AM',
      status: 'online',
      videoCall: '',
      callsatus: 'ms-1 outgoing-call-failed',
      upDown: 'ti ti-arrow-up-right',
    },
    {
      name: ' Sharukh Sam',
      image: './assets/images/faces/21.jpg',
      time: 'Yesterday,12:45PM',
      status: 'offline',
      videoCall: 'ti ti-video',
      callsatus: 'ms-1 outgoing-call-success',
      upDown: 'ti ti-arrow-up-right',
    },
    {
      name: '   Kiram Kumal',
      image: './assets/images/faces/15.jpg',
      time: '3 Days ago',
      status: 'offline',
      videoCall: '',
      callsatus: 'ms-1 incoming-call-success',
      upDown: '',
    },
    {
      name: 'Amanda Sams',
      image: './assets/images/faces/4.jpg',
      time: '22, Oct 2023',
      status: 'offline',
      videoCall: 'ti ti-video',
      callsatus: 'ms-1 incoming-call-success',
      upDown: '',
    },
    {
      name: 'Azimo Peter',
      image: './assets/images/faces/16.jpg',
      time: '24, Oct 2023',
      status: 'offline',
      videoCall: '',
      callsatus: 'ms-1 incoming-call-failed',
      upDown: 'ti ti-arrow-up-right',
    },
    {
      name: 'Sierra Adams',
      image: './assets/images/faces/18.jpg',
      time: '22, Oct 2023',
      status: 'offline',
      videoCall: '',
      callsatus: 'ms-1 incoming-call-success',
      upDown: '',
    },
    {
      name: 'Dimple Kanns',
      image: './assets/images/faces/3.jpg',
      time: '13, Oct 2023',
      status: 'online',
      videoCall: 'ti ti-video',
      callsatus: 'ms-1 incoming-call-success',
      upDown: '',
    },
    {
      name: ' Adrea Jaremiah',
      image: './assets/images/faces/9.jpg',
      time: '13, Sep 2023',
      status: 'online',
      videoCall: '',
      callsatus: 'ms-1 outgoing-call-failed',
      upDown: 'ti ti-arrow-up-right',
    },
    {
      name: 'Anjaneliyu',
      image: './assets/images/faces/21.jpg',
      time: '10, July 2023',
      status: 'offline',
      videoCall: '',
      callsatus: 'ms-1 outgoing-call-success',
      upDown: 'ti ti-arrow-up-right',
    },
    {
      name: '  Jason Steph',
      image: './assets/images/faces/14.jpg',
      time: '1, Apr 2023',
      status: 'offline',
      videoCall: '',
      callsatus: 'ms-1 incoming-call-success',
      upDown: '',
    },
  ];
  // selectedData: Recent = this.recents[0];
  // changeTheInfo(data:Recent) {
  //   this.selectedData=data
  //   this.selectedData = this.selectedData;
  //   if (window.innerWidth <= 992) {
  //     document.querySelector('.main-chart-wrapper ')?.classList.add('responsive-chat-open');
  //   }
  // }
  activeUser = this.recents[3];
  typingUser = this.recents[1];

  handleClick(activeUser: any): void {
    this.activeUser = activeUser;
    if (window.innerWidth <= 992) {
      document.querySelector('.main-chart-wrapper ')?.classList.add('responsive-chat-open');
    }
  }
  detailsclick() {
    document.querySelector('.chat-user-details ')?.classList.add('open');
  }
  detailsclick1(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
  removedetails() {
    document.querySelector('.main-chart-wrapper ')?.classList.remove('responsive-chat-open');
  }
  removedetails1() {
    document.querySelector('.main-chart-wrapper ')?.classList.remove('responsive-chat-open');
  }
}
