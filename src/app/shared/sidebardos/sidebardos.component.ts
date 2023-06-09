import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidebarService } from './sidebar.service';
@Component({
  selector: 'app-sidebardos',
  templateUrl: './sidebardos.component.html',
  styleUrls: ['./sidebardos.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class SidebardosComponent {
  menus = [];
  constructor(public sidebarservice: SidebarService) {
    this.menus = sidebarservice.getMenuList();
   }

  ngOnInit() {
  }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  toggle(currentMenu) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach(element => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }else{
      //console.log("fdfd");
    }
  }

  getState(currentMenu) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return this.sidebarservice.hasBackgroundImage;
  }
  //funcion para cerrar el sidebar cuando se da click a un submenu, solo si esta en modo movil
  toggleSidebarclose() {
    if(this.sidebarservice.mediaQuery() === 'phone'){
      this.sidebarservice.setSidebarState(true);
    }
  }
}
