import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './containers/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromState from './state';
import { MaterialModule } from '@app/material';
import { HeroesTableComponent } from './components/heroes-table/heroes-table.component';

@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent, HeroesTableComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    StoreModule.forFeature(fromState.heroesFeatureKey, fromState.reducer),
    EffectsModule.forFeature([fromState.HeroesEffects]),
  ],
})
export class HeroesModule {}
