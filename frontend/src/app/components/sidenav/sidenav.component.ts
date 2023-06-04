import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {

  constructor(private http: HttpClient) {

    this.getAll()
  }

  API_KEY = "e1ad37ba5b2548b6b2183908451416cf";

  news: any = {};

  items = [
    {
      title: "1 slide label",
      summery: "1 slide label summery",
      url: "https://via.placeholder.com/200?text=first"
    },
    {
      title: "2 slide label",
      summery: "2 slide label summery",
      url: "https://via.placeholder.com/200?text=second"
    },
    {
      title: "3 slide label",
      summery: "3 slide label summery",
      url: "https://via.placeholder.com/200?text=third"
    }
  ];

  ngOnInit(): void { }

  getNews() {
    return this.http.get(`
    https://newsapi.org/v2/everything?q=india&apiKey=e1ad37ba5b2548b6b2183908451416cf`)
  }

  getAll() {
    this.getNews().subscribe((res: any) => {
      this.news = res.articles
      console.log(this.news);

    })
  }

}
