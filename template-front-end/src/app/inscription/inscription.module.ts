import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {InscriptionRoutes} from './inscription.routing';
import {InscriptionComponent} from './inscription.component';


@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(InscriptionRoutes),
      SharedModule
  ],
  declarations: [InscriptionComponent]
})
export class InscriptionModule { }
