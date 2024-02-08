import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ApiService } from '../api.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-productspage',
  standalone: true,
  imports: [NavComponent,SlicePipe],
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