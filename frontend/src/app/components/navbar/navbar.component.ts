import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuHandler: boolean = true;
  mdOptions: boolean = true;
  search: boolean = true;
  isOpenedList: any;

  openMenu(source: any) {
    this.isOpenedList = source;
  }
  closeMenu() {
    this.isOpenedList = -1;
  }

  menuHandlerBtn() {
    this.menuHandler = !this.menuHandler;
  }
  mdOptionsToggle() {
    this.mdOptions = !this.mdOptions;
  }
  searchToggle() {
    this.search = !this.search;
  }
  constructor() { }

  ngOnInit(): void { }


}
