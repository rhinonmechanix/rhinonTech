import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BestsellersComponent } from './pages/bestsellers/bestsellers.component';
import { DealsComponent } from './pages/deals/deals.component';
import { LaptopsComponent } from './pages/laptops/laptops.component';
import { LaptopDetailsComponent } from './pages/laptops/laptop-details/laptop-details.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "bestsellers",
    component: BestsellersComponent,
  },
  {
    path: "deals",
    component: DealsComponent,
  },
  {
    path: "laptops",
    component: LaptopsComponent,
  },
  {
    path: "laptops/:id",
    component: LaptopDetailsComponent,
  },
  {
    path: "chatbot",
    component: ChatbotComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
