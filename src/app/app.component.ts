import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { CustomerRequestService } from './customer-request.service';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

interface CustomerRequest {
  requestNumber: string;
  customerName: string;
  initiatorName: string;
  city: string;
  accountType: string;
  status: string;

  accountGroup: string;
  companyCode: string;
  salesOrganization: string;
  distributionChannel: string;
  division: string;
  customerGroup: string;
  salesOffice: string;
  salesHierarchy: string;
  customerSubgroup: string;
  subRegion?: string;
  accountAssignmentGroup?: string;
  so?: string;
  paymentTerms: string;
  creditLimit: number;
  currency: string;
  priceList?: string;
  reconciliationAccountType?: string;
  incoterms?: string;
  shippingConditions?: string;
  deliveryPriority?: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, MatDialogModule,CustomerDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  activeTab: string = 'pending';
  selectedRequestId: any = null;
  showDialog = false;
  constructor(private dialog: MatDialog,private customerRequestService: CustomerRequestService) {}

  customerRequests: CustomerRequest[] = [];
  ngOnInit(): void {
    this.customerRequestService.getAll().subscribe(data => {
      this.customerRequests = data;
    });
  }
  closeDialog() {
    this.showDialog = false;
    this.selectedRequestId = null;
  }

  tabs = [
    { id: 'pending', label: 'Pending', count: 2 },
    { id: 'in-progress', label: 'In-Progress', count: 1 },
    { id: 'approved', label: 'Approved', count: 1 },
    { id: 'rejected', label: 'Rejected', count: 1 }
  ];

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }

  viewRequest(requestNumber: any) {
    console.log('View request:', requestNumber);
    this.selectedRequestId = requestNumber; 
    this.showDialog = true;
  }

  editRequest(request: CustomerRequest) {
    console.log(request);
    this.dialog.open(DialogComponent, {
      width: '100px',
      data: { mode: 'Edit', request }
    });
  }

  goBack() {
    console.log('Navigate back to dashboard');
  }
}
