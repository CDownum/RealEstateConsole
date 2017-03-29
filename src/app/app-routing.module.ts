import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AgentLoginComponent} from './login/agent/agent-login/agent-login.component';
import {UserLoginComponent} from './login/user/user-login/user-login.component';
import {SignupComponent} from './login/signup/signup.component';
import {HomeComponent} from './home/home.component';
import {ToolboxComponent} from './toolbox/toolbox.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'signUp', component: SignupComponent},
  { path: 'home', component: ToolboxComponent},
  { path: 'agentLogin', component: AgentLoginComponent},
  { path: 'userLogin', component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
