import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface CustomerRequest {
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

@Injectable({
  providedIn: 'root'
})
export class CustomerRequestService {
  private customerRequests: CustomerRequest[] = [
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
      so: 'SO001',
      paymentTerms: 'PT03',
      creditLimit: 40,
      currency: 'INR',
      priceList: 'PL001',
      reconciliationAccountType: 'RAT01',
      incoterms: 'FOB',
      shippingConditions: 'SC01',
      deliveryPriority: 'DP01'
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

  getAll(): Observable<CustomerRequest[]> {
    return of(this.customerRequests);
  }


  getById(requestNumber: string): Observable<CustomerRequest | undefined> {
    const request = this.customerRequests.find(r => r.requestNumber === requestNumber);
    return of(request);
  }
}
