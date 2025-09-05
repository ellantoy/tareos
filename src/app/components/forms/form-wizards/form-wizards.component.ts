import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/sharedmodule';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal, NgbModule, NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable } from 'rxjs';
import { MatStepperModule, StepperOrientation } from '@angular/material/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FlatpickrModule } from 'angularx-flatpickr';

@Component({
  selector: 'app-form-wizards',
  imports: [SharedModule,NgbModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatStepperModule,FormsModule,ReactiveFormsModule,CommonModule,FlatpickrModule,NgSelectModule,RouterModule],
  templateUrl: './form-wizards.component.html',
  styleUrl: './form-wizards.component.scss'
})
export class FormWizardsComponent {
  active: any;
	disabled = true;
  
  basicDemoValue = '';
  firstFormGroup: any;
  secondFormGroup: any;
  thirdFormGroup: any;
  forthFormGroup: any;
  fifthFormGroup: any;

  onNavChange(changeEvent: NgbNavChangeEvent) {
		if (changeEvent.nextId === 1) {
			changeEvent.preventDefault();
		}
	}

  constructor(
    private modalService: NgbModal,
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }
  ngOninit(){
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
    this.forthFormGroup = this._formBuilder.group({
      forthCtrl: ['', Validators.required],
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required],
    });
  }
  stepperOrientation: Observable<StepperOrientation>;

  contactForm!: FormGroup;
  jobForm!: FormGroup;
  educationForm!: FormGroup;

  nextTab(tabIndex: number) {
    switch (tabIndex) {
      case 1:
        if (this.contactForm.valid) {
          // Proceed to next tab
          break;
        } else {
          // Handle form validation error
          return;
        }
      // Handle validation for other tabs similarly
    }
  }
}
