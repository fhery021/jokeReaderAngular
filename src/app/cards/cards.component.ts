import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';

interface DataResponse {
  id: number;
  joke: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {

  public jokes: DataResponse[] = [];
  
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("http://192.168.1.149:8080/jokes/getRandomJokes/25")
    .subscribe(data =>{
      for(var i=0; i<25; i++){
        this.jokes.push(<DataResponse>data[i]);
      }
    })

  }

}
