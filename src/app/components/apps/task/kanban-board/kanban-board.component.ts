import { Component, Renderer2, ViewChild, ElementRef, HostListener } from '@angular/core';
import { SharedModule } from '../../../../shared/sharedmodule';
import {
  NgbDropdownModule,
  NgbModal,
  NgbModalConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import flatpickr from 'flatpickr';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule,FlatpickrDefaults  } from 'angularx-flatpickr';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { SortablejsModule} from '@maksim_m/ngx-sortablejs'; 
import { CommonModule } from '@angular/common';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkKanbanboardReusableCardComponent } from '../../../../@spk/reusable-apps/spk-kanbanboard-reusable-card/spk-kanbanboard-reusable-card.component';
import { SpkFlatpickrComponent } from '../../../../@spk/spk-flatpickr/spk-flatpickr.component';
@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [SharedModule, FilePondModule,NgbDropdownModule, SpkKanbanboardReusableCardComponent,SpkFlatpickrComponent,
    SpkNgSelectComponent,FormsModule,FlatpickrModule, OverlayscrollbarsModule, SortablejsModule,CommonModule],
  templateUrl: './kanban-board.component.html',
  providers: [NgbModalConfig, NgbModal,FlatpickrDefaults],
  styleUrl: './kanban-board.component.scss',
})
export class KanbanBoardComponent {
  constructor(private modalService: NgbModal,private renderer:Renderer2,private el:ElementRef) {

  }
  open(modal: any) {
    this.modalService.open(modal, { centered: true });
  }
  openTask(content1: any) {
    this.modalService.open(content1, { centered: true });
  }
  // selectedDate: Date | null = null; 
  flatpickrOptions: any = {
    inline: true,
   
  };
  // flatpickrOptions: FlatpickrOptions;

  ngOnInit() {
   
    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
    };
  
    flatpickr('#targetDate', this.flatpickrOptions)
  }
  @ViewChild("myPond") myPond!: FilePondComponent;

  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: "Drop files here to Upload...",
  };
  singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: "Drop files here to Upload...",
  };
  
  pondFiles: FilePond.FilePondOptions["files"] = [
  
  ];
  
  pondHandleInit() {
  }
  
  pondHandleAddFile(event: any) {

  }
  
  pondHandleActivateFile(event: any) {
  }
     // Define sortable options
    //  normalOptions = {
    //   animation: 150,
    //   group: 'shared',
    //   // Add other options here as needed
    // };
    normalList1 = []; 
    normalList2 = []; 
    normalList3 = []; 
    normalList4 = []; 
    normalList5 = []; 




    normalOptions: any = {
         animation: 150,
      group: 'shared',
      // Your sortable options
      onEnd: (event: any) => this.handleDragEnd(event)
    };
    normalOptions1: any = {
      animation: 150,
   group: 'shared',
   // Your sortable options
   onEnd: (event: any) => this.handleDragEnd1(event)
 };
 normalOptions2: any = {
  animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd2(event)
};
normalOptions3: any = {
  animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd3(event)
};
normalOptions4: any = {
  animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd4(event)
};
   
ngAfterViewInit() {
  // Optionally, check the initial state of cards here
  this.handleDragEnd(event);
}
    handleDragEnd(event: any): void {
      const container = document.getElementById('new-tasks-draggable');
      const cardElements = document.querySelectorAll('#new-tasks-draggable .card');
      this.isHidden = cardElements.length === 0; // Hide button if no cards are left
      if (container) {
        // Check if there are no child cards left
        if (container.children.length === 0) {
          container.classList.add('task-Null');
        } else {
          container.classList.remove('task-Null');
        }
      }
    }
    handleDragEnd1(event: any): void {
      const container1 = document.getElementById('todo-tasks-draggable');
      const cardElements = document.querySelectorAll('#todo-tasks-draggable .card');
      this.isHidden = cardElements.length === 0; // Hide button if no cards are left
      if (container1) {
        // Check if there are no child cards left
        if (container1.children.length === 0) {
          container1.classList.add('task-Null');
        } else {
          container1.classList.remove('task-Null');
        }
      }
    }
    handleDragEnd2(event: any): void {
      const container2 = document.getElementById('inprogress-tasks-draggable');
      const cardElements = document.querySelectorAll('#inprogress-tasks-draggable .card');
      this.isHidden = cardElements.length === 0; // Hide button if no cards are left
      if (container2) {
        // Check if there are no child cards left
        if (container2.children.length === 0) {
          container2.classList.add('task-Null');
        } else {
          container2.classList.remove('task-Null');
        }
      }
    }
    isHidden:boolean=false;
handleDragEnd3(event: any): void {
  const container3 = document.getElementById('inreview-tasks-draggable');
  if (container3) {
    // Check if there are no child cards left
    if (container3.children.length === 0) {
      container3.classList.add('task-Null');
    } else {
      container3.classList.remove('task-Null');
    }
  }
  const cardElements = document.querySelectorAll('#inreview-tasks-draggable .card');
  this.isHidden = cardElements.length === 0; // Hide button if no cards are left
}


handleDragEnd4(event: any): void {
  const container4 = document.getElementById('completed-tasks-draggable');  
  const cardElements = document.querySelectorAll('#completed-tasks-draggable .card');
  this.isHidden = cardElements.length === 0; // Hide button if no cards are left
  if (container4) {
    // Check if there are no child cards left
    if (container4.children.length === 0) {
      container4.classList.add('task-Null');
    } else {
      container4.classList.remove('task-Null');
    }
  }
}
Project=[
  {label:"Sort By",value:1},
  {label:"Newest",value:2},
  {label:"Date Added",value:3},
  {label:"Type",value:4},
  {label:"A - Z",value:5},

]
Assigned=[
  {label:"Angelina May",value:1},
  {label:"Sarah Ruth",value:2},
  {label:"Hercules Jhon",value:3},
  {label:"Mayor Kim",value:4},
]

Tags=[
  {label:"Select Tag",value:1},
  {label:"UI/UX",value:2},
  {label:"Marketing",value:3},
  {label:"Finance",value:4},
  {label:"Designing",value:5},
  {label:"Admin",value:6},
  {label:"Authentication",value:7},
  {label:"Product",value:8},
  {label:"Development",value:7},
]
newTasks = [
  {
      id: '#SHG - 01',
      idBg:"bg-success-transparent",
      title: 'Update Website Content',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      badges: [{ type: 'bg-info-transparent', label: 'Development' }],
      priority: 'High Priority',
      status: 'In Progress',
      avatars: ['./assets/images/faces/1.jpg', './assets/images/faces/2.jpg', './assets/images/faces/3.jpg', './assets/images/faces/4.jpg'],
      likes: 11,
      comments: 2,
      priorityBg:"primary"
  },
  {
      id: '#SHG - 02',
      idBg:"bg-success-transparent",
      title: 'Implement new feature for Karban app.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      badges: [{ type: 'bg-info-transparent', label: 'Development' }],
      priority: 'Low',
      status: 'In Progress',
      avatars: ['./assets/images/faces/1.jpg', './assets/images/faces/2.jpg', './assets/images/faces/3.jpg', './assets/images/faces/4.jpg'],
      likes: 15,
      comments: 3,
      priorityBg:"warning"

  },
  {
      id: '#SHG - 03',
      idBg:"bg-success-transparent",
      title: 'Develop new feature for Karban app',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      badges: [
          { type: 'bg-secondary-transparent', label: 'Development' },
          { type: 'bg-info-transparent', label: 'UI/UX' },
      ],
      priority: 'Low',
      status: 'In Progress',
      avatars: ['./assets/images/faces/5.jpg', './assets/images/faces/9.jpg'],
      likes: 25,
      comments: 5,
      priorityBg:"warning"

  },
  {
      id: '#SHG - 04',
      idBg:"bg-success-transparent",
      title: 'Design multi-usage landing page.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      badges: [
          { type: 'bg-info-transparent', label: 'Development' },
          { type: 'bg-secondary-transparent', label: 'Designing' },
      ],
      priority: 'Low',
      status: 'In Progress',
      avatars: ['./assets/images/faces/5.jpg', './assets/images/faces/9.jpg'],
      likes: 25,
      comments: 5,
      priorityBg:"warning"

  },
];
todoTasks = [
  {
      id: '#SHG - 05',
      idBg:"bg-info-transparent",
      title: 'Adding Authentication Pages.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      priority: 'Low',
      status: 'In Progress',
      avatars: ['./assets/images/faces/4.jpg', './assets/images/faces/13.jpg', './assets/images/faces/5.jpg'],
      likes: 8,
      comments: 4,
      badges: [
          { label: 'Authentication', type: 'bg-info-transparent' }
      ],
      priorityBg:"warning"
  },
  {
      id: '#SHG - 06',
      idBg:"bg-info-transparent",
      title: 'New Marketing Campaign Strategy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      priority: 'High',
      status: 'In Progress',
      avatars: ['./assets/images/faces/4.jpg', './assets/images/faces/13.jpg', './assets/images/faces/5.jpg'],
      likes: 23,
      comments: 12,
      badges: [
          {  label: 'Marketing', type: 'bg-secondary-transparent' }
      ],
      priorityBg:"primary"
  },
  // Add more tasks as needed
];
inprogressTasks = [
  {
      id: '#SHG - 07',
      idBg:"bg-success-transparent",
      title: 'Developing Calendar & Mail pages.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      badges: [
          { label: 'UI Design', type: 'bg-primary-transparent' },
          { label: 'Development', type: 'bg-secondary-transparent' },
      ],
      priority: 'Medium',
      status: 'In Progress',
      avatars: ['./assets/images/faces/7.jpg', './assets/images/faces/10.jpg', './assets/images/faces/11.jpg'],
      likes: 10,
      comments: 18,
      priorityBg:"info"
  },
  {
      id: '#SHG - 08',
      idBg:"bg-success-transparent",
      title: 'Project Design in Figma and Sketch',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      badges: [
          { label: 'Design', type: 'bg-secondary-transparent' },
      ],
      priority: 'Medium',
      status: 'In Progress',
      avatars: ['./assets/images/faces/13.jpg', './assets/images/faces/6.jpg'],
      likes: 5,
      comments: 2,
      priorityBg:"info"

  },
  // Add more tasks as needed
];
completedTasks = [
  {
    id: '#SHG - 11',
    idBg:"bg-success-transparent",
    status: 'Review',
    title: 'New Project Update',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    priority: 'High',
    avatars: ['./assets/images/faces/6.jpg', './assets/images/faces/13.jpg'],
    likes: 9,
    comments: 35,
    badges: [
      { label: 'Review', type: 'bg-secondary-transparent' },
  ],
  priorityBg:"primary"
  },
  {
    id: '#SHG - 12',
    idBg:"bg-success-transparent",
    status: 'Development',
    title: 'React JS New Version Update',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    priority: 'High',
    avatars: ['./assets/images/faces/10.jpg', './assets/images/faces/11.jpg', './assets/images/faces/1.jpg'],
    likes: 22,
    comments: 12,
    badges: [
      { label: 'Development', type: 'bg-secondary-transparent' },
  ],
  priorityBg:"primary"
  },
  {
    id: '#SHG - 13',
    idBg:"bg-success-transparent",
    status: 'Discussion',
    title: 'Project Discussion with Client',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    priority: 'High',
    avatars: ['./assets/images/faces/4.jpg'],
    likes: 11,
    comments: 12,
    badges: [
      { label: 'Discussion', type: 'bg-secondary-transparent' },
  ],
  priorityBg:"primary"
  }
  // Add more tasks as needed
];
}
