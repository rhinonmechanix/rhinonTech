import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { KanbanComponent } from './kanban/kanban.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard]},
    { path: 'chat', component: ChatComponent, canActivate: [AuthGuard]},
    { path: 'kanban-board', component: KanbanComponent, canActivate: [AuthGuard]},
    { path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule), canActivate: [AuthGuard]},
    { path: 'email', loadChildren: () => import('./email/email.module').then(m => m.EmailModule), canActivate: [AuthGuard]},
    { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule), canActivate: [AuthGuard]},
    { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UIModule), canActivate: [AuthGuard]},
    { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule), canActivate: [AuthGuard]},
    { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule), canActivate: [AuthGuard]},
    { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule), canActivate: [AuthGuard]},
    { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule), canActivate: [AuthGuard]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
