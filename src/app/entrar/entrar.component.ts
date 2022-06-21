import { AlertaService } from './../service/alerta.service';
import { AuthService } from './../service/auth.service';
import { UsuarioLogin } from './../model/UsuarioLogin';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(private auth: AuthService, private route: Router, private alerta: AlertaService) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
      this.auth.entrar(this.usuarioLogin).subscribe({
        next: (resp: UsuarioLogin) => {
          this.usuarioLogin = resp

          environment.foto = this.usuarioLogin.foto
          environment.nome = this.usuarioLogin.nome
          environment.id = this.usuarioLogin.id
          environment.token = this.usuarioLogin.token
          environment.tipo = this.usuarioLogin.tipo

          this.alerta.sucesso('','Usuário logado com sucesso')
          this.route.navigate(['/inicio'])

        },
        error: erro => {
          if(erro.status == 401){
            this.alerta.error('Deu ruim',"usuario ou senha inválidos")
          }
        }
      })
  }

}
