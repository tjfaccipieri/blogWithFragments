import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor(private toast: ToastrService) { }

  sucesso(title: any, message: any){
    this.toast.success(message, title)
  }

  error(title: any, message: any){
    this.toast.error(message, title)
  }

  info(title: any, message: any){
    this.toast.info(message, title)
  }
}
