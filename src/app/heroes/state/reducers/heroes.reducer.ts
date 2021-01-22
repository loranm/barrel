import { createReducer, on } from '@ngrx/store';
import { Hero } from '../../models/hero';
import * as fromHeroesActions from '../actions';

export interface HeroState {
  list: Hero[];
}

export const initialState: HeroState = {
  list: [],
};

export const reducer = createReducer(
  initialState,
  on(fromHeroesActions.loadHeroesSuccess, (state, heroes) => ({
    ...state,
    list: heroes.list,
  }))
  // on(fromHeroesActions.selectHero, (state, { hero }) => ({
  //   ...state,
  //   selectedHero: hero,
  // }))
);
