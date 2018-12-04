import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FirstRoutes } from './first.routing';
import {SharedModule} from '../shared/shared.module';
import {FirstComponent} from './first.component';
import {FirstService} from './first.service';
import {HttpClientModule} from '@angular/common/http';
import {NotificationsComponent} from '../components/advance/notifications/notifications.component';
import {AdvanceComponent} from '../components/advance/advance.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(FirstRoutes),
        SharedModule
    ],
    declarations: [
        FirstComponent,
        AdvanceComponent,
        NotificationsComponent],
    providers: [
        FirstService
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class FirstModule {}
