import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/material';
import { AppBarComponent } from './app-bar/appbar.component';

@NgModule({
  declarations: [AppBarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [AppBarComponent],
})
export class AppBarModule {}
