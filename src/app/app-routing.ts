import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './models/role';

import { UserListComponent } from './users/user-list.component';
import { UserCreateComponent } from './users/user-create.component';
import { CreateUserCanDeactivateGuardService } from './users/create-user-can-deactivate.service';
import { UserDetailsComponent } from './users/user-details.component';
import { UserListResolverService } from './users/User-list-resolver.service';
import {UserDetailsGuardService} from './users/user-details-guard.service'

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'admin', 
        component: AdminComponent, 
        canActivate: [AuthGuard], 
        data: { roles: [Role.Admin] } 
    },
    { 
        path: 'login', 
        component: LoginComponent 
    },
    //Users
    {path: 'list', 
    component:UserListComponent,
    resolve:{userList: UserListResolverService}
    },
    {
    path: 'edit/:id', 
    component:UserCreateComponent,
    canDeactivate: [CreateUserCanDeactivateGuardService]
    },
    {path: 'userdetails/:id',   
    component:UserDetailsComponent,
    canActivate:[UserDetailsGuardService]
    },
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);