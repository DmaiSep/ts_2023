import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../shared/sidebardos/sidebar.service';
import { ActivatedRoute } from '@angular/router'; // Importar

@Component({
  selector: 'app-materialdos',
  templateUrl: './materialdos.component.html',
  styleUrls: ['./materialdos.component.scss']
})
export class MaterialdosComponent{
  direccion : string;
  urls: any[] ;
  constructor(public sidebarservice: SidebarService,private route: ActivatedRoute) { }

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
  
}
