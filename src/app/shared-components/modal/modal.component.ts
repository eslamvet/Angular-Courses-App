import { ModalService } from '@services/modal.service';
import { trigger, transition, style, group, animate, query, animateChild, state } from '@angular/animations';
import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  animations:[trigger('fade', [
    state('show', style({
      visibility: 'visible'
    })),
    state('hide', style({
      visibility: 'hidden'
    })),
    transition('hide => show', [
      group([
        animate('250ms linear'),
        query('@translate', animateChild())
      ])
    ]),
    // transition('show => hide', [
    //   group([
    //     animate('250ms linear'),
    //     query('@translate', animateChild())
    //   ])
    // ])
  ]), trigger('translate', [
    transition('hide => show', [
      style({ transform:'translateY(-50px)' }),
      animate('150ms ease-out', style({ transform:'translateY(0)' }))
    ]),
    // transition('show => hide', [
    //   animate('150ms ease-out', style({ transform:'translateY(-50px)' }))
    // ])
  ])]
})

export class ModalComponent implements AfterViewInit {
  @ViewChild('modalContent',{read:ViewContainerRef}) modalViewContainerRef!:ViewContainerRef
  constructor(public modalService:ModalService){}

  ngAfterViewInit(): void {
    this.modalService.setRootViewContainerRef(this.modalViewContainerRef)
  }

}
