import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { TemadeleteComponent } from './delete/temadelete/temadelete.component';
import { TemaeditComponent } from './edit/temaedit/temaedit.component';
import { PostagemeditComponent } from './edit/postagemedit/postagemedit.component';

const routes: Routes = [
  {path:'', redirectTo: 'entrar', pathMatch: 'full'},
  {path:'entrar', component: EntrarComponent},
  {path:'cadastrar', component: CadastrarComponent},
  {path:'inicio', component: InicioComponent},
  {path:'temas', component: TemaComponent},
  {path:'temaedit/:id', component: TemaeditComponent},
  {path:'temadelete/:id', component: TemadeleteComponent},
  {path:'postagemedit/:id', component: PostagemeditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
