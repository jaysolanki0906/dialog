import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface DropdownOption {
  value: string;
  label: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountGroupService {

  constructor(private http: HttpClient) {}

  // Initial static values
  getDefaultAccountGroups(): Observable<DropdownOption[]> {
    return of([
      { value: 'AG01', label: 'AG01-Customer' },
      { value: 'AG02', label: 'AG02-Vendor' },
      { value: 'AG03', label: 'AG03-Employee' }
    ]);
  }

  searchAccountGroups(query: string): Observable<DropdownOption[]> {
    if (!query) {
      return of([]); 
    }

    return of([
      { value: 'AG04', label: 'AG04-Regular Customer' },
      { value: 'AG05', label: 'AG05-New Customer' },
      { value: 'AG06', label: 'AG06-Equity Customer' }
    ]);
  }
}
