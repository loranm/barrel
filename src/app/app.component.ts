import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { selectIsHomePage } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isHomePage$ = this.store.pipe(
    select(selectIsHomePage),
    tap((value) => console.log(value))
  );

  constructor(private store: Store, private location: Location) {}

  public goBack(ev): void {
    console.log(ev);
    this.location.back();
  }
}
