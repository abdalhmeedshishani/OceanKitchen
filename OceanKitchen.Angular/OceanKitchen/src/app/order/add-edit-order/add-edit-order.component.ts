import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { PageMode } from 'src/app/enums/pageMode.Enum';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Order } from 'src/app/models/order/order.model';
import { Dish } from 'src/app/models/dish/dish.model';
import { Guest } from 'src/app/models/guest/guest.model';
import { GuestService } from 'src/app/services/guest.service';
import { DishService } from 'src/app/services/dish.service';
import { UploaderImage } from 'src/app/upload/UploaderImage.data';


@Component({
  selector: 'app-add-edit-order',
  templateUrl: './add-edit-order.component.html',
  styleUrls: ['./add-edit-order.component.css'],
})
export class AddEditOrderComponent implements OnInit {
  orderId?: number;
  orderForm!: FormGroup;
  order?: Order;
  totalPrice: number = 0;
  pageMode: PageMode = PageMode.Create;
  pageModeEnum = PageMode;
  dishes: Dish[] = [];
  guests: Guest[] = [];

  constructor(
    private orderSvc: OrderService,
    private guestSvc: GuestService,
    private dishSvc: DishService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.setOrderId();
    this.buildForm();
    this.setPageMode();
    this.loadGuest();
    this.loadDish();
    if (this.pageMode == PageMode.Edit) {
      this.loadOrder();
    }
  }

  addNewOrder() {
    if (this.orderForm.valid) {
      if (this.pageMode == PageMode.Create) {
        this.orderSvc.addNewOrder(this.orderForm.value).subscribe({
          next: (orderFromApi) => {
            this.route.navigate(['/order']);
          },
        });
      } else {
        this.orderSvc.editOrder(this.orderId!, this.orderForm.value).subscribe({
          next: (orderFromApi) => {
            this.route.navigate(['/order']);
          },
        });
      }
    }
  }

  getPrice() : void {
    this.orderSvc.totalPrice(this.setPriceId).subscribe({
      next: (priceFromApi: number) => {
        this.totalPrice = priceFromApi;
      },
    });
  }

    get setPriceId(): number[] {
      return this.orderForm.controls['dishIds'].value;
    }

  private setPageMode(): void {
    if (this.orderId) {
      this.pageMode = PageMode.Edit;
    }
  }

  private loadOrder() {
    this.orderSvc.getEditOrder(this.orderId!).subscribe({
      next: (orderFromApi) => {
        this.order = orderFromApi;
        this.patchValue(orderFromApi);
        this.getPrice();
      },
    });
  }

  private loadGuest() {
    this.guestSvc.getGuests().subscribe({
      next: (geustFromApi) => {
        this.guests = geustFromApi;
      },
    });
  }

  private loadDish() {
    this.dishSvc.getDishes().subscribe({
      next: (dishesFromApi) => {
        this.dishes = dishesFromApi;
      },
    });
  }

  private setOrderId(): void {
    this.orderId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }


private buildForm() {
  this.orderForm = this.fb.group({
    id: new FormControl(0),
    notes: new FormControl(''),
    guestId: new FormControl([]),
    dishIds: new FormControl([[]]),
  })
}

  private patchValue(orderFromApi: Order) {
    this.orderForm.patchValue({
      id: orderFromApi.id,
      notes: orderFromApi.notes,
      guestId: orderFromApi.guestId,
      dishIds: orderFromApi.dishIds
    });
  }
}
