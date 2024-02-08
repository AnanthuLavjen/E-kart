import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { SlicePipe } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { ProductspageComponent } from './productspage/productspage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SlicePipe,NavComponent,ProductspageComponent],
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
