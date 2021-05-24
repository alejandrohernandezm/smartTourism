import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

export interface Persona {
  name: string;
  lastname: string;
  email: string;
  country: string;
  phone: string;
  message: string;
} 

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private personas:Persona[];
  private personas$: Subject<Persona[]>; 

  constructor() { 
    this.personas = [];
    this.personas$ = new Subject();
  }

  addPersona(pPersona: Persona){
    this.personas.push(pPersona);
    this.personas$.next(this.personas);
  }

  getPersonas$(): Observable<Persona[]> {
    return this.personas$.asObservable();
  }



}
