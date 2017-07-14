import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './routes/index/index.component';
import { LoginComponent } from './routes/login/login.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { LotesComponent } from './routes/lotes/lotes.component';

const appRoutes: Routes = [
    { path: 'login', component : LoginComponent},
    { path: 'dashboard', component : DashboardComponent},
    { path: 'lotes', component : LotesComponent},
    { path: '', component : IndexComponent},
    //{ path: '', pathMatch: 'full', redirectTo: 'all'}
];

export const routing = RouterModule.forRoot(appRoutes);