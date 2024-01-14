import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum TOAST_TYPE {
  SUCCESS= 'success',
  WARNING= 'warning',
  DANGER = 'danger'
};

interface Toast{
  message:string
  type:TOAST_TYPE
  id:number
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new BehaviorSubject<Toast[]>([])
  readonly toastObs$
  constructor() {
    this.toastObs$ = this.toastSubject.asObservable()
  }

  addToasts(toast:Toast){
      this.toastSubject.value.unshift(toast)
      this.toastSubject.next(this.toastSubject.value)
      new Promise<any>((resolve)=>{
        let timer = setTimeout(()=>{
          const toasts = this.toastSubject.value
          toasts.splice(toasts.length-1,1)
          this.toastSubject.next(toasts)
          resolve(timer)
        },3000)
      }).then(timer=>clearTimeout(timer))
  }

}
