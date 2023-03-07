import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Dish } from '../models/dish/dish.model';
import { DishDetails } from '../models/dish/dishDetails.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  apiUrl = `${environment.apiUrl}/Dishes`;

  constructor(private http: HttpClient) {}

  getDishes(): Observable<Dish[]> {

    return this.http.get<Dish[]>(`${this.apiUrl}/GetDishes`);
  }
  getDish(id: number): Observable<DishDetails> {

    return this.http.get<DishDetails>(`${this.apiUrl}/GetDish/${id}`);
  }

  addNewDish(dish: DishDetails): Observable<DishDetails> {

    return this.http.post<DishDetails>(`${this.apiUrl}/CreateDish`, dish);

  }
  editDish(id: number, dish: DishDetails): Observable<DishDetails> {

    return this.http.put<DishDetails>(`${this.apiUrl}/EditDish/${id}`, dish);

  }

  deleteDish(id: number): Observable<Dish> {

    return this.http.delete<Dish>(`${this.apiUrl}/DeleteDish/${id}`);

  }
}
