import {Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
{
  path: '',
  component: AdminLayoutComponent,
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    }, {
          path: 'dashboardPassager',
          loadChildren: './dashboardPassager/dashboard.module#DashboardModule'
    },{
      path: 'basic',
      loadChildren: './components/basic/basic.module#BasicModule'
    }, {
      path: 'advance',
      loadChildren: './components/advance/advance.module#AdvanceModule'
    }, {
      path: 'forms',
      loadChildren: './components/forms/forms.module#FormsModule'
    }, {
      path: 'bootstrap-table',
      loadChildren: './components/tables/bootstrap-table/bootstrap-table.module#BootstrapTableModule',
    }, {
      path: 'map',
      loadChildren: './map/map.module#MapModule',
    }, {
          path: 'simple-page',
          loadChildren: './simple-page/simple-page.module#SimplePageModule'
      },{
          path: 'trajet',
          loadChildren: './trajet/trajet.module#TrajetModule'
      },{
          path: 'conducteur/:id',
          loadChildren: './ConducteurProfile/conducteurProfile.module#ConducteurProfileModule'
      },{
          path: 'profile',
          loadChildren: './MonProfileConducteur/conducteurProfile.module#ConducteurProfileModule'
      },{
          path: 'mestrajet',
          loadChildren: './mes-trajet/trajet.module#TrajetModule'
      }

  ]
},{
  path: '',
  component: AuthLayoutComponent,
  children: [
    {
      path: 'authentication',
      loadChildren: './authentication/authentication.module#AuthenticationModule'
    }
  ]
}, {
  path: '**',
  redirectTo: 'error/404'
},{
    path: 'Auth',
    loadChildren: './first/first.module#FirstModule'
},{
    path: 'Insc',
    loadChildren: './inscription/inscription.module#InscriptionModule'
}];
