import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(private route: Router, private temaService: TemaService) { }

  ngOnInit() {
    window.scroll(0,0);

    if(environment.token == ''){
      this.route.navigate(['/entrar']);
      alert('Tentando chegar aqui tem token meu bom?? 🤡')
    }
    this.listarTemas()
  }

  listarTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
      this.listaTemas = this.listaTemas.sort((a, b) => a.id - b.id)
    })
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp;
      alert("Tema cadastrado")
      this.tema = new Tema()
      this.listarTemas()
    })
  }

}
