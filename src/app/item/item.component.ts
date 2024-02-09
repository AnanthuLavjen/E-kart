import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { FooterComponent } from '../footer/footer.component';
import { NavComponent } from '../components/nav/nav.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [FooterComponent,NavComponent,RouterLink],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  constructor(private routeId: ActivatedRoute,private api:ApiService){}
  data:any=[]
  rating: number = 0;
  ngOnInit(){
      this.api.getData().subscribe((res: any)=>{
        
        let id = this.routeId.snapshot.paramMap.get('id');

        let response = res;

        let product = response.filter((e: any ) => e.id ==id );

        this.data = product[0];

      })
  }
}
