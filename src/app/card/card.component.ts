import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  titulo: string = 'Titulo'

  @Input()
  cifrao: string = '$'

  @Input()
  subtitulo: string = 'Subtitulo'

  @Input()
  conteudo1: string = 'Conteudo1'

  @Input()
  conteudo2: string = 'Conteudo2'

  @Input()
  conteudo3: string = 'Conteudo3'

  @Input()
  bg: string = ''

  @Input()
  color: string = ''

  @Input()
  id: string = ''

  @Output()
  buttonClickEvent: EventEmitter<any> = new EventEmitter<any>()
  
  emitirEvento():void {
    this.buttonClickEvent.emit()
  }
}
