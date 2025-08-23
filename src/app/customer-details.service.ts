import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface UploadedDocument {
  name: string;
  size: string;
  type: string;
}

export interface CustomerData {
  eKycStatus: string;
  verifiedDocuments: string[];
  uploadedDocuments: UploadedDocument[];
  accountType: string;
  panNumber: string;
  fssaiLicenseNumber: string;
  bankAccountNumber: string;
  ifscCode: string;
  accountHolderName: string;
  bankName: string;
  branchName: string;
  companyName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  address: string;
  gstRegistered: string;
  gstin: string;
  selectedAddress: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {

  constructor() {}

  private customers: Record<string, CustomerData> = {
    REQ001: {
      eKycStatus: 'Verified',
      verifiedDocuments: ['Aadhaar Card', 'PAN Card', 'GST Certificate'],
      uploadedDocuments: [
        { name: 'GST Certificate.pdf', size: '2.3 MB', type: 'PDF' },
        { name: 'PAN Card.jpg', size: '1.2 MB', type: 'Image' },
        { name: 'Address Proof.pdf', size: '1.8 MB', type: 'PDF' }
      ],
      accountType: 'Bill To',
      panNumber: 'AAAAA0000A',
      fssaiLicenseNumber: '1234567890123',
      bankAccountNumber: '1234567890',
      ifscCode: 'HDFC0001234',
      accountHolderName: 'Acme Corp Ltd',
      bankName: 'HDFC Bank',
      branchName: 'Mumbai Main Branch',
      companyName: 'Acme Corp Ltd',
      email: 'contact@acmecorp.com',
      phone: '+91 9876543210',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      country: 'India',
      address: '123 Business Park, Mumbai, Maharashtra 400001',
      gstRegistered: 'Yes',
      gstin: '27AAAAA0000A1Z5',
      selectedAddress: 'Principal'
    },
    REQ002: {
      eKycStatus: 'Pending',
      verifiedDocuments: ['PAN Card'],
      uploadedDocuments: [
        { name: 'PAN Card.jpg', size: '1.1 MB', type: 'Image' },
        { name: 'Incorporation Certificate.pdf', size: '2.4 MB', type: 'PDF' }
      ],
      accountType: 'Ship To',
      panNumber: 'BBBBB1111B',
      fssaiLicenseNumber: '9876543210987',
      bankAccountNumber: '9876543210',
      ifscCode: 'ICIC0005678',
      accountHolderName: 'Global Industries',
      bankName: 'ICICI Bank',
      branchName: 'Delhi Connaught Place',
      companyName: 'Global Industries',
      email: 'info@globalind.com',
      phone: '+91 9123456780',
      city: 'Delhi',
      state: 'Delhi',
      pincode: '110001',
      country: 'India',
      address: '45 Corporate Tower, Connaught Place, Delhi 110001',
      gstRegistered: 'No',
      gstin: '',
      selectedAddress: 'Branch Office'
    }
  };

  getCustomerDetails(requestId: string): Observable<CustomerData | null> {
    const customer = this.customers[requestId] || null;
    return of(customer);
  }
}
