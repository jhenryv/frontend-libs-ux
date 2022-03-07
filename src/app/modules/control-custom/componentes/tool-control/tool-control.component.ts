import { Component, OnInit } from '@angular/core';
import { CardValue, IBreadCrumb } from 'projects/vuce2-custom/src/public-api';
import { ToolControlService } from './tool-control.service';

@Component({
  selector: 'app-tool-control',
  templateUrl: './tool-control.component.html',
  styleUrls: ['./tool-control.component.scss']
})
export class ToolControlComponent implements OnInit {
  titulo: string = "Herramientas de Controles";
  breadCrumbs: IBreadCrumb[];
  navBars: IBreadCrumb[];
  card: CardValue;
  alerta:string;

  link: string;
  url_link: string;

  label_icon: string;
  path_icon: string;
  url_label_icon: string;
  
  icon_alert: string;
  url_badge: string;
  path_img_badge: string;
  valor_badge: string;

  constructor(private service: ToolControlService) { }

  ngOnInit(): void {
    this.navBars = this.service.getDataNavBars();
    this.breadCrumbs = this.service.getDataBreadCrumbs();
    this.card = this.service.getDataCard();
    this.alerta = 'Esto es una alerta con icono';
    this.icon_alert = 'bi bi-exclamation-triangle-fill';
    this.link =  'Olvidó su contraseña';
    this.url_link = 'http://www.google.com';
    this.label_icon = 'Bienvenidos al sistema';
    this.path_icon = 'assets/image/bootstrap-logo.jpg';
    this.url_label_icon = '#';        
    this.url_badge = 'http://www.yahoo.com';
    this.path_img_badge= 'assets/image/bootstrap-logo.jpg';
    this.valor_badge = '50'; 
  }

}
