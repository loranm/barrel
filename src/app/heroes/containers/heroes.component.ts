import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Hero } from '../models/hero';
import * as fromHeroesState from '../state';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  constructor(private store: Store) {}

  heroes$ = this.store.pipe(select(fromHeroesState.selectHeroes));

  ngOnInit(): void {
    this.store.dispatch(fromHeroesState.loadHeroes());
  }

  selectHero(hero: Hero): void {
    this.store.dispatch(fromHeroesState.selectedHero({ hero }));
  }
}
