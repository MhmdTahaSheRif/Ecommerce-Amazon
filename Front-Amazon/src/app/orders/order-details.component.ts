import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderData } from 'src/interfaces/order'; // Import the OrderData interface

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  orders: OrderData[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const cartId = localStorage.getItem('cartId');
    if (!cartId) {
      console.error('Cart ID not found in local storage.');
      return;
    }

    this.http.get<OrderData[]>(`http://localhost:5189/api/Order/Cart/${cartId}`)
      .subscribe(
        (data) => {
          console.log('Order details retrieved successfully:', data);
          this.orders = data;
        },
        (error) => {
          console.error('Error retrieving order details:', error);
        }
      );
  }
}
