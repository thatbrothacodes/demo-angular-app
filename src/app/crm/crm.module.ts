import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CrmComponent } from './crm.component';
import { routes } from './crm-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CrmComponent]
})
export class CrmModule { }
