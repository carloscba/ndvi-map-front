import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './routes/index/index.component';
import { LoginComponent } from './routes/login/login.component';

const appRoutes: Routes = [
    { path: 'login', component : LoginComponent},
    { path: '', component : IndexComponent},
    //{ path: '', pathMatch: 'full', redirectTo: 'all'}
];

export const routing = RouterModule.forRoot(appRoutes);