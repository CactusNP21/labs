import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-lb7',
  standalone: true,
  imports: [],
  templateUrl: './lb8.component.html',
  styleUrl: './lb8.component.css'
})
export class Lb8Component {
  result = 'undefiend'

  constructor(http: HttpClient) {
  }

  async getPow(value: string) {
    const promise = fetch('http://localhost:3000/pow', {
      body: JSON.stringify({number: +value}),
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(r => r.json())
      .then(r => this.result = r.number);
  }
}
