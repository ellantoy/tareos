import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/sharedmodule';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
@Component({
  selector: 'app-project-overviwe',
  standalone: true,
  imports: [SharedModule,RouterModule,NgbTooltipModule,NgbModule,CommonModule,FormsModule,ReactiveFormsModule ,SpkDropdownsComponent,
    CdkDropList,CdkDrag,SpkReusableTablesComponent],
  templateUrl: './project-overviwe.component.html',
  styleUrl: './project-overviwe.component.scss'
})
export class ProjectOverviweComponent {
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.projects, event.previousIndex, event.currentIndex);
  }
projects=[
  {
    checked:true,
    task:"Implement responsive design",
    bg:"info",
    status:"Not Started",
    date:"17-Jan-2024"
  },
  {
    checked:false,
    task:"Fix login authentication issue",
    bg:"success",
    status:"Completed",
    date:"17-Jan-2024"
  },
  {
    checked:false,
    task:"Optimize database queries",
    bg:"info",
    status:"Not Started",
    date:"18-Feb-2024"
  },
  {
    checked:true,
    task:"Integrate third-party API",
    bg:"warning",
    status:"Pending",
    date:"19-Feb-2024"
  },
  {
    checked:true,
    task:"Create user documentation",
    bg:"info",
    status:"Not Started",
    date:"21-Feb-2024"
  },
  {
    checked:false,
    task:"Deploy to staging environment",
    bg:"primary",
    status:"In Progress",
    date:"24-Feb-2024"
  },
  {
    checked:true,
    task:"Conduct security audit",
    bg:"info",
    status:"Not Started",
    date:"27-Feb-2024"
  },
]
getCheckedTasks() {
  return this.projects.filter(project => project.checked);
}
remove(date:string){
  const data = this.projects.filter((x: { date: string }) => {
    return x.date != date;

  })
  this.projects = data;
}
projectColumn=[
  {header:"",field:"",tableHeadColumn:'todolist-handle-drag'},
  {header:"Task Title",field:"Task Title"},
  {header:"Status",field:"Status"},
  {header:"End Date",field:"End Date"},
  {header:"Action",field:"Action"}
]
}
