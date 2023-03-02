import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
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

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
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
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
