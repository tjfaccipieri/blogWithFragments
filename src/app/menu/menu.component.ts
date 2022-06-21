import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private route: Router) {}

  nome = environment.nome
  foto = environment.foto

  ngOnInit(){}

  sair() {
    environment.foto = '';
    environment.nome = '';
    environment.id = 0;
    environment.token = '';
    environment.tipo = '';

    this.route.navigate(['/entrar'])
  }
}
