import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent {
  //envia los datos al componente padre
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private _formBuilder: FormBuilder){
    this.form = this._formBuilder.group({
      Ibusqueda  : ['', [ Validators.required]  ],
    });
  }
  form: FormGroup;
  buscardato(){
    //verifica si hay algun valor seleccionado
    if(this.form.get('Ibusqueda').value){
      this.messageEvent.emit(this.form.get('Ibusqueda').value);
      //envia los datos al componente padre
    }else{
      this.messageEvent.emit(undefined);
    }
    
    

  }
}
