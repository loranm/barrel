import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';

import * as fromHeroesReducer from '../reducers';

export const heroesFeatureKey = 'heroes';

export interface State extends fromRoot.State {
  heroes: fromHeroesReducer.HeroState;
}

const getHeroesFeatureState = createFeatureSelector<fromHeroesReducer.HeroState>(
  heroesFeatureKey
);

export const selectHeroes = createSelector(
  getHeroesFeatureState,
  (state) => state.list
);

export const selectHero = createSelector(
  getHeroesFeatureState,
  fromRoot.getRouterState,
  (state, route) => {
    return state.list.find((hero) => hero._id === route.state.params.heroId);
  }
);
