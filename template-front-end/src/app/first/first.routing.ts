import { Routes } from '@angular/router';

import { FirstComponent } from './first.component';

export const FirstRoutes: Routes = [{
  path: '',
  component: FirstComponent,
  data: {
    breadcrumb: 'First',
    icon: 'icofont-home bg-c-blue',
    status: false
  }
}];
