import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'Menu',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../menu/menu.module').then(m => m.MenuPageModule)
          }
        ]
      },
      {
        path: 'plat',
        // canActivate: [AuthGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../plat/plat.module').then(m => m.PlatPageModule)
          },
          {
            path: 'datail-plat',
            children : [
              {
                path: '/:plat',
                loadChildren: () =>
                import('../detail-plat/detail-plat.module').then(m => m.DetailPlatPageModule)
              }
            ],
          }
        ]
      },
      {
        path: 'profil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profil/profil.module').then(m => m.ProfilPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/Menu',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/Menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
