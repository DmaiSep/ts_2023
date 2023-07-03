import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  public sizeDisplay: string = 'phone' || 'web';
  menus = [
    {
      title: '',
      type: 'header'
    },
    {
      title: 'Conoce tu libro',
      icon: 'fa fa-book-open',
      active: false,
      type: 'interno',
      url: 'Home',
      target: false,
    },
    {
      title: 'Materiales educativos',
      icon: 'fas fa-book',
      active: true,
      type: 'dropdown',
      target: false,
      submenus: [
        {
          title: 'Libros de texto',
          url:'Libros',
          tipo: 'interno'
        },
        {
          title: 'Videos para proyectos academicos',
          url:'VideoPA',
          tipo: 'interno'
        },{
          title: 'Videos para proyectos de integración comunitaria',
          url:'VideoPI',
          tipo: 'interno'
        },
        {
          title: 'Informáticos para proyectos academicos',
          url:'InformaticoPA',
          tipo: 'interno'
        },{
          title: 'Informáticos para proyectos de integración comunitaria',
          url:'InformaticoPI',
          tipo: 'interno'
        },
        {
          title: 'Cortometrajes',
          url:'Cortometraje',
          tipo: 'interno'
        }
        
      ]
    },
    {
      title: 'Materiales 2º y 3º grado',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      url: './#/Materiales/Inicio/(Secc:Home)',
      target: false,
    },
    {
      title: 'Calendario',
      icon: 'fa fa-calendar',
      active: false,
      type: 'simple',
      target: true,
      url: './RepositorioT/calendario/CALENDARIO_ESCOLAR_2022-2023_v3.pdf'
    }
   
  ];
  breadcrumbs: any[] = [
    {url: 'Home',modulo:'Conoce tu libro', seccion: ''},
    {url: 'Libros',modulo:'Materiales Educativos', seccion: 'Libros de texto'},
    {url: 'Ximhai',modulo:'Materiales Educativos', seccion: 'Colección Ximhai'},
    {url: 'VideoPA',modulo:'Materiales Educativos', seccion: 'Videos para proyectos académicos'},
    {url: 'VideoPI',modulo:'Materiales Educativos', seccion: 'Videos para proyectos de integración comunitaria'},
    {url: 'InformaticoPA',modulo:'Materiales Educativos', seccion: 'Informaticos integradores PPA'},
    {url: 'InformaticoPI',modulo:'Materiales Educativos', seccion: 'Informaticos integradores comunitarios'},
    {url: 'Cortometraje',modulo:'Materiales Educativos', seccion: 'Cortometrajes'},
    
  ];

  constructor(public breakpointObserver: BreakpointObserver) {
    //verifica la resolucion de la pantalla
    this.mediaQuery();
    if(this.sizeDisplay === 'phone'){
      //esconde el sidebar
      this.toggled = true;
    }else{
      //visualiza el siedbar
      this.toggled = false;
    }
    //console.log(this.toggled, this.sizeDisplay);
   }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }
  getBreadcrumbs() {
    return this.breadcrumbs;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }

  //funcion que ayuda a detectar si es phone o web
  public mediaQuery() {

    this.breakpointObserver
      .observe(Breakpoints.Small)
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            //AQUI SERA TRUE SOLO SI ESTA EN RESOLUCION DE CELULAR
            this.sizeDisplay = 'phone';
          }
        });

    this.breakpointObserver
      .observe(Breakpoints.Web)
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            //AQUI SERA TRUE SOLO SI ES RESOLUCION PARA WEB
            this.sizeDisplay = 'web';
          }
        });

    return this.sizeDisplay;
  }
}
