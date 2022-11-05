import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { CreateTeamComponent } from './create-team/create-team.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'index', component: HomeComponent },
  { path: 'signIn', component: LoginComponent},
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'createTeam', component: CreateTeamComponent, canActivate: [AuthGuard]},
  { path: 'event', loadChildren: () => import('./event/event.module').then(m => m.EventModule), canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
