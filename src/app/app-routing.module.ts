import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AgentLoginComponent} from './login/agent/agent-login/agent-login.component';
import {UserLoginComponent} from './login/user/user-login/user-login.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/userLogin', pathMatch: 'full'},
  { path: 'agentLogin', component: AgentLoginComponent},
  { path: 'userLogin', component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
