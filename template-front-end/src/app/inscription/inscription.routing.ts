import { Routes } from '@angular/router';
import { InscriptionComponent } from './inscription.component';

export const InscriptionRoutes: Routes = [{
  path: '',
  component: InscriptionComponent,
  data: {
    breadcrumb: 'Inscription',
    icon: 'icofont-home bg-c-blue',
    status: false
  }
}];
