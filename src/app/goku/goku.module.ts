import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GokuPageRoutingModule } from './goku-routing.module';

import { GokuPage } from './goku.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GokuPageRoutingModule
  ],
  declarations: [GokuPage]
})
export class GokuPageModule {}
