import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IronManPageRoutingModule } from './iron-man-routing.module';

import { IronManPage } from './iron-man.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IronManPageRoutingModule
  ],
  declarations: [IronManPage]
})
export class IronManPageModule {}
