import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { SlicePipe } from '@angular/common';
import { NavComponent } from '../components/nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productspage',
  standalone: true,
  imports: [NavComponent,SlicePipe,FooterComponent,RouterLink],
  templateUrl: './productspage.component.html',
  styleUrl: './productspage.component.css'
})
export class ProductspageComponent {
  data: any =[]
  constructor(public api:ApiService){}

  ngOnInit(){
    this.api.getData().subscribe(response=>{
      this.data=response
    })
}
}