import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import { Brand } from '../Models/Brand';

@Component({
  selector: 'app-brand-component',
  templateUrl: './brand-component.component.html',
  styleUrls: ['./brand-component.component.scss']
})
export class BrandComponentComponent implements OnInit {
  brands: Brand[] =[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getBrandListInfo();
  }
  public getBrandListInfo()
  {
    this.apiService.getBrandList().subscribe((data:any)=>
    {
      this.brands=data;
      console.table(data);
    })
  }
}
