import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ConducteurProfileComponent } from './conducteurProfile.component';
import { ConducteurProfileRoutes } from './conducteurProfile.routing';
import {SharedModule} from '../shared/shared.module';
import {FirstRoutes} from '../first/first.routing';
import {HttpClientModule} from '@angular/common/http';
import {FirstService} from '../first/first.service';
import {FirstComponent} from '../first/first.component';
import {AdvanceComponent} from '../components/advance/advance.component';
import {NotificationsComponent} from '../components/advance/notifications/notifications.component';
import {ConducteurProfileService} from './conducteurProfile.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(ConducteurProfileRoutes),
        SharedModule
    ],
    declarations: [
        ConducteurProfileComponent,
    ],
    providers: [
        ConducteurProfileService
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class ConducteurProfileModule {}
