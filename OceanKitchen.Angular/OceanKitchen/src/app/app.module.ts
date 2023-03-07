import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../app/shared/shared.module';
import { AddEditGuestComponent } from './guest/add-edit-guest/add-edit-guest.component'
import { DeleteGuestComponent } from './guest/delete-guest/delete-guest.component';
import { EnumToArrayPipe } from '../pipes/enum-to-array.pipe';
import { GuestDetailsComponent } from './guest/guest-details/guest-details.component';
import { OrderComponent } from './order/order.component';
import { AddEditOrderComponent } from './order/add-edit-order/add-edit-order.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { ImageUploaderComponent } from './upload/image-uploader.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { SpinnerComponent } from './spinner/spinner/spinner.component';
import { DeleteOrderComponent } from './order/delete-order/delete-order.component';
import { DishComponent } from './dish/dish.component';
import { DeleteDishComponent } from './dish/delete-dish/delete-dish.component';
import { AddEditDishComponent } from './dish/add-edit-dish/add-edit-dish.component';
import { DishDetailsComponent } from './dish/dish-details/dish-details.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { AccordionModule } from 'primeng/accordion';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NotFoundComponent } from './not-found/not-found.component';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';


@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
    HomeComponent,
    AddEditGuestComponent,
    EnumToArrayPipe,
    DeleteGuestComponent,
    GuestDetailsComponent,
    OrderComponent,
    AddEditOrderComponent,
    OrderDetailsComponent,
    ImageUploaderComponent,
    SpinnerComponent,
    DeleteOrderComponent,
    DishComponent,
    DeleteDishComponent,
    AddEditDishComponent,
    DishDetailsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    SharedModule,
    NgxSpinnerModule,
    FormsModule,
    InputNumberModule,
    AccordionModule,
    NgxDatatableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
