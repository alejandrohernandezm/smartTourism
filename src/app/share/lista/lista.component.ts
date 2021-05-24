import { Component, OnInit } from '@angular/core';
import { Persona, PersonasService } from 'src/app/personas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  arrPersons: Persona[];

  constructor(private personService: PersonasService) { }

  ngOnInit(): void {
    this.personService.getPersonas$().subscribe(persons=>{
      this.arrPersons = persons;
    });
  }

}
