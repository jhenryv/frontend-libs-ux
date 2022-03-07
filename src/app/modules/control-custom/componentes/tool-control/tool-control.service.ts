import { Injectable } from '@angular/core';
import { CardValue, IBreadCrumb } from 'projects/vuce2-custom/src/public-api';

@Injectable({
  providedIn: 'root'
})
export class ToolControlService {

  constructor() { }

  getDataCard(){
    let card: CardValue =
    {
      titulo: 'Titulo del card',
      contenido: 'Este es el texto del card',
      link: 'Completado',
      url_link: '#',
      path_image: 'assets/image/bootstrap-logo.jpg'
    };   
 
    return card;
  }

 getDataBreadCrumbs(){  
  let breadcrumbs : IBreadCrumb[] = [
    {   id: 1,
        texto: 'Inicio',
        url: '#',
        selected: false
    },
    {   id: 2,
        texto: 'Tramites',
        url: '#',
        selected: false
    },
    {   id: 3,
        texto: 'Solicitud',
        url: '#',
        selected: true
    }
    ];
  return breadcrumbs;
 }

  getDataNavBars(){
    let navBars: IBreadCrumb[] = [
      {   id: 1,
          texto: 'Home',
          url: '#',
          selected: true
      },
      {   id: 2,
          texto: 'Servicios',
          url: '#',
          selected: false
      },
      {   id: 3,
          texto: 'Consultas',
          url: '#',
          selected: false
      }
    ]
    return navBars;
  }

}
