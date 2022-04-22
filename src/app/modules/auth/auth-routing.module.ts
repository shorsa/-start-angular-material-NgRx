import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConstants } from 'src/app/core/constants/routes.constants';
import { SignInModule } from './pages/sign-in/sign-in.module';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';


const routes: Routes = [
  {
    path: RoutesConstants.INDEX,
    component: AuthLayoutComponent,
    children: [
      {
        path: RoutesConstants.INDEX,
        loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInModule)
      },
      {
        path: RoutesConstants.INDEX,
        redirectTo: RoutesConstants.INDEX,
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
