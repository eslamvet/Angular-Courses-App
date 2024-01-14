import { Component, ComponentRef, Injectable, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Subject, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private rootViewContainer!:ViewContainerRef
  private showModalSubject = new BehaviorSubject(false)
  readonly showModalObs$ = this.showModalSubject.asObservable()
  scrollBarWidth:string

  constructor(){
    this.scrollBarWidth = this.getScrollbarWidth()
  }

  setRootViewContainerRef(viewContainerRef:ViewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }

  showModal(ref:TemplateRef<any>){
    this.rootViewContainer.createEmbeddedView(ref)
    document.body.style.overflowY = 'hidden'
    document.body.style.paddingRight = this.scrollBarWidth
    this.showModalSubject.next(true)
  }

  hideModal(){
    this.showModalSubject.next(false)
    this.rootViewContainer.clear()
    document.body.style.paddingRight = 'unset'
    document.body.style.overflowY = 'auto'
  }

  showModalComponent(component: Type<any>, inputs: {name:string,value:string}[] = []) {
    let comp = this.rootViewContainer.createComponent(component)
    inputs.forEach((i) => {
      comp.instance[i.name] = i.value
    })
    this.showModalSubject.next(true)
  }

  getScrollbarWidth() {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);
    const inner = document.createElement('div');
    outer.appendChild(inner);
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    document.body.removeChild(outer);
    return `${scrollbarWidth}px`;
  }

}
