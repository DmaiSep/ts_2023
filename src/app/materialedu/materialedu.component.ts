import { Component } from '@angular/core';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-materialedu',
  templateUrl: './materialedu.component.html',
  styleUrls: ['./materialedu.component.scss']
})
export class MaterialeduComponent {
  form: FormGroup;
  busquedaDat: String; 

  constructor(public sidebarservice: SidebarService, private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      Ibusqueda  : ['', [ Validators.required]  ],
    });
   }

  ngOnInit(): void {
  }
  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
  toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }
  oupen(ruta){
    self.top.location.href = ruta;
  }

  buscardato(){
    //verifica si hay algun valor seleccionado
    if(this.form.get('Ibusqueda').value){
      
    }
    

  }
}
