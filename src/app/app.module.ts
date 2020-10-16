import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { FormComponent } from '../commons/form/form.component';
import { InicioComponent } from './inicio/inicio.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CreditoComponent } from './credito/credito.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AgrokrebsComponent } from './agrokrebs/agrokrebs.component';
import { ProductosComponent } from './productos/productos.component';
import { VideosComponent } from './videos/videos.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormCreditComponent } from '../commons/form-credit/form-credit.component'
import { ModalVideoComponent } from '../commons/modal-video/modal-video.component';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';


// Override JSON.parse for debug purposes
(function () {
  var parse = JSON.parse;

  JSON.parse = function (str) {
      try {
          return parse.apply(this, arguments);
      } catch (e) {
          console.log('Error parsing', arguments);
          throw e;
      }
  }
}());


// Override XMLHttpRequest.open
(function() {
  var origOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function() {
      this.addEventListener('load', function() {
          console.log('Http Response', this.responseText, this);
      });
      origOpen.apply(this, arguments);
  };
})();

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    FormComponent,
    InicioComponent,
    GaleriaComponent,
    CreditoComponent,
    ContactoComponent,
    AgrokrebsComponent,
    ProductosComponent,
    VideosComponent,
    LoginComponent,
    FormCreditComponent,
    ModalVideoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
