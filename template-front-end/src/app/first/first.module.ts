import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { FirstRoutes } from './first.routing';
import {SharedModule} from '../shared/shared.module';
import {FirstComponent} from './first.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(FirstRoutes),
        SharedModule
    ],
    declarations: [FirstComponent]
})

export class FirstModule {}
