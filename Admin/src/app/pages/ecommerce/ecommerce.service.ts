import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

const accessToken = localStorage.getItem('token')

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {
  private uploadUrl: string = environment.baseUrl + "/users/laptop";
  private getLaptop: string = environment.baseUrl + "/users/laptop";
  private changeLaptop: string = environment.baseUrl + "/users/laptops";
  // private deleteLaptopById: string = environment.baseUrl + "/users/laptops";

  constructor(
    private http: HttpClient
  ) { }

  

  uploadLaptop(data: any) {
    return this.http.post(this.uploadUrl, data)
  }
  
  getLaptops(): Observable<any> {
    return this.http.get(this.getLaptop);
  }

  deleteLaptop(id: any): Observable<any> {
    const url = `${this.changeLaptop}/${id}`;
    let Httpheaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${accessToken}`); // Include the token in the headers
  
    let options = {
      headers: Httpheaders
    };
  
    return this.http.delete<any>(url, options);
  }

  updateLaptop(id: any, data: any): Observable<any> {
    const url = `${this.changeLaptop}/${id}`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${accessToken}`);

    return this.http.put<any>(url, data, { headers });
  }

  getLaptopById(id: any): Observable<any> {
    const url = `${this.changeLaptop}/${id}`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${accessToken}`);

    return this.http.get<any>(url, { headers });
  }
}
