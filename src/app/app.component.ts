import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';

interface CustomerRequest {
  requestNumber: string;
  customerName: string;
  initiatorName: string;
  city: string;
  accountType: string;
  status: string;

  // 🔽 add all the extra fields you need for form/dialog
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
  imports: [CommonModule, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  activeTab: string = 'pending';
  constructor(private dialog: MatDialog) {}

  customerRequests: CustomerRequest[] = [
    {
      requestNumber: 'REQ001',
      customerName: 'Acme Corp Ltd',
      initiatorName: 'John Smith',
      city: 'Mumbai',
      accountType: 'GST Registered',
      status: 'KYC Submitted',
      accountGroup: 'AG01',
      companyCode: '1000',
      salesOrganization: 'SO1',
      distributionChannel: '20',
      division: 'FOOD',
      customerGroup: 'CG01',
      salesOffice: 'SO001',
      salesHierarchy: 'SH001',
      customerSubgroup: 'KEY',
      subRegion: 'SR01',
      accountAssignmentGroup: 'AAG01',
      so: 'SO12345',
      paymentTerms: 'PT30',
      creditLimit: 40,
      currency: 'INR',
      priceList: 'PL01',
      reconciliationAccountType: 'RAT01',
      incoterms: 'FOB',
      shippingConditions: 'SC01',
      deliveryPriority: 'HIGH'
    },
    {
      requestNumber: 'REQ002',
      customerName: 'Global Industries',
      initiatorName: 'Sarah Johnson',
      city: 'Delhi',
      accountType: 'Non-GST',
      status: 'KYC Submitted',
      accountGroup: '',
      companyCode: '',
      salesOrganization: '',
      distributionChannel: '',
      division: '',
      customerGroup: '',
      salesOffice: '',
      salesHierarchy: '',
      customerSubgroup: '',
      paymentTerms: '',
      creditLimit: 0,
      currency: ''
    }
  ];

  tabs = [
    { id: 'pending', label: 'Pending', count: 2 },
    { id: 'in-progress', label: 'In-Progress', count: 1 },
    { id: 'approved', label: 'Approved', count: 1 },
    { id: 'rejected', label: 'Rejected', count: 1 }
  ];

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }

  viewRequest(requestNumber: string) {
    console.log('View request:', requestNumber);
  }

  editRequest(request: CustomerRequest) {
    this.dialog.open(DialogComponent, {
      width: '100px',
      data: { mode: 'Edit', request }
    });
  }

  goBack() {
    console.log('Navigate back to dashboard');
  }
}
