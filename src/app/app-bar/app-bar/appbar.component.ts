import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appbar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
})
export class AppBarComponent {
  @Input() title = 'OK ';
  @Input() isHomepage = true;
}
