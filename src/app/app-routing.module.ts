import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  {path:'',title:'Home',pathMatch:'full',loadChildren:()=>import('./screens/home/home.module').then(m=>m.HomeModule)},
  {path:'courses/:name',loadChildren:()=>import('./screens/course-details/course-details.module').then(m=>m.CourseDetailsModule)},
  {path:'cart',canMatch:[authenticationGuard],title:'Cart',loadChildren:()=>import('./screens/cart/cart.module').then(m=>m.CartModule)},
  {path:'wishlist',canMatch:[authenticationGuard],title:'Wishlist',loadChildren:()=>import('./screens/wishlist/wishlist.module').then(m=>m.WishlistModule)},
  {path:'profile',canMatch:[authenticationGuard],title:'Profile',loadChildren:()=>import('./screens/profile/profile.module').then(m=>m.ProfileModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
