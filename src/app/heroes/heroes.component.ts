import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = this.heroService.getAll();

  phrase: string = '';
  filterKey: string = 'name';
  filterKeys: string[] = Object.keys(new Hero());
  columnKey: string = 'id';

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void { }

  onColumnSelect(key: string): void {
    this.columnKey = key;
  }

}
