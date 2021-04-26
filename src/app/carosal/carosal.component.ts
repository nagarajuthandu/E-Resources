import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carosal',
  templateUrl: './carosal.component.html',
  styleUrls: ['./carosal.component.css']
})
export class CarosalComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
    
    
  }
  images = ["assets/images/1.jpg","assets/images/2.jpg","assets/images/3.jpg"]
}
