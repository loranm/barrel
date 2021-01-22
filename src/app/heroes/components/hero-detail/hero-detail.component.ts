import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectHero } from '../../state/selectors';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent {
  hero$ = this.store.pipe(select(selectHero));

  constructor(private store: Store) {}
}
