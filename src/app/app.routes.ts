import { Routes } from '@angular/router';
import { ProductspageComponent } from './productspage/productspage.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/home/login/login.component';
import { ItemComponent } from './item/item.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [

    {path: '',component:HomeComponent},
    {path: 'Products',component:ProductspageComponent},
    {path:'Contacts',component:ContactsComponent},
    {path:'Login',component:LoginComponent},
    {path:'Signup',component:SignupComponent},
    {path:'Products/:id',component:ItemComponent},
    {path:'**',component:PageNotFoundComponent}
];
