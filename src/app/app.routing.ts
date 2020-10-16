import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AgrokrebsComponent } from './agrokrebs/agrokrebs.component';
import { ProductosComponent } from './productos/productos.component';
import { VideosComponent } from './videos/videos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CreditoComponent } from './credito/credito.component';
import { AdherentesComponent } from './adherentes/adherentes.component';
import { FertilizantesHComponent } from './fertilizantes-h/fertilizantes-h.component';
import { FertilizantesLComponent } from './fertilizantes-l/fertilizantes-l.component';
import { ReguladoresComponent } from './reguladores/reguladores.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'agrokrebs',
    component: AgrokrebsComponent
  },
  {
    path: 'productos',
    component: ProductosComponent,
  },
  {
    path: 'videos',
    component: VideosComponent
  },
  {
    path: 'galeria',
    component: GaleriaComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent

  },
  {
    path: 'credito',
    component: CreditoComponent

  },
  {
    path: 'adherentes',
    component: AdherentesComponent
  },
  {
    path: 'fertilizantesH',
    component: FertilizantesHComponent
  },
  {
    path: 'fertilizantesL',
    component: FertilizantesLComponent
  },
  {
    path: 'reguladores',
    component: ReguladoresComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
