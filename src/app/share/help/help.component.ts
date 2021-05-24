import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  celsius = 0;
   Fahrenheit = 0;
   
  

  changeCelsius(){
    this.celsius = (this.Fahrenheit - 32) * 5/9;
  }

  changeFahrenheit() {
    this.Fahrenheit = this.celsius * 9/5 +35;
  }

  

}
