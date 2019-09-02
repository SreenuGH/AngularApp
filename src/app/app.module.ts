import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccordianComponent } from './shared/accordian.component';

// used to create fake backend
import { fakeBackendProvider } from './helpers/fake-backend';

import { AppComponent }  from './app.component';
import { routing }        from './app-routing';

import { JwtInterceptor} from './helpers/jwt.interceptor';
import {  ErrorInterceptor } from './helpers/error.interceptor';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

import { UserListComponent } from './users/user-list.component';
import { UserCreateComponent } from './users/user-create.component';
import {UserDetailsService} from './users/user.service';
import { DisplayUserComponent } from './users/display-user.component'
import { CreateUserCanDeactivateGuardService } from './users/create-user-can-deactivate.service';
import { UserDetailsComponent } from './users/user-details.component';
import { UserFilterPipe } from './users/user-filter.pipe';
import { UserListResolverService } from './users/User-list-resolver.service';
import {UserDetailsGuardService} from './users/user-details-guard.service'
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker'; 

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing,
        BsDatepickerModule.forRoot(),
        ReactiveFormsModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent,
        UserListComponent,
        UserCreateComponent,
        DisplayUserComponent,
        UserDetailsComponent,
        UserFilterPipe,
        AccordianComponent
    ],
    providers: [UserDetailsService, CreateUserCanDeactivateGuardService,
        UserListResolverService, UserDetailsGuardService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }