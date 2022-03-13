import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '08_03';

  tipo: string = 'text'

  cardConteudo: string = '500 GB Storage'


  alertar(){
    alert("Você será encaminhado as melhores promoções!")
  }
  
  alertar2(e: any) {
    console.log("Evento execultado!")
    console.log(e)
  }
  
  constructor(private _snackBar: MatSnackBar) {}

  pacoteEscolhido():void {
    this._snackBar.open('Pacote escolhido!', 'Fechar')
  }
}
