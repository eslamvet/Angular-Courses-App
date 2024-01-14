import { Injectable } from '@angular/core';
import { User } from '@interfaces/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User | null>(null)
  readonly userObs$ : Observable<User | null>

  constructor() {
    this.userObs$ = this.userSubject.asObservable()
  }

  setUser(user:User){
    this.userSubject.next(user)
  }

  getUser(){
    return this.userSubject.value
  }

}
