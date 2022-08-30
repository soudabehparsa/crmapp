import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(){
    this.getBrandListInfo();
  }

  public getBrandListInfo()
  {
    this.apiService.getBrandList().subscribe((data:any)=>
    {
      console.table(data);
    })
  }
}