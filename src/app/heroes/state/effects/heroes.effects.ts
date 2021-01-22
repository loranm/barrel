import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HeroesService } from '../../services/heroes.service';
import * as fromHeroesActions from '../actions/heroes.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class HeroesEffects {
  loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromHeroesActions.loadHeroes),
      mergeMap(() =>
        this.heroesService.heroesList$.pipe(
          map((heroes) =>
            fromHeroesActions.loadHeroesSuccess({ list: heroes })
          ),
          catchError((error) => of(fromHeroesActions.loadHeroessFailure(error)))
        )
      )
    )
  );

  selectHero$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromHeroesActions.selectedHero),
        map(({ hero }) => {
          this.router.navigate([`heroes/detail/${hero._id}`]);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
}
