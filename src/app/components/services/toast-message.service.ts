import { Injectable } from '@angular/core';
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  constructor(private messageService: MessageService) { }

  showSuccess(message: string) {
    this.messageService.add({severity:'success', summary: 'Success', detail: message});
  }

  showInfo(message: string) {
    this.messageService.add({severity:'info', summary: 'Info', detail: message});
  }

  showWarn(message: string) {
    this.messageService.add({severity:'warn', summary: 'Warn', detail: message});
  }

  showError(message: string) {
    this.messageService.add({severity:'error', summary: 'Error', detail: message});
  }

  showCustom(message: string) {
    this.messageService.add({severity:'custom', summary: 'Custom', detail: message, icon: 'pi-file'});
  }

  showTopLeft(message: string) {
    this.messageService.add({key: 'tl', severity:'info', summary: 'Info', detail: message});
  }

  showTopCenter(message: string) {
    this.messageService.add({key: 'tc', severity:'warn', summary: 'Warn', detail: message});
  }

  showBottomCenter(message: string) {
    this.messageService.add({key: 'bc', severity:'success', summary: 'Success', detail: message});
  }

  // showConfirm(message: string) {
  //   this.messageService.clear();
  //   this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:message});
  // }

  showMultiple() {
    this.messageService.addAll([
      {severity:'success', summary:'Message 1', detail:'Message Content'},
      {severity:'info', summary:'Message 2', detail:'Message Content'},
      {severity:'warn', summary:'Message 3', detail:'Message Content'}
    ]);
  }

  showSticky(message: string) {
    this.messageService.add({severity:'info', summary: 'Sticky', detail: message, sticky: true});
  }

  // onConfirm() {
  //   this.messageService.clear('c');
  // }
  //
  // onReject() {
  //   this.messageService.clear('c');
  // }

  clear() {
    this.messageService.clear();
  }

}
