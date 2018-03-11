import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DemosComponent } from './demos.component';
import { routes } from './demos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DemosComponent],
  exports: [
  ]
})
export class DemosModule {}
