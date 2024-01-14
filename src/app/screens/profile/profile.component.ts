import { TOAST_TYPE, ToastService } from '@services/toast.service';
import { UserService } from '@services/user.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private userService:UserService,private toastService:ToastService){}

  updateUser(form:NgForm){
    if(form.valid){
      this.userService.setUser(form.value)
      this.toastService.addToasts({message:'user updated successfully',type:TOAST_TYPE.SUCCESS,id:Date.now()})
    }
  }

  get user$(){
    return this.userService.userObs$
  }
}
