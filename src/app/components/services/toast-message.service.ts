import {Injectable} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {ToastParams} from "./ToastParams";

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  constructor(private messageService: ToastrService) { }

  showSuccess(params: ToastParams) {
    this.messageService.success( params.message, params.title, params.options );
  }
  showError(params: ToastParams) {
    this.messageService.error( params.message, params.title, params.options );
  }
  showWarning(params: ToastParams) {
    this.messageService.warning( params.message, params.title, params.options );
  }
  showInfo(params: ToastParams) {
    this.messageService.info( params.message, params.title, params.options );
  }


}
