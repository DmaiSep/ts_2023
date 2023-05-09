import { Component } from '@angular/core';
import { SidebarService } from '../shared/sidebar/sidebar.service';

@Component({
  selector: 'app-materialedu',
  templateUrl: './materialedu.component.html',
  styleUrls: ['./materialedu.component.scss']
})
export class MaterialeduComponent {
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
