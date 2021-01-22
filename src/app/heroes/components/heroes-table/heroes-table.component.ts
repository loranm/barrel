import { Output, EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.scss'],
})
export class HeroesTableComponent implements OnInit {
  @Input() heroes: Hero[];
  @Output() onSelectHero: EventEmitter<Hero> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClicked(hero: Hero) {
    this.onSelectHero.emit(hero);
  }
}
