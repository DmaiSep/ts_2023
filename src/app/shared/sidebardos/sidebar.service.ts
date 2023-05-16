import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
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
          title: 'Materiales para debilidad visual',
          url:'https://telesecundaria.sep.gob.mx/Content/Discapacitados/',
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
        ,
        {
          title: 'Matrices',
          url:'Matrices',
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
        },
        {
          title: 'Orders'
        },
        {
          title: 'Credit cart'
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
        },
        {
          title: 'Panels'
        },
        {
          title: 'Tables'
        },
        {
          title: 'Icons'
        },
        {
          title: 'Forms'
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
        },
        {
          title: 'Line chart'
        },
        {
          title: 'Bar chart'
        },
        {
          title: 'Histogram'
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
    {url: 'DebilidadV',modulo:'Materiales Educativos', seccion: 'Materiales para debilidad visual'},
    {url: 'Apuntes',modulo:'Materiales Educativos', seccion: 'Apuntes'},
    {url: 'MatricezA',modulo:'Materiales Educativos', seccion: 'Matriz de Recursos Audiovisuales'},
    {url: 'MatrizC',modulo:'Materiales Educativos', seccion: 'Matriz de Correspondencia'},
    {url: 'CirculoLectura',modulo:'Materiales Educativos', seccion: 'Círculos de lectura'},
    {url: 'InglesTele',modulo:'Materiales Educativos', seccion: 'Inglés en Telesecundaria'},
    {url: 'Programareg',modulo:'Materiales Educativos', seccion: 'Programación Regular'},
    {url: 'Matrices',modulo:'Materiales Educativos', seccion: 'Matrices'},
    
  ];
  constructor() { }

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
}
