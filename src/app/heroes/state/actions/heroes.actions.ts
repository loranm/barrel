import { createAction, props } from '@ngrx/store';
import { Hero } from '../../models/hero';

export const loadHeroes = createAction('[Heroes] Load Heroess');

export const loadHeroesSuccess = createAction(
  '[Heroes] Load Heroess Success',
  props<{ list: Hero[] }>()
);

export const loadHeroessFailure = createAction(
  '[Heroes] Load Heroess Failure',
  props<{ error: any }>()
);

export const selectedHero = createAction(
  '[Heroes] select hero',
  props<{ hero: Hero }>()
);
