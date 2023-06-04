import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserTransferStateModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BestsellersComponent } from './pages/bestsellers/bestsellers.component';
import { DealsComponent } from './pages/deals/deals.component';
import { NewReleasesComponent } from './pages/new-releases/new-releases.component';
import { LaptopsComponent } from './pages/laptops/laptops.component';
import { LaptopDetailsComponent } from './pages/laptops/laptop-details/laptop-details.component';
import {MatDividerModule} from '@angular/material/divider';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidenavComponent,
    FooterComponent,
    BestsellersComponent,
    DealsComponent,
    NewReleasesComponent,
    LaptopsComponent,
    LaptopDetailsComponent,
    ChatbotComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatDividerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
