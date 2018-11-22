import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  guardar(form) {
    console.log('guardado');
    console.log(form);
    console.log(form.value);
  }

}
