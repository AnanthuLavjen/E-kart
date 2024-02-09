import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavComponent } from '../components/nav/nav.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NavComponent,FooterComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
