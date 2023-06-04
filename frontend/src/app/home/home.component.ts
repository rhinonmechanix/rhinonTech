import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  status: boolean = false;
  sidebarHandler() {
    this.status = !this.status;
  }
  constructor(private http: HttpClient) {

    this.getAll()
  }

  API_KEY = "e1ad37ba5b2548b6b2183908451416cf";

  news: any = {};

  ngOnInit(): void { }

  getNews() {
    return this.http.get(`
    https://newsapi.org/v2/everything?q=india&apiKey=${this.API_KEY}`)
  }

  getAll() {
    this.getNews().subscribe((res: any) => {
      this.news = res.articles
    })
  }
}
