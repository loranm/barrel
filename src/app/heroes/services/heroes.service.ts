import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  heroesList$: Observable<Hero[]> = this.http.get<Hero[]>(
    `${environment.heroesApiUrl}/heroes`
  );

  constructor(private http: HttpClient) {}
}
