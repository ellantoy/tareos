import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/sharedmodule';
@Component({
    selector: 'app-icons',
    standalone: true,
    templateUrl: './icons.component.html',
    styleUrl: './icons.component.scss',
    imports: [SharedModule, NgbTooltipModule]
})
export class IconsComponent {

}
