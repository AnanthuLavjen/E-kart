import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { SlicePipe } from '@angular/common';
import { ProductspageComponent } from './productspage/productspage.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SlicePipe,NavComponent,ProductspageComponent,ContactsComponent,FooterComponent,SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ekart';

  data: any =[]
  constructor(public api:ApiService){}

  ngOnInit(){
    this.api.getData().subscribe(response=>{
      this.data=response
    })
  }
}
