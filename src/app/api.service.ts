import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
MasterService_API_URL='http://192.168.2.72:1070/api/v1/MasterService';
ProductionService_API_URL='http://192.168.2.72:1050/api/v1/ProductionServiceHumanResource';

  constructor(private httpClient: HttpClient) { }
  
 public getBrandList()
  {
    return this.httpClient.get(`${this.MasterService_API_URL}/GetBrandListInfo`);
  }

  public getHumanResourceList()
  {
    return this.httpClient.get(`${this.ProductionService_API_URL}/GetHumanResourceList`);
  }
}
