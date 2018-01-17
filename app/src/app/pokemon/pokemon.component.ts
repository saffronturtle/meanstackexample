import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  constructor(private http: HttpClient) { }

  pokemon: any;

  ngOnInit() {
    this.http.get('/pokemon').subscribe(data => {
      this.pokemon = data;
    });
  }

}
