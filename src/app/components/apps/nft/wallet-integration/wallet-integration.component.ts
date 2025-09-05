import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/sharedmodule';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wallet-integration',
  standalone: true,
  imports: [SharedModule,NgbModule],
  templateUrl: './wallet-integration.component.html',
  styleUrl: './wallet-integration.component.scss'
})
export class WalletIntegrationComponent {

}
