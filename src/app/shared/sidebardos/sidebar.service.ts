import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  onemore = false;
  _hasBackgroundImage = true;
  public sizeDisplay: string = 'phone' || 'web';

  menus = [
    {
      title: '',
      type: 'header'
    },
    {
      title: 'Materiales educativos',
      icon: 'fas fa-book',
      active: true,
      type: 'dropdown',
      submenus: [
        {
          title: 'Libros de texto',
          url:'Libros',
          tipo: 'interno'
        },
        {
          title: 'Materiales audiovisuales',
          url:'Audiovisuales',
          tipo: 'interno'
        },
        {
          title: 'Materiales informáticos',
          url:'Informaticos',
          tipo: 'interno'
        }
        ,
        {
          title: 'Materiales para capacidades diferentes',
          url:'./RepositorioT/Capacidades_diferentes/',
          tipo: 'externo'
        }
        ,
        {
          title: 'Apuntes',
          url:'Apuntes',
          tipo: 'interno'
        },
        {
          title: 'Matriz de Recursos Audiovisuales',
          url:'MatricezA',
          tipo: 'interno'
        },
        {
          title: 'Matriz de Correspondencia',
          url:'MatrizC',
          tipo: 'interno'
        },
        {
          title: 'Círculos de lectura',
          url:'CirculoLectura',
          tipo: 'interno'
        },
        {
          title: 'Inglés en Telesecundaria',
          url:'InglesTele',
          tipo: 'interno'
        }
        ,
        {
          title: 'Programación Regular',
          url:'Programareg',
          tipo: 'interno'
        }
      ]
    },
    {
      title: 'Fortalecimiento de capacidades técnicas',
      icon: 'fas fa-edit',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Products',
          url:'',
          tipo: 'interno'
        },
        {
          title: 'Orders',
          url:'',
          tipo: 'interno'
        },
        {
          title: 'Credit cart',
          url:'',
          tipo: 'interno'
        }
      ]
    },
    {
      title: 'Innovación, estadística y evaluación',
      icon: 'fas fa-chart-area',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'General',
          url:'',
          tipo: 'interno'
        },
        {
          title: 'Panels',
          url:'',
          tipo: 'interno'
        },
        {
          title: 'Tables',
          url:'',
          tipo: 'interno'
        },
        {
          title: 'Icons',
          url:'',
          tipo: 'interno'
        },
        {
          title: 'Forms',
          url:'',
          tipo: 'interno'
        }
      ]
    },
    {
      title: 'Normatividad',
      icon: 'fas fa-list-alt',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Pie chart',
          url:'',
          tipo: 'interno'
        },
        {
          title: 'Line chart',
          url:'',
          tipo: 'interno'
        },
        {
          title: 'Bar chart',
          url:'',
          tipo: 'interno'
        },
        {
          title: 'Histogram',
          url:'',
          tipo: 'interno'
        }
      ]
    },
    {
      title: 'Calendario',
      icon: 'fa fa-calendar',
      active: false,
      type: 'simple',
      url: './assets/docs/calendario/CALENDARIO_ESCOLAR_2022-2023_v3.pdf'
    }
  ];
  breadcrumbs: any[] = [
    {url: 'Home',modulo:'Material Sugerido', seccion: ''},
    {url: 'Libros',modulo:'Materiales Educativos', seccion: 'Libros de texto'},
    {url: 'Audiovisuales',modulo:'Materiales Educativos', seccion: 'Materiales audiovisuales'},
    {url: 'Informaticos',modulo:'Materiales Educativos', seccion: 'Materiales informáticos'},
    {url: 'DebilidadV',modulo:'Materiales Educativos', seccion: 'Materiales para capacidades diferentes'},
    {url: 'Apuntes',modulo:'Materiales Educativos', seccion: 'Apuntes'},
    {url: 'MatricezA',modulo:'Materiales Educativos', seccion: 'Matriz de Recursos Audiovisuales'},
    {url: 'MatrizC',modulo:'Materiales Educativos', seccion: 'Matriz de Correspondencia'},
    {url: 'CirculoLectura',modulo:'Materiales Educativos', seccion: 'Círculos de lectura'},
    {url: 'InglesTele',modulo:'Materiales Educativos', seccion: 'Inglés en Telesecundaria'},
    {url: 'Programareg',modulo:'Materiales Educativos', seccion: 'Programación Regular'},
    
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
