import { Routes } from '@angular/router';

import { ConducteurProfileComponent } from './conducteurProfile.component';

export const ConducteurProfileRoutes: Routes = [{
  path: '',
  component: ConducteurProfileComponent,
  data: {
    breadcrumb: 'Conducteur',
    icon: 'icofont-home bg-c-blue',
    status: false
  }
}];
