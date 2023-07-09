import { Component, Input, OnInit } from '@angular/core';
import { GIf } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
})
export class GifsCardComponent implements OnInit {

  @Input()
  public gif!: GIf;


  ngOnInit(): void {
    if ( !this.gif ) throw new Error('Gif property is requered');
  }
}
