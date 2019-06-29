import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './components/user/user.module#UserModule' }
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: false });

