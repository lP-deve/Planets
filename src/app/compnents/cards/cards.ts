import { Component, input } from '@angular/core';
import { PlanetOpj } from '../all/data';


@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
   
  itemInfo = input<PlanetOpj>()
}
