import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<object> {
    return this.http.get(`${environment.baseUrl}/api/products`);
  }

  addProduct(product): Observable<object> {
    return this.http.post(`${environment.baseUrl}/api/product`, product);
  }

}
