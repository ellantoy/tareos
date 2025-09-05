
import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';
import { NgbDropdownModule, NgbModal, NgbModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ApexChartComponent } from "../../../@spk/apex-chart/apex-chart.component";
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
@Component({
    selector: 'app-filemanager',
    standalone: true,
    imports: [SharedModule, NgbDropdownModule, FilePondModule, ApexChartComponent,SpkDropdownsComponent,
         NgbModule, SpkReusableTablesComponent, ApexChartComponent],
    templateUrl: './filemanager.component.html',
    styleUrl: './filemanager.component.scss'
})
export class FilemanagerComponent {
    constructor(private modalService: NgbModal, private offcanvasService: NgbOffcanvas, private sanitizer: DomSanitizer) {

    }
    open(content: any) {
        this.modalService.open(content, { centered: true });
    }
    open1(content1: any) {
        this.modalService.open(content1, { centered: true });
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
    chartOptions: any = {
      series: [38, 36, 27, 32],
      labels: ["Media", "Downloads", "Apps", "Documents"],
      chart: {
          height: 180,
          type: 'donut',
      },
      dataLabels: {
          enabled: false,
      },

      legend: {
          show: false,
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
              startAngle: -90,
              endAngle: 90,
              offsetY: 10,
              expandOnClick: false,
              donut: {
                  size: '75%',
                  background: 'transparent',
                  labels: {
                      show: true,
                      name: {
                          show: true,
                          fontSize: '20px',
                          color: '#495057',
                          offsetY: -3,
                      },
                      value: {
                          show: true,
                          fontSize: '28px',
                          fontWeight: 600,
                          color: undefined,
                          offsetY: -40,
                          formatter: function (val:any) {
                              return val + "%"
                          },
                      },
                      total: {
                          show: true,
                          showAlways: true,
                          label: 'Used of 720 GB',
                          fontSize: '12px',
                          fontWeight: 400,
                      }

                  }
              }
          }
      },
      grid: {
          padding: {
              bottom: -100
          }
      },
      colors: ["var(--primary-color)", "rgba(40, 200, 235, 1)", "rgba(133, 204, 65, 1)", "rgba(244, 110, 244, 1)"],

    }
    openOffcanvas(content2: any) {
        this.offcanvasService.open(content2, { position: 'end', scroll: true });
    }
    files = [
        {
            name: 'VIDEO_88745_KKI451.mp4',
            category: 'Videos',
            tableActive:'',
            size: '89MB',
            dateModified: '15, Aug 2024',
            bg: "svg-primary text-primary",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <rect width="256" height="256" fill="none" />
      <path d="M112,175.67V168a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h56a8,8,0,0,0,8-8v-8.82L144,216V160Z" opacity="0.2" />
      <polyline points="112 175.67 144 160 144 216 112 199.18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
      <rect x="40" y="160" width="72" height="56" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
      <polygon points="152 32 152 88 208 88 152 32" opacity="0.2" />
      <polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
      <path d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
    </svg>`
        },
        {
            name: 'VID-14211110-AKP823.mp4',
            category: 'Videos',
            tableActive:'',
            size: '12MB',
            dateModified: '18, May 2024',
            bg: "svg-success text-success",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <rect width="256" height="256" fill="none" />
      <path d="M112,175.67V168a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h56a8,8,0,0,0,8-8v-8.82L144,216V160Z" opacity="0.2" />
      <polyline points="112 175.67 144 160 144 216 112 199.18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
      <rect x="40" y="160" width="72" height="56" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
      <polygon points="152 32 152 88 208 88 152 32" opacity="0.2" />
      <polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
      <path d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
    </svg>`
        },
        {
            name: 'AC-20241.zip',
            category: 'Archives',
            size: '564KB',
            tableActive:'table-active',
            dateModified: '06, Mar 2024',
            bg: "svg-info text-info",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none">
            </rect><path d="M168,192h16a20,20,0,0,0,0-40H168v56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
            <line x1="128" y1="152" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="56 152 88 152 56 208 88 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"></polygon><path d="M48,112V40a8,8,0,0,1,8-8h96l56,56v24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>`
        },
        {
            name: 'AUD__145_24152.mp3',
            category: 'Archives',
            size: '264KB',
            tableActive:'',
            dateModified: '26, Apr 2024',
            bg: "svg-secondary text-secondary",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"></rect><polygon points="48 200 48 160 72 160 96 136 96 224 72 200 48 200" opacity="0.2"></polygon>
            <polygon points="48 200 48 160 72 160 96 136 96 224 72 200 48 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polygon><path d="M128,152a32.5,32.5,0,0,1,0,56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
            <polygon points="152 32 152 88 208 88 152 32" opacity="0.2"></polygon><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
            <path d="M168,224h32a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`
        },
        {
            name: 'Document-file.pdf',
            category: 'Documents',
            size: '2.6MB',
            tableActive:'',
            dateModified: '07, Feb 2024',
            bg: "svg-secondary text-secondary",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"></rect><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"></polygon>
            <path d="M48,112V40a8,8,0,0,1,8-8h96l56,56v24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
            <polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
            <polyline points="216 152 184 152 184 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
            <line x1="208" y1="184" x2="184" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
            <path d="M48,192H64a20,20,0,0,0,0-40H48v56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
            <path d="M112,152v56h16a28,28,0,0,0,0-56Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`
        },
    ];
    fileColumns = [
        { header: "File Name", field: "File Name" },
        { header: "Category", field: "Category" },
        { header: "Size", field: "Size" },
        { header: "Date Modified", field: "Date Modified" },
        { header: "Action", field: "Action" },
    ]

    getSanitizedSVG(svgContent: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(svgContent);
    }
    fileNavItems = [
        { name: 'All Files', icon: 'ri-folder-2-line', badge: '412', active: true,badgeColor:'primary' },
        { name: 'Recent Files', icon: 'ri-history-fill' },
        { name: 'Shared Files', icon: 'ri-share-forward-line' },
        { name: 'Favourites', icon: 'ri-star-s-line', badge: '02',badgeColor:'success' },
        { name: 'Recycle Bin', icon: 'ri-delete-bin-line' },
        { name: 'Settings', icon: 'ri-settings-3-line' },
        { name: 'Help Center', icon: 'ri-questionnaire-line' },
        { name: 'Version', icon: 'ri-folder-line' },
        { name: 'Log out', icon: 'ri-logout-box-line' },
      ];
      recentFiles = [
        { name: 'VID-14512223-AKP823.mp4', size: '1.2KB', iconColorClass: 'bg-primary-transparent', textColorClass: 'text-primary' },
        { name: 'AUD-14512223-AKP823.mp3', size: '25GB', iconColorClass: 'bg-success-transparent', textColorClass: 'text-success' },
        { name: 'VID-14211110-AKP823.mp4', size: '36GB', iconColorClass: 'bg-info-transparent', textColorClass: 'text-info' },
      ];
      cardItems = [
        {
          title: 'Images',
          usage: '17% Used',
          fileCount: '245 files',
          storage: '26.14GB',
          iconClass: 'ti ti-photo',
          avatarClass: 'bg-primary-transparent',
          textColorClass: 'text-primary',
          borderClass: 'border-primary',
          text:'text-muted'
        },
        {
          title: 'Videos',
          usage: '22% Used',
          fileCount: '224 files',
          storage: '24.32GB',
          iconClass: 'ti ti-video',
          avatarClass: 'bg-success-transparent',
          textColorClass: 'text-success',
          borderClass: 'border-success',
          text:'text-muted'
        },
        {
          title: 'Audio',
          usage: '24% Used',
          fileCount: '1354 files',
          storage: '29.45GB',
          iconClass: 'ti ti-headphones',
          avatarClass: 'bg-info-transparent',
          textColorClass: 'text-info',
          borderClass: 'border-info',
          text:'fw-medium'
        },
        {
          title: 'Apps',
          usage: '46% Used',
          fileCount: '18 files',
          storage: '54.14GB',
          iconClass: 'ti ti-layout-grid',
          avatarClass: 'bg-secondary-transparent',
          textColorClass: 'text-secondary',
          borderClass: 'border-secondary',
          text:'text-muted'
        },
        {
          title: 'Docs',
          usage: '18% Used',
          fileCount: '102 files',
          storage: '8.42GB',
          iconClass: 'ti ti-file-description',
          avatarClass: 'bg-info-transparent',
          textColorClass: 'text-info',
          borderClass: 'border-info',
          text:'text-muted'
        },
        {
          title: 'Downloads',
          usage: '16% Used',
          fileCount: '16 files',
          storage: '6.36GB',
          iconClass: 'ti ti-download',
          avatarClass: 'bg-secondary-transparent',
          textColorClass: 'text-secondary',
          borderClass: 'border-secondary',
          text:'text-muted'
        }
      ];
      folders = [
        {
          name: 'Images',
          filesCount: '345 Files',
          size: '124.16MB',
          imageUrl: './assets/images/media/file-manager/1.png'
        },
        {
          name: 'Docs',
          filesCount: '45 Files',
          size: '451.15KB',
          imageUrl: './assets/images/media/file-manager/1.png'
        },
        {
          name: 'Downloads',
          filesCount: '568 Files',
          size: '1.45GB',
          imageUrl: './assets/images/media/file-manager/1.png'
        },
        {
          name: 'Apps',
          filesCount: '247 Files',
          size: '15.88GB',
          imageUrl: './assets/images/media/file-manager/1.png'
        }
      ];
      listItems = [
        {
          title: 'Media',
          filesCount: '3,145 files',
          size: '45GB',
          iconClass: 'ti ti-photo',
          avatarClass: 'bg-primary',
          textColorClass: 'text-primary',
          borderClass: 'border-primary',
          progress: 90
        },
        {
          title: 'Downloads',
          filesCount: '568 files',
          size: '66GB',
          iconClass: 'ti ti-download',
          avatarClass: 'bg-success',
          textColorClass: 'text-success',
          borderClass: 'border-success',
          progress: 86
        },
        {
          title: 'Apps',
          filesCount: '74 files',
          size: '55GB',
          iconClass: 'ti ti-layout-grid',
          avatarClass: 'bg-info',
          textColorClass: 'text-info',
          borderClass: 'border-info',
          progress: 75
        },
        {
          title: 'Documents',
          filesCount: '1,441 files',
          size: '34GB',
          iconClass: 'ti ti-file-description',
          avatarClass: 'bg-secondary',
          textColorClass: 'text-secondary',
          borderClass: 'border-secondary',
          progress: 80
        }
      ];
}
