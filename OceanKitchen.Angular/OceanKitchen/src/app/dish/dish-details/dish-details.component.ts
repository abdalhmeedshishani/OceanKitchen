import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DishDetails } from 'src/app/models/dish/dishDetails.model';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent {

  dish?: DishDetails

  constructor(
    private dishsvc: DishService,
    private activatedRoute :ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.loadDishDetails();
    this.setDishId();
  }

  private loadDishDetails(){
    let dishId = this.setDishId();

  this.dishsvc.getDish(dishId).subscribe({
    next: (dishFromApi) =>{
      this.dish = dishFromApi
    }
  })
  }

  private setDishId():number{
    return Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

}
