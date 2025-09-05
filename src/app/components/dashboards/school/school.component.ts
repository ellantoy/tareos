import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ApexChartComponent } from '../../../@spk/apex-chart/apex-chart.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkSchoolComponent } from '../../../@spk/reusable-dashboards/spk-school/spk-school.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-school',
  standalone: true,
  imports: [SharedModule,NgbDropdownModule,ApexChartComponent,SpkReusableTablesComponent,SpkDropdownsComponent,SpkSchoolComponent,CommonModule,NgbTooltipModule],
  templateUrl: './school.component.html',
  styleUrl: './school.component.scss'
})
export class SchoolComponent {
chartOptions:any=
  {
    series: [{
      name: 'Total Present',
      type: "column",
      data: [44, 30, 57, 80, 90, 55, 70, 43, 23, 54, 77, 34]
    }, {
      name: 'Total Absent',
      type: "area",
      data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
    }],
    chart: {
      fontFamily: 'Montserrat',
      height: 295,
      type: 'line',
      stacked: !1,
      toolbar: {
        show: !1
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 6,
        left: 0,
        blur: 0,
        color: 'var(--primary-color)',
        opacity: 0.05
      },
      zoom: {
        enabled: false
      },
    },
    grid: {
      borderColor: '#f2f6f7',
      // borderColor: "#f1f1f1",
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
       show: true,
      position: 'top'
    },
    colors: ["var(--primary-color)", "rgb(244, 110, 244)"],
    fill: {
      type: ['solid', 'gradient'],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        type: "vertical",
        stops: [0, 90, 100],
        colorStops: [
          [
            {
              offset: 0,
              color: "var(--primary-color)",
              opacity: 1
            },
            {
              offset: 75,
              color: "var(--primary-color)",
              opacity: 1
            },
            {
              offset: 100,
              color: 'var(--primary-color)',
              opacity: 1
            }
          ],
          [
            {
              offset: 0,
              color: 'rgba(244, 110, 244, 0.4)',
              opacity: 1
            },
            {
              offset: 60,
              color: 'rgba(244, 110, 244, 0.2)',
              opacity: 1
            },
            {
              offset: 100,
              color: 'rgba(244, 110, 244, 0)',
              opacity: 1
            }
          ],
        ]
      }
    },
    stroke: {
      width: [1.5, 1.5],
      curve: ['smooth', 'smooth'],
      dashArray: [0, 4]
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
   
    plotOptions: {
      bar: {
        columnWidth: "25%",
        borderRadius: 2
      }
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    }
  }
  chartOptions1:any={
    chart: {
      height: 199,
      type: "radialBar",
  },
  series: [72, 84],
  colors: ["var(--primary-color)", "rgba(244, 110, 244, 1)"],
  plotOptions: {
      radialBar: {
          hollow: {
              margin: 0,
              size: "60%",
              background: "#fff",
          },
          dataLabels: {
              name: {
                  offsetY: -10,
                  color: "#4b9bfa",
                  fontSize: "16px",
                  show: false,
              },
              value: {
                  offsetY: 10,
                  color: "#4b9bfa",
                  fontSize: "22px",
                  show: true,
              },
              total: {
                  show: true,
                  label: 'Total',
              }
          },
      },
  },
  stroke: {
      lineCap: "round",
  },
  }

  statCards = [
    {
      title: 'Students',
      plans:'Month',
      value: '12,765',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect>
                <polygon points="224 64 128 96 32 64 128 32 224 64" opacity="0.2"></polygon>
                <line x1="32" y1="64" x2="32" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                <path d="M56,216c15.7-24.08,41.11-40,72-40s56.3,15.92,72,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
                <polygon points="224 64 128 96 32 64 128 32 224 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polygon>
                <path d="M169.34,82.22a56,56,0,1,1-82.68,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
            </svg>`,
      changePercentage: '0.25%',
      changeDirection: 'up' as 'up' | 'down',  // Explicit cast here
      backgroundColor: 'bg-primary'
    },
    {
      title: 'Awards',
      plans:'Year',
      value: '45+',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="96" r="48" opacity="0.2"></circle><circle cx="128" cy="96" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><circle cx="128" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><polyline points="176 160 176 240 127.99 216 80 240 80 160.01" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>`,
      changePercentage: '6.56%',
      changeDirection: 'up' as 'up' | 'down',  // Explicit cast here
      backgroundColor: 'bg-secondary'
    },
    {
      title: 'Revenue',
      plans:'Year',
      value: '$3,24,289',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,128h24a40,40,0,0,1,0,80H128Z" opacity="0.2"></path><path d="M128,48H112a40,40,0,0,0,0,80h16Z" opacity="0.2"></path><line x1="128" y1="24" x2="128" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="128" y1="208" x2="128" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
      changePercentage: '2.45%',
      changeDirection: 'down' as 'up' | 'down',  // Explicit cast here
      backgroundColor: 'bg-success'
    },
    {
      title: 'Total Teachers',
      plans:'Year',
      value: '721',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,128h24a40,40,0,0,1,0,80H128Z" opacity="0.2"></path><path d="M128,48H112a40,40,0,0,0,0,80h16Z" opacity="0.2"></path><line x1="128" y1="24" x2="128" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="128" y1="208" x2="128" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
      changePercentage: '2.45%',
      changeDirection: 'down' as 'up' | 'down',  // Explicit cast here
      backgroundColor: 'bg-info'
    }
  ];
  assignments = [
    {
      title: 'Assignment-4',
      startDate: '1,Jul 2024',
      endDate: '24,Jul 2024',
      daysLeft: '3 Days Left',
      badgeClass: 'bg-danger-transparent'
    },
    {
      title: 'Class Test-3',
      startDate: '14,Aug 2024',
      endDate: '20,Aug 2024',
      daysLeft: '10 Days Left',
      badgeClass: 'bg-danger-transparent'
    },
    {
      title: 'Unit Test-1',
      startDate: '20,Sep 2024',
      endDate: '30,Sep 2024',
      daysLeft: '2 Months Left',
      badgeClass: 'bg-success-transparent'
    },
    {
      title: 'Assignment-5',
      startDate: '1,Nov 2024',
      endDate: '10,Nov 2024',
      daysLeft: '3 Months Left',
      badgeClass: 'bg-success-transparent'
    },
    {
      title: 'Class Test-4',
      startDate: '2,Jan 2025',
      endDate: '12,Jan 2024',
      daysLeft: '4 Months Left',
      badgeClass: 'bg-success-transparent'
    }
  ];

  activities = [
    {
      name: 'Mr. Thomas Brown',
      time: '02:30PM',
      description: 'Liked a post from',
      badgeText: 'Ms. Sarah Parker',
      badgeText1: 'about the upcoming school event',
      badgeClass: 'badge bg-secondary-transparent',
    },
    {
      name: 'Mr. John Doe',
      time: '12:47PM',
      description: 'Updated class schedule',
    },
    {
      name: 'Ms. Jane Smith',
      time: '10:22AM',
      description: 'Posted a New Announcement',
      extraMessage: 'Reminder: Parent-Teacher meeting on Friday at 3 PM 📅',
    },
    {
      name: 'Mrs. Emily Davis',
      time: '11:30AM',
      description: 'Commented on a student\'s project -',
      badgeText: '"Excellent Work"',
      badgeClass: 'text-secondary',
    },
    {
      name: 'Alice Johnson',
      time: '11:45AM',
      description: 'Submitted a report -',
      badgeText: '"Science Project"',
      badgeClass: 'text-warning',
    }
  ];
  studentTableHeader = [
    {header:'Name'},
    {header:'ID'},
    {header:'Marks'},
    {header:'Percent'},
    {header:'Year'},
    {header:'Actions'}
  ]
  students = [
    {
      name: 'Studar Little',
      id: '#1116',
      score: '99/100',
      percentage: '99%',
      year: '2022',
      avatar: './assets/images/faces/2.jpg'
    },
    {
      name: 'Ion Somer',
      id: '#8547',
      score: '95/100',
      percentage: '95%',
      year: '2019',
      avatar: './assets/images/faces/4.jpg'
    },
    {
      name: 'Shakira',
      id: '#7564',
      score: '92/100',
      percentage: '92%',
      year: '2021',
      avatar: './assets/images/faces/6.jpg'
    },
    {
      name: 'Thomas Shelby',
      id: '#1254',
      score: '85/100',
      percentage: '85%',
      year: '2024',
      avatar: './assets/images/faces/8.jpg'
    },
    {
      name: 'Stefan U',
      id: '#7458',
      score: '82/100',
      percentage: '82%',
      year: '2022',
      avatar: './assets/images/faces/10.jpg'
    },
    {
      name: 'Jessica T',
      id: '#15643',
      score: '75/100',
      percentage: '75%',
      year: '2018',
      avatar: './assets/images/faces/11.jpg'
    }
  ];

  teachers = [
    {
      name: 'John Smith',
      qualification: 'M.Ed',
      subject: 'Mathematics',
      avatar: './assets/images/faces/11.jpg'
    },
    {
      name: 'Mary Johnson',
      qualification: 'B.A. in English',
      subject: 'English',
      avatar: './assets/images/faces/3.jpg'
    },
    {
      name: 'Robert Davis',
      qualification: 'Ph.D. in Science',
      subject: 'Physics',
      avatar: './assets/images/faces/14.jpg'
    },
    {
      name: 'Sarah Thompson',
      qualification: 'M.A. in History',
      subject: 'History',
      avatar: './assets/images/faces/7.jpg'
    },
    {
      name: 'Emily Wilson',
      qualification: 'M.A. in Geography',
      subject: 'Geography',
      avatar: './assets/images/faces/2.jpg'
    },
    {
      name: 'Michael Brown',
      qualification: 'B.Ed',
      subject: 'Chemistry',
      avatar: './assets/images/faces/9.jpg'
    },
    {
      name: 'Sara Smith',
      qualification: 'M.A',
      subject: 'English Literature',
      avatar: './assets/images/faces/4.jpg'
    },
    {
      name: 'Leo Phillip',
      qualification: 'B.Com',
      subject: 'Arts & Sciences',
      avatar: './assets/images/faces/12.jpg'
    }
  ];

  StudentMarksHeader = [
    {header:'S.No'},
    {header:'Student'},
    {header:'ID'},
    {header:'Age'},
    {header:'Gender'},
    {header:'Class'},
    {header:'Section'},
    {header:'Marks In %'},
    {header:'Marks In GPA'},
    {header:'Status'},
    {header:'Actions'}
  ]

  StudentMarksData = [
    {
      id: 1,
      name: 'Studar Little',
      avatar: './assets/images/faces/2.jpg',
      studentId: '#1116',
      age: '12 Years',
      gender: 'Boy',
      grade: 'IX',
      section: 'B',
      percentage: '75%',
      cgpa: 7.5,
      status: 'Pass'
    },
    {
      id: 2,
      name: 'Ion Somer',
      avatar: './assets/images/faces/4.jpg',
      studentId: '#8547',
      age: '10 Years',
      gender: 'Boy',
      grade: 'X',
      section: 'A',
      percentage: '65%',
      cgpa: 6.5,
      status: 'Pass'
    },
    {
      id: 3,
      name: 'Shakira',
      avatar: './assets/images/faces/6.jpg',
      studentId: '#7564',
      age: '12 Years',
      gender: 'Girl',
      grade: 'X',
      section: 'B',
      percentage: '25%',
      cgpa: 2.5,
      status: 'Fail'
    },
    {
      id: 4,
      name: 'Thomas Shelby',
      avatar: './assets/images/faces/8.jpg',
      studentId: '#1254',
      age: '8 Years',
      gender: 'Boy',
      grade: 'IX',
      section: 'A',
      percentage: '95%',
      cgpa: 9.5,
      status: 'Pass'
    },
    {
      id: 5,
      name: 'Stefan U',
      avatar: './assets/images/faces/10.jpg',
      studentId: '#7458',
      age: '10 Years',
      gender: 'Girl',
      grade: 'IX',
      section: 'B',
      percentage: '62%',
      cgpa: 6.2,
      status: 'Pass'
    },
    {
      id: 6,
      name: 'Michael Shreff',
      avatar: './assets/images/faces/12.jpg',
      studentId: '#6325',
      age: '15 Years',
      gender: 'Boy',
      grade: 'X',
      section: 'A',
      percentage: '15%',
      cgpa: 1.5,
      status: 'Fail'
    }
  ];
  
}
