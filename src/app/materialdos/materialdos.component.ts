import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../shared/sidebardos/sidebar.service';
import { ActivatedRoute } from '@angular/router'; // Importar
import { ModalbComponent } from './modalb/modalb.component'; 
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-materialdos',
  templateUrl: './materialdos.component.html',
  styleUrls: ['./materialdos.component.scss']
})
export class MaterialdosComponent{
  
  modalRef: MDBModalRef | null = null;
  direccion : string;

  urls: any[] ;
  cookieValue: string;
  constructor(public sidebarservice: SidebarService,private route: ActivatedRoute, private modalService: MDBModalService,private cookieService: CookieService) { 
  }
 
  ngOnInit(): void {
    this.cookieValue = this.cookieService.get('modal');
    if(!Boolean(this.cookieValue)){
      this.cookieService.set('modal', 'true' ,1);
      this.openModalb();
    }
   
    

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
  rutas(){
    this.urls = this.sidebarservice.getBreadcrumbs();
    this.route.children[0].url.subscribe(res => {
      this.direccion = res[0].path;
    });
    //console.log(this.ruta);
  }
  onActive(){
    window.scroll(0,0);
  }
  
  openModalb() {
    this.modalRef = this.modalService.show(ModalbComponent)
      
    setTimeout(() => {
      this.modalRef.hide();
    }, 3000);


  }


}
