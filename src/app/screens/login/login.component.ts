import { TOAST_TYPE, ToastService } from '@services/toast.service';
import { ModalService } from '@services/modal.service';
import { UserService } from '@services/user.service';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() redirectUrl!:string

  constructor(private userService:UserService,private modalService:ModalService,private toastService:ToastService){}

  userLoginHandler(form:NgForm){
    if(form.valid){
      this.userService.setUser({fullName:form.value.fullName,firstName:form.value.fullName,userType:'choose',experience:'choose',expertise:'choose'})
      this.toastService.addToasts({message:'user login successfully',type:TOAST_TYPE.SUCCESS,id:Date.now()})
      this.modalService.hideModal()
    }
  }

}
