import { Postagem } from "./Postagem";

export class Usuario {
  public foto: string;
  public id: number
  public nome: string
  public usuario: string;
  public senha: string;
  public tipo: string;
  public postagem: Postagem[]
}