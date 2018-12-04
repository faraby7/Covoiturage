import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TrajetComponent } from './trajet.component';
import { TrajetRoutes } from './trajet.routing';
import {SharedModule} from '../shared/shared.module';
import {TrajetService} from './trajet.service';
import {NotificationsComponent} from '../components/advance/notifications/notifications.component';
import {AdvanceComponent} from '../components/advance/advance.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
      CommonModule,
      HttpClientModule,
      RouterModule.forChild(TrajetRoutes),
      SharedModule
  ],
  declarations: [
      TrajetComponent,
      ],
    providers: [
        TrajetService
    ],
})

export class TrajetModule {}
