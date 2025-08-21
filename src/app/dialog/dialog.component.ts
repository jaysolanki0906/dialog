import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
export interface DropdownOption {
  value: string;
  label: string;
}
@Component({
  selector: 'app-dialog',
  imports: [NgSelectModule,ReactiveFormsModule,CommonModule,MatDialogModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent implements OnInit{

  customerForm!: FormGroup;
  customerName:string='';

  accountGroupOptions: DropdownOption[] = [
    { value: 'AG01', label: 'AG01-Customer' },
    { value: 'AG02', label: 'AG02-Vendor' },
    { value: 'AG03', label: 'AG03-Employee' }
  ];

  companyCodeOptions: DropdownOption[] = [
    { value: '1000', label: '1000 - Main Company' },
    { value: '2000', label: '2000 - Subsidiary A' },
    { value: '3000', label: '3000 - Subsidiary B' }
  ];

  salesOrganizationOptions: DropdownOption[] = [
    { value: 'SO1', label: 'SO1-North Sales Org' },
    { value: 'SO2', label: 'SO2-South Sales Org' },
    { value: 'SO3', label: 'SO3-West Sales Org' }
  ];

  distributionChannelOptions: DropdownOption[] = [
    { value: '10', label: '10-Direct Sales' },
    { value: '20', label: '20-Retail Channel' },
    { value: '30', label: '30-Organisation Channel' }
  ];

  divisionOptions: DropdownOption[] = [
    { value: 'FOOD', label: 'Food Division' },
    { value: 'BEVERAGE', label: 'Beverage Division' },
    { value: 'SNACK', label: 'Snack Division' }
  ];

  customerGroupOptions: DropdownOption[] = [
    { value: 'CG01', label: 'CG01-Premium Group' },
    { value: 'CG02', label: 'CG02-Standard Group' },
    { value: 'CG03', label: 'CG03-New Customer' }
  ];

  salesOfficeOptions: DropdownOption[] = [
    { value: 'SO001', label: 'SO001-Mumbai Sales Office' },
    { value: 'SO002', label: 'SO002-Delhi Sales Office' },
    { value: 'SO003', label: 'SO003-Bangalore Sales Office' }
  ];

  salesHierarchyOptions: DropdownOption[] = [
    { value: 'SH001', label: 'SH001-National Sales' },
    { value: 'SH002', label: 'SH002-Regional Sales' },
    { value: 'SH003', label: 'SH003-Local Sales' }
  ];

  customerSubgroupOptions: DropdownOption[] = [
    { value: 'KEY', label: 'Key Accounts' },
    { value: 'REGULAR', label: 'Regular Account' },
    { value: 'SMALL', label: 'Small Account' }
  ];

  subRegionOptions: DropdownOption[] = [
    { value: 'SR01', label: 'SR01-North Region' },
    { value: 'SR02', label: 'SR02-South Region' },
    { value: 'SR03', label: 'SR03-East Region' },
    { value: 'SR04', label: 'SR04-West Region' }
  ];

  accountAssignmentGroupOptions: DropdownOption[] = [
    { value: 'AAG01', label: 'AAG01-Trade Receivable' },
    { value: 'AAG02', label: 'AAG02-Service Receivable' },
    { value: 'AAG03', label: 'AAG03-Other Receivable' }
  ];

  soOptions: DropdownOption[] = [
    { value: 'SO001', label: 'SO001-Standard Operations' },
    { value: 'SO002', label: 'SO002-Special Operations' },
    { value: 'SO003', label: 'SO003-Emergency Operations' }
  ];

  paymentTermsOptions: DropdownOption[] = [
    { value: 'PT01', label: 'PT01-Net30-Payment within 30 days' },
    { value: 'PT02', label: 'PT02-Net60-Payment within 60 days' },
    { value: 'PT03', label: 'PT03-COD-Cash on delivery' }
  ];

  currencyOptions: DropdownOption[] = [
    { value: 'INR', label: 'INR-Indian Rupee' },
    { value: 'USD', label: 'USD-US Dollar' },
    { value: 'EUR', label: 'EUR-Euro' }
  ];

  priceListOptions: DropdownOption[] = [
    { value: 'PL001', label: 'PL001-Standard Price List' },
    { value: 'PL002', label: 'PL002-Premium Price List' },
    { value: 'PL003', label: 'PL003-Promotional Price List' }
  ];

  reconciliationAccountOptions: DropdownOption[] = [
    { value: 'RAT01', label: 'RAT01-Standard Reconciliation' },
    { value: 'RAT02', label: 'RAT02-Special Reconciliation' },
    { value: 'RAT03', label: 'RAT03-Manual Reconciliation' }
  ];

  incotermsOptions: DropdownOption[] = [
    { value: 'FOB', label: 'FOB-Free on Board' },
    { value: 'CIF', label: 'CIF-Cost Insurance Freight' },
    { value: 'DDP', label: 'DDP-Delivered Duty Paid' }
  ];

  shippingConditionsOptions: DropdownOption[] = [
    { value: 'SC01', label: 'SC01-Standard Shipping' },
    { value: 'SC02', label: 'SC02-Express Shipping' },
    { value: 'SC03', label: 'SC03-Overnight Shipping' }
  ];

  deliveryPriorityOptions: DropdownOption[] = [
    { value: 'DP01', label: 'DP01-High Priority' },
    { value: 'DP02', label: 'DP02-Medium Priority' },
    { value: 'DP03', label: 'DP03-Low Priority' }
  ];

  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
   this.customerName=this.data.customerName;
    this.initlizeForm()
    this.patchAllFormValue();

  }
  patchAllFormValue()
  {
    console.log(this.data.request);
    if (this.data.request) {
    this.customerForm.patchValue({
      accountGroup: this.data.request.accountGroup,
      companyCode: this.data.request.companyCode,
      salesOrganization: this.data.request.salesOrganization,
      distributionChannel: this.data.request.distributionChannel,
      division: this.data.request.division,
      customerGroup: this.data.request.customerGroup,
      salesOffice: this.data.request.salesOffice,
      salesHierarchy: this.data.request.salesHierarchy,
      customerSubgroup: this.data.request.customerSubgroup,
      subRegion: this.data.request.subRegion,
      accountAssignmentGroup: this.data.request.accountAssignmentGroup,
      so: this.data.request.so,
      paymentTerms: this.data.request.paymentTerms,
      creditLimit: this.data.request.creditLimit,
      currency: this.data.request.currency,
      priceList: this.data.request.priceList,
      reconciliationAccountType: this.data.request.reconciliationAccountType,
      incoterms: this.data.request.incoterms,
      shippingConditions: this.data.request.shippingConditions,
      deliveryPriority: this.data.request.deliveryPriority
    });
  }
  }
  initlizeForm()
  {
    this.customerForm = this.fb.group({
      accountGroup: ['', Validators.required],
      companyCode: ['', Validators.required],
      salesOrganization: ['', Validators.required],
      distributionChannel: ['20', Validators.required], 
      division: ['', Validators.required],
      customerGroup: ['', Validators.required],
      
      salesOffice: ['', Validators.required],
      salesHierarchy: ['', Validators.required],
      customerSubgroup: ['', Validators.required],
      subRegion: [''],
      accountAssignmentGroup: [''],
      so: [''],
      
      paymentTerms: ['', Validators.required],
      creditLimit: [40, [Validators.required, Validators.min(0)]], 
      currency: ['', Validators.required],
      priceList: [''],
      reconciliationAccountType: [''],
      
      incoterms: [''],
      shippingConditions: [''],
      deliveryPriority: ['']
    });
  }

  ngOnInit(): void {
    console.log(this.data.request.customerName);
   this.customerName=this.data.customerName;

  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      console.log(this.customerForm.value);
    } else {
      Object.keys(this.customerForm.controls).forEach(key => {
        this.customerForm.get(key)?.markAsTouched();
      });
    }
  }

  isFieldRequired(fieldName: string): boolean {
    const control = this.customerForm.get(fieldName);
    return control?.hasError('required') && control?.touched || false;
  }

  
}