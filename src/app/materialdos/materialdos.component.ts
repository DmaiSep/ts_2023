import { Component } from '@angular/core';
import { SidebarService } from '../shared/sidebardos/sidebar.service';

@Component({
  selector: 'app-materialdos',
  templateUrl: './materialdos.component.html',
  styleUrls: ['./materialdos.component.scss']
})
export class MaterialdosComponent {
  constructor(public sidebarservice: SidebarService,) { }

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
}
