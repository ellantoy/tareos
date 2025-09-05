import { ChangeDetectorRef, Component } from '@angular/core';
import { BarRatingModule } from 'ngx-bar-rating';
import { FormsModule, ReactiveFormsModule, UntypedFormControl,Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/sharedmodule';
import { BarRatingComponent } from '../../../@spk/spk-reusable-plugins/bar-rating/bar-rating.component';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [SharedModule,BarRatingModule,NgbModule,FormsModule,ReactiveFormsModule,BarRatingComponent],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  starRate = 0;
  starRate1 = 0;
  starRate2 = 5;
  starRate3 = 0;
  squareRate = 3;
  faRate = 3;
  currentRate = 5;
  customCurrentRate = 5;
  customCurrentRateInput = 5;
  selected = 2;
  selected1 = 3;
  hovered = 1;
  hovered1 = 2;
  readonly = false;
  heartRate = 3.45;
  ctrl: UntypedFormControl;
  control: any;

  ctrl1: UntypedFormControl;
  constructor(private cdr: ChangeDetectorRef) {
    this.ctrl = new UntypedFormControl(null, Validators.required);
    this.ctrl1 = new UntypedFormControl(null, Validators.required);
  }

  ariaValueText(current: number, max: number) {
    return `${current} out of ${max} hearts`;
  }

  ngOnInit(): void {
  }

  toggle = () => {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  };
  selectedRate: number = 0;
  hoveredRate: number = 0;
  isReadonly: boolean = false;

  onRateChange(newRate: number): void {
    this.selectedRate = newRate;
  }

  onHoveredChange(newHovered: number): void {
    this.hoveredRate = newHovered;
  }
}
