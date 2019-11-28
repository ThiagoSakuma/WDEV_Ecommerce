import { Component, OnInit } from '@angular/core';
import{Produto} from '../produto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos;

  constructor() { 
    this.produtos=[
      new Produto('Caneta',10.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQi7kOsF3PBuQRduaOqtbvUlVCFtBLUP2DVo1d6Mt6fdpVNuOjN'),
      new Produto('Caderno',15.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbaO4lnFv4oMh8feM1-oY1cA8FSwn5Syb0Ucm1XU6JaftAWMQ4'),
      new Produto('Pendrive',5.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDhvt_d-IhRNNSWgVFAy4hWO7R3YWOQ8ykCeqLwSAVlZSq8prT'),
      new Produto('SSD',75.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQv0uvxCRisqhb1ZOby7gDNLOOcMeDt_ySfNTlIuDwUKxEZdPfs')
    ];
  }

  ngOnInit() {
  }

}
