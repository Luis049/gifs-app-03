import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { GIf } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor( private gifService: GifsService ) {}

  get gifs(): GIf[] {
    return this.gifService.gifList;
  }

}
