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
          url:'Libros'
        },
        {
          title: 'Materiales audiovisuales',
          url:'Audiovisuales'
        },
        {
          title: 'Materiales informáticos',
          url:'Informaticos'
        }
        ,
        {
          title: 'Materiales para debilidad visual',
          url:'DebilidadV'
        }
        ,
        {
          title: 'Apuntes',
          url:'Apuntes'
        },
        {
          title: 'Matriz de Recursos Audiovisuales',
          url:'MatricezA'
        },
        {
          title: 'Matriz de Correspondencia',
          url:'MatrizC'
        },
        {
          title: 'Círculos de lectura',
          url:'CirculoLectura'
        },
        {
          title: 'Inglés en Telesecundaria',
          url:'InglesTele'
        }
        ,
        {
          title: 'Programación Regular',
          url:'Programareg'
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

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
