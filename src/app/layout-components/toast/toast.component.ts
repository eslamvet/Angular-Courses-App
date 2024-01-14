import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TOAST_TYPE, ToastService } from '@services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('toastTrigger', [
      transition(":enter",[style({opacity:0,transform:'translateY(-50px)'}),animate('200ms ease-in-out',style({opacity:1,transform:'translateY(0)'}))]),
      transition(":leave",[animate('100ms ease-in-out',style({opacity:0,transform:'translateY(50px)'}))]),
    ])
  ]
})
export class ToastComponent {
  toastTypes = TOAST_TYPE
  constructor(public toastSer:ToastService){}

  trackBy(index:number,item:any){
    return item.id
  }

  get toasts$(){
    return this.toastSer.toastObs$
  }

}
