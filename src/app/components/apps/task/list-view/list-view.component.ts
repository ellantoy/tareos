import { Component ,Renderer2,ElementRef} from '@angular/core';
import { SharedModule } from '../../../../shared/sharedmodule';
import { NgbModalConfig,NgbDropdownModule,NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import flatpickr from 'flatpickr';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule,FlatpickrDefaults  } from 'angularx-flatpickr';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkReusableCardComponent } from '../../../../@spk/reusable-dashboards/spk-reusable-card/spk-reusable-card.component';
import { SpkFlatpickrComponent } from '../../../../@spk/spk-flatpickr/spk-flatpickr.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [SharedModule,NgbDropdownModule,SpkReusableCardComponent,SpkFlatpickrComponent,SpkDropdownsComponent,
    FormsModule,FlatpickrModule,NgbModule,SpkReusableTablesComponent,SpkNgSelectComponent],
  templateUrl: './list-view.component.html',
  providers: [NgbModalConfig, NgbModal,FlatpickrDefaults],
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent {
  allTasksChecked!: boolean;
  constructor(config: NgbModalConfig, private modalService: NgbModal,private renderer: Renderer2, private el: ElementRef) {
   
  }

  open(content: any) {
    this.modalService.open(content, { centered: true });
  }
  chartOptions:any= {
    series: [1754, 1234, 878, 270],
    labels: ["New Tasks", "Completed Tasks", "Pending Tasks", "Inprogress Tasks"],
    chart: {
        height: 300,
        type: 'donut',
    },
    dataLabels: {
        enabled: false,
    },

    legend: {
        show: true,
        position: "bottom",
        markers: {
            width: 5,
            height: 5,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined, 
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
        },
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: "#fff",
        width: 0,
        dashArray: 0,
    },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: '97%',
                background: 'transparent',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '20px',
                        color: '#495057',
                        offsetY: -4
                    },
                    value: {
                        show: true,
                        fontSize: '18px',
                        color: undefined,
                        offsetY: 8,
                        formatter: function (val: string) {
                            return val + "%"
                        }
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: 'Total',
                        fontSize: '22px',
                        fontWeight: 600,
                        color: '#495057',
                    }

                }
            }
        }
    },
    colors: ["rgba(185, 78, 237, 1)", "rgba(83, 209, 255, 1)", "rgba(69, 214, 91, 1)", "rgba(255, 203, 83, 1)"],
  };
 

 

  ngAfterViewInit(): void {
    const taskBtns = this.el.nativeElement.querySelectorAll('.task-delete-btn');

    taskBtns.forEach((btn: HTMLElement) => {
      this.renderer.listen(btn, 'click', () => {
        const task = btn.closest('.task-list');
        if (task) {
          this.renderer.removeChild(task.parentNode, task);
        }
      });
    });
  }

  toggleSelectAll(event: Event) {
    this.allTasksChecked = (event.target as HTMLInputElement).checked;
  }
  lists=[
    {
      task:"Design New Landing Page",
      id:"SPK - 01",
      assigneddate:"02-06-2024",
      status:"New",
      bg:"primary",
      duedate:"10-06-2024",
      bg1:"secondary",
      priority:"Medium",
      images:[
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
        './assets/images/faces/2.jpg'
      ],
      count:2,
      update:"In Review",
      bg2:"info",
      checked:false
    },
    {
      task:"New Project Buleprint",
      id:"SPK - 04",
      assigneddate:"05-06-2024",
      status:"Inprogress",
      bg:"secondary",
      duedate:"15-06-2024",
      bg1:"danger",
      priority:"High",
      images:[
        './assets/images/faces/12.jpg',
        './assets/images/faces/11.jpg',
      ],
      count:4,
      update:"On Hold",
      bg2:"warning",
      checked:true
    },
    {
      task:"Server Side Validation",
      id:"SPK - 11",
      assigneddate:"12-06-2024",
      status:"Pending",
      bg:"warning",
      duedate:"16-06-2024",
      bg1:"success",
      priority:"Low",
      images:[
        './assets/images/faces/5.jpg',
        './assets/images/faces/9.jpg',
        './assets/images/faces/13.jpg',
      ],
      count:5,
      update:"In Review",
      bg2:"info",
      checked:false
    },
    {
      task:"New Project Buleprint",
      id:"SPK - 04",
      assigneddate:"05-06-2024",
      status:"Inprogress",
      bg:"secondary",
      duedate:"15-06-2024",
      bg1:"danger",
      priority:"High",
      images:[
        './assets/images/faces/12.jpg',
        './assets/images/faces/11.jpg',
        './assets/images/faces/13.jpg',
      ],
      count:4,
      update:"In Review",
      bg2:"info",
      checked:true
    },
    {
      task:"Server Side Validation",
      id:"SPK - 11",
      assigneddate:"12-06-2024",
      status:"Pending",
      bg:"warning",
      duedate:"16-06-2024",
      bg1:"success",
      priority:"Low",
      images:[
        './assets/images/faces/5.jpg',
        './assets/images/faces/9.jpg',
        './assets/images/faces/13.jpg',
      ],
      count:5,
      update:"In Review",
      bg2:"info",
      checked:false
    },
    {
      task:"New Plugin Development",
      id:"SPK - 24",
      assigneddate:"08-06-2024",
      status:"Completed",
      bg:"success",
      duedate:"17-06-2024",
      bg1:"success",
      priority:"Low",
      images:[
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
      ],
      count:2,
      update:"On Hold",
      bg2:"warning",
      checked:true
    },
    {
      task:"Designing New Authentication Page",
      id:"SPK - 16",
      assigneddate:"03-06-2024",
      status:"Inprogress",
      bg:"secondary",
      duedate:"08-06-2024",
      bg1:"secondary",
      priority:"Medium",
      images:[
        './assets/images/faces/10.jpg',
        './assets/images/faces/15.jpg',
      ],
      count:3,
      update:"In Review",
      bg2:"info",
      checked:false
    },
    {
      task:"New Plugin Development",
      id:"SPK - 24",
      assigneddate:"08-06-2024",
      status:"Completed",
      bg:"success",
      duedate:"17-06-2024",
      bg1:"success",
      priority:"Low",
      images:[
        './assets/images/faces/2.jpg',
        './assets/images/faces/8.jpg',
      ],
      count:2,
      update:"In Review",
      bg2:"info",
      checked:false
    },
    {
      task:"Designing New Authentication Page",
      id:"SPK - 16",
      assigneddate:"03-06-2024",
      status:"Inprogress",
      bg:"secondary",
      duedate:"08-06-2024",
      bg1:"secondary",
      priority:"Medium",
      images:[
        './assets/images/faces/10.jpg',
        './assets/images/faces/15.jpg',
      ],
      count:3,
      update:"In Review",
      bg2:"info",
      checked:false
    },
    {
      task:"Documentation For New Template",
      id:"SPK - 07",
      assigneddate:"12-06-2024",
      status:"New",
      bg:"primary",
      duedate:"25-06-2024",
      bg1:"danger",
      priority:"High",
      images:[
        './assets/images/faces/12.jpg',
      ],
      update:"On Hold",
      bg2:"warning",
      checked:false
    }
  ]
  listColumns=[
    {header:"Task",field:"Task"},
    {header:"Task ID",field:"Task ID"},
    {header:"Assigned Date",field:"Assigned Date"},
    {header:"Status",field:"Status"},
    {header:"Due Date",field:"Due Date"},
    {header:"Priority",field:"Priority"},
    {header:"Assigned To",field:"Assigned To"},
    {header:"Action",field:"Action"},
    {header:"Status Update",field:"Status Update"},
  ]
  Status=[
    {label:'New',value:4},
    {label:'Inprogress',value:1},
    {label:'On-hold',value:2},
    {label:'Completed',value:3},
  ]
  Priority=[
    {label:'High',value:1},
    {label:'Medium',value:2},
    {label:'Low',value:3},
  ]
  tags=[
    {value:1,label:'Angelina May'},
    {value:2,label:'Kiara advain'},
    {value:3,label:'Hercules Jhon'},
    {value:4,label:'Mayor Kim'},
  ]
  selectedChoices = [];
  cardData=[
    {
      id:1,
      customClass:"justify-content-between align-items-start  mb-2",
      titleClass:"d-block mb-1",
      valueClass:"fw-medium mb-0",
      cardClass:"overflow-hidden main-content-card",
      title:"New Tasks",
      value:"45,478",
      graph:"increased",
      color:"success",
      percentage:"2.56%",
      percentageIcon:"ti ti-arrow-narrow-up fs-16",
      bg:"primary",
      icon:"ri-task-line",
    },
    {
      id:2,
      customClass:"justify-content-between align-items-start  mb-2",
      titleClass:"d-block mb-1",
      valueClass:"fw-medium mb-0",
      cardClass:"overflow-hidden main-content-card",
      title:"Completed Tasks",
      value:"2,345",
      graph:"Decreased",
      color:"danger",
      percentage:"3.05%",
      percentageIcon:"ti ti-arrow-narrow-down fs-16",
      bg:"success",
      icon:"ri-check-line"
    },
    {
      id:3,
      customClass:"justify-content-between align-items-start  mb-2",
      titleClass:"d-block mb-1",
      valueClass:"fw-medium mb-0",
      cardClass:"overflow-hidden main-content-card",
      title:"Pending Tasks",
      value:"1245",
      graph:"increased",
      color:"success",
      percentage:"2.16%",
      percentageIcon:"ti ti-arrow-narrow-up fs-16",
      bg:"info",
      icon:"ri-time-line"
    },
    {
      id:4,
      customClass:"justify-content-between align-items-start  mb-2",
      titleClass:"d-block mb-1",
      valueClass:"fw-medium mb-0",
      cardClass:"overflow-hidden main-content-card",
      title:"Inprogress Tasks",
      value:"658",
      graph:"Increased",
      color:"success",
      percentage:"2.1%",
      percentageIcon:"ti ti-arrow-narrow-up fs-16",
      bg:"secondary",
      icon:"ri-loader-line"
    }
  ]
  handleToggleSelectAll(checked: any) {
    this.lists.forEach(list => list.checked = checked);
    this.allTasksChecked = checked;
  }
}
