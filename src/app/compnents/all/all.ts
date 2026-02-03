import { Component } from '@angular/core';
import { PlanetOpj } from './data';
import { Cards } from '../cards/cards';

@Component({
  selector: 'app-all',
  imports: [Cards],
  templateUrl: './all.html',
  styleUrl: './all.css',
})
export class All {

  planets: PlanetOpj[]=[
     { name: "Mercury", massKg: 3.30e23, orderFromSun: 1, image: "https://i.pinimg.com/1200x/06/ce/af/06ceaf5fc5faadcf1ccb340339b0c394.jpg" },
    { name: "Venus", massKg: 4.87e24, orderFromSun: 2, image: "https://i.pinimg.com/1200x/65/ba/bb/65babb75a2c3165d8e17a1e2c04eb146.jpg" },
    { name: "Earth", massKg: 5.97e24, orderFromSun: 3, image: "https://i.pinimg.com/1200x/73/1f/1a/731f1a51d7db01a545775bbb51496995.jpg" },
    { name: "Mars", massKg: 6.42e23, orderFromSun: 4, image: "https://i.pinimg.com/736x/1b/69/d2/1b69d2995364f68efe421913755c7011.jpg" },
    { name: "Jupiter", massKg: 1.90e27, orderFromSun: 5, image: "https://i.pinimg.com/736x/69/5a/d2/695ad2395a13b95a9d071bee572f99bd.jpg" },
    { name: "Saturn", massKg: 5.68e26, orderFromSun: 6, image: "https://i.pinimg.com/736x/58/27/42/5827424123f7dd17480615db5bee6ab5.jpg" },
    { name: "Uranus", massKg: 8.68e25, orderFromSun: 7, image: "https://i.pinimg.com/736x/78/ff/2f/78ff2fbbfe4486acf0dc8d9f74dc5dd2.jpg" },
    { name: "Neptune", massKg: 1.02e26, orderFromSun: 8, image: "https://i.pinimg.com/736x/e3/9b/39/e39b39f5fb718405afe9aa8e315d4ffd.jpg" },
    { name: "pluto", massKg: 1.82e26, orderFromSun: 9, image: "https://i.pinimg.com/1200x/76/41/15/764115c75d98d115ec35c7d76033894a.jpg" },
  
  ]
}
