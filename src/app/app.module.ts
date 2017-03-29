import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AgentLoginComponent } from './login/agent/agent-login/agent-login.component';
import { UserLoginComponent } from './login/user/user-login/user-login.component';
import { AppRoutingModule } from './app-routing.module';
import { AgentLoginFormComponent } from './login/agent/agent-login/agent-login-form/agent-login-form.component';
import { UserLoginFormComponent } from './login/user/user-login/user-login-form/user-login-form.component';
import { SignupComponent } from './login/signup/signup.component';
import { SignupFormComponent } from './login/signup/signup-form/signup-form.component';
import { HomeComponent } from './home/home.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { HeaderToolboxComponent } from './toolbox/header-toolbox/header-toolbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    AgentLoginComponent,
    UserLoginComponent,
    AgentLoginFormComponent,
    UserLoginFormComponent,
    SignupComponent,
    SignupFormComponent,
    HomeComponent,
    ToolboxComponent,
    HeaderToolboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
