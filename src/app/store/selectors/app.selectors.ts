import * as fromRouter from '@ngrx/router-store';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { RouterStateUrl } from '../../models/router-state-url';

export const routerFeatureKey = 'router';

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>(routerFeatureKey);

export const selectIsHomePage = createSelector(getRouterState, (state) => {
  return state?.state.url === environment.homePageUrl;
});
