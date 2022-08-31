import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
import { Brand } from '../Models/Brand';

@Component({
  selector: 'app-brand-component',
  templateUrl: './brand-component.component.html',
  styleUrls: ['./brand-component.component.scss']
})
export class BrandComponentComponent implements OnInit {
  brands: Brand[] =[];//datasource
  displayedColumns:any = ["brandId","brandCode","brandName"];
  columnNames=
  [
  {
    id:'brandId',
    vaule:'کد'
  },  
  {
    id:'brandCode',
    value:'کد محصول'
  },
  {
    id:'brandName',
    value:'عنوان محصول'
  }
  ];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getBrandListInfo();

    //this.displayedColumns=this.columnNames.map(x=>x.id);
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
