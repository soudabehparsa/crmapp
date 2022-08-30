import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HR } from '../Models/HR';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  hrList: HR[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getHumanResourceList().subscribe((data: any) => {
      this.hrList = data;
    });
    console.table(this.hrList);
  }
}