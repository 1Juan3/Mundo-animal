import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LoginComponent } from './components/login/login.component';
import { FormVeterinarioComponent } from './components/form-veterinario/form-veterinario.component';
import { FormVeterinariaComponent } from './components/form-veterinaria/form-veterinaria.component';
import { FormDomiciliarioComponent } from './components/form-domiciliario/form-domiciliario.component';
import { TrabajaCoNosotrosComponent } from './components/trabaja-co-nosotros/trabaja-co-nosotros.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './components/products/products.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ViewFormVeterinariasComponent } from './components/view-form-veterinarias/view-form-veterinarias.component';
import { ViewFormsVeterinariosComponent } from './components/view-forms-veterinarios/view-forms-veterinarios.component';
import { ViewFormsDomiciliarioComponent } from './components/view-forms-domiciliario/view-forms-domiciliario.component';
import { AvailabilityComponent } from './components/availability/availability.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { CarritoComponent } from './components/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    AddProductComponent,
    SignInComponent,
    LoginComponent,
    FormVeterinarioComponent,
    FormVeterinariaComponent,
    FormDomiciliarioComponent,
    TrabajaCoNosotrosComponent,
    ProductsComponent,
    CreateUserComponent,
    SpinnerComponent,
    ViewFormVeterinariasComponent,
    ViewFormsVeterinariosComponent,
    ViewFormsDomiciliarioComponent,
    AvailabilityComponent,
    AppointmentFormComponent,
    AppointmentListComponent,
    CarritoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule, ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
  }),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
