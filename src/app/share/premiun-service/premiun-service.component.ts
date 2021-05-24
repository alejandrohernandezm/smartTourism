import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-premiun-service',
  templateUrl: './premiun-service.component.html',
  styleUrls: ['./premiun-service.component.css']
})
export class PremiunServiceComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
