import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { AuthService } from 'src/app/service/auth.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagemedit',
  templateUrl: './postagemedit.component.html',
  styleUrls: ['./postagemedit.component.css']
})
export class PostagemeditComponent implements OnInit {

  listaTemas: Tema[]
  tema: Tema = new Tema()
  idTema: number

  postagem: Postagem = new Postagem()

  constructor(
    private route: Router, 
    private temaService: TemaService, 
    private postagemService: PostagemService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0);

    if(environment.token == ''){
      this.route.navigate(['/entrar']);
      alert('Você precisa estar logado pra ver o feed... 😎')
    }

    let id = this.router.snapshot.params['id']
    this.buscarPostagem(id)
    this.listarTemas()
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

  buscarPostagem(id:number){
    this.postagemService.getPostagemById(id).subscribe((resp: Postagem) =>{
      this.postagem = resp
    })
  }


  editarPostagem(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) =>{
      this.postagem = resp;
      alert('Atualizado')
      this.route.navigate(['/inicio'])
    })
  }

}
