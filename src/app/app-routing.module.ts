import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'board',
    loadChildren: () => import('./board/board.module').then(m => m.BoardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: "corrected"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
