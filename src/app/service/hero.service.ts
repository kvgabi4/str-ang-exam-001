import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes: Hero[] = [
    {
      id: 1,
      name: 'Tarzan',
      superPower: 'jumping',
      address: 'jungle - tree house',
    },
    {
      id: 2,
      name: 'Jane',
      superPower: 'swimming',
      address: 'jungle - tree house',
    },
    {
      id: 3,
      name: 'Chita',
      superPower: 'climbing',
      address: 'jungle - trees',
    },
    {
      id: 4,
      name: 'Elephant',
      superPower: 'trumpeting',
      address: 'jungle - ground',
    },
    {
      id: 5,
      name: "Tarzan's son",
      superPower: 'crying',
      address: 'jungle - tree house',
    },
  ];

  constructor() { }

  getAll():Hero[] {
    return this.heroes;
  }
}
