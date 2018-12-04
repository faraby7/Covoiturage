import { Routes } from '@angular/router';

import { TrajetComponent } from './trajet.component';

export const TrajetRoutes: Routes = [{
  path: '',
  component: TrajetComponent,
  data: {
    breadcrumb: 'Trajet',
    icon: 'icofont-home bg-c-blue',
    status: false
  }
}];
