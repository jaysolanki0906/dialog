import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomerData, CustomerDetailsService, UploadedDocument } from '../customer-details.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  imports: [CommonModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss'
})
export class CustomerDetailsComponent implements OnInit {

  customerData: CustomerData | null = null;
  isLoading = true;
   @Input() requestId!: any|null; 
   @Output() close = new EventEmitter<void>();
  constructor(private customerService: CustomerDetailsService) { }

  ngOnInit(): void {
    if (this.requestId) {
      console.log("this.requestId.requestNumber",this.requestId.requestNumber);
      this.loadCustomerDetails(this.requestId.requestNumber);
    }
  }

  loadCustomerDetails(requestId: string): void {
  this.isLoading = true;
  this.customerService.getCustomerDetails(requestId).subscribe({
    next: (data) => {
      this.customerData = data;
      this.isLoading = false;
    },
    error: (error) => {
      console.error('Error loading customer details:', error);
      this.isLoading = false;
    }
  });
}


  downloadDocument(document: UploadedDocument): void {
    console.log('Downloading:', document.name);
  }

  closeModal(): void {
    console.log('Closing modal');
    this.close.emit();
  }
  onClose() {
    
  }
}