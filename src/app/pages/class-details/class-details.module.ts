import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassDetailsComponent } from './class-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ClassDetailsComponent }]),
  ],
  declarations: [ClassDetailsComponent]
})
export class ClassDetailsModule { }
