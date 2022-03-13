import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent{

@Output()
buttonClickEvent: EventEmitter<any> = new EventEmitter<any>();

emitirEvento(evento: any): void {
  this.buttonClickEvent.emit(evento);
}
}
