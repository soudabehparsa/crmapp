import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
API_URL='http://192.168.2.72:1070/api/v1/MasterService';
  constructor(private httpClient: HttpClient) { }
 public getBrandList()
  {
    return this.httpClient.get(`${this.API_URL}/GetBrandListInfo`);
  }
}
