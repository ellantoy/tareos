import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';

import { addSteps as defaultSteps, defaultStepOptions } from "./tour.data";

import { ShepherdService } from "angular-shepherd";

@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [SharedModule],
  providers: [ShepherdService],
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.scss'
})
export class TourComponent {
  constructor(private readonly _shepherdService: ShepherdService) {}

  ngAfterViewInit() {
    this._shepherdService.defaultStepOptions = defaultStepOptions;
    this._shepherdService.modal = true; 
    this._shepherdService.confirmCancel = false;
    this._shepherdService.addSteps(defaultSteps);
    this._shepherdService.start();
  }
}
