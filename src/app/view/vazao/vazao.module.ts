import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VazaoPageRoutingModule } from './vazao-routing.module';

import { VazaoPage } from './vazao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VazaoPageRoutingModule
  ],
  declarations: [VazaoPage],
  exports: [
    VazaoPage
  ],
})
export class VazaoPageModule {}
