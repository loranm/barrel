import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../store';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  isHomepage$ = this.store.pipe(select(fromRoot.selectIsHomePage));
  constructor(private store: Store) {}
}
