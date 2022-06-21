import { AlertaService } from './../service/alerta.service';
import { AuthService } from './../service/auth.service';
import { PostagemService } from './../service/postagem.service';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';
import { Postagem } from '../model/Postagem';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listaTemas: Tema[]
  tema: Tema = new Tema()
  idTema: number

  idUsuario = environment.id
  usuario: Usuario = new Usuario()

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  constructor(
    private route: Router, 
    private temaService: TemaService, 
    private postagemService: PostagemService,
    private auth: AuthService,
    private alerta: AlertaService
    ) { }

  ngOnInit() {
    window.scroll(0,0);

    if(environment.token == ''){
      this.route.navigate(['/entrar']);
      // this.alerta.error('Deslogado','Você precisa estar logado pra ver o feed... 😎')
    }

    this.auth.refreshToken()
    this.listarTemas()
    this.listarPostagens()

  }

  buscarUsuario(){
    this.auth.getUserById(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  listarTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  buscarTemaPorId(){
    this.temaService.getTemaById(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  listarPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }
  
  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.usuario.id = this.idUsuario
    this.postagem.usuario = this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp;
      alert('Postagem efetuada')
      this.postagem = new Postagem()
    })
  }
}
