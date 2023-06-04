import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaptopsService {
  private laptopsSource = new BehaviorSubject<any[]>([]);
  laptops$ = this.laptopsSource.asObservable();

  constructor(public http: HttpClient) { }

  setLaptops(laptops: any[]) {
    this.laptopsSource.next(laptops);
  }

  getData(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/users/laptop');
  }
}
