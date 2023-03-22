import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AvailabilityComponent } from './components/availability/availability.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { FormDomiciliarioComponent } from './components/form-domiciliario/form-domiciliario.component';
import { FormVeterinariaComponent } from './components/form-veterinaria/form-veterinaria.component';
import { FormVeterinarioComponent } from './components/form-veterinario/form-veterinario.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { TrabajaCoNosotrosComponent } from './components/trabaja-co-nosotros/trabaja-co-nosotros.component';
import { ViewFormVeterinariasComponent } from './components/view-form-veterinarias/view-form-veterinarias.component';
import { ViewFormsDomiciliarioComponent } from './components/view-forms-domiciliario/view-forms-domiciliario.component';
import { ViewFormsVeterinariosComponent } from './components/view-forms-veterinarios/view-forms-veterinarios.component';

//guardas
import { RoleVeterinarioGuardGuard } from './Guards/role-veterinario-guard.guard';
import { RoleAdminGuardGuard } from './Guards/role-admin-guard.guard';
import { RoleClienteGuardGuard } from './Guards/role-cliente-guard.guard';
import { RoleSesionGuardGuard } from './Guards/sesion-guard.guard';
import { RoleVeterinariaGuardGuard } from './Guards/role-veterinaria-guard.guard';
import { IndexComponent } from './components/index/index.component';
import { ViewRemisionesComponent } from './components/view-remisiones/view-remisiones.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path:'index', component:IndexComponent },
  { path:'signIn', component:SignInComponent},
  { path: 'login', component:LoginComponent },
  { path: 'trabaja-con-nosotros', component:TrabajaCoNosotrosComponent},
  { path: 'listProduct', component: ListProductComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'edit/:id', component: AddProductComponent },
  { path:'form-veterinaria', component:FormVeterinariaComponent},
  { path: 'form-veterinario', component:FormVeterinarioComponent },
  { path: 'form-domiciliario', component:FormDomiciliarioComponent },
  { path:'create-user', component:CreateUserComponent},
  { path:'view-forms-veterinarias', component: ViewFormVeterinariasComponent },
  { path: 'view-forms-veterinarios', component:ViewFormsVeterinariosComponent },
  {path: 'view-forms-domiciliarios', component:ViewFormsDomiciliarioComponent},
  { path:'addAvailability', component:AvailabilityComponent, canActivate: [RoleVeterinarioGuardGuard] },
  { path:'addAppointment', component:AppointmentFormComponent },
  {path: 'view-remision', component:ViewRemisionesComponent},
  { path:'cart', component:CarritoComponent, canActivate:[RoleSesionGuardGuard] },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
