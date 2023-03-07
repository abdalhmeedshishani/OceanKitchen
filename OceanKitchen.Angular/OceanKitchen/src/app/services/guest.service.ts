import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Guest } from 'src/app/models/guest/guest.model';
import { GuestDetails } from '../models/guest/guestDetails.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  apiUrl = `${environment.apiUrl}/Guests`;

  constructor(private http: HttpClient) { }

  getGuests(): Observable<Guest[]> {

    return this.http.get<Guest[]>(`${this.apiUrl}/GetGuests`);
  }
  getGuest(id: number): Observable<GuestDetails> {

    return this.http.get<GuestDetails>(`${this.apiUrl}/GetGuest/${id}`);
  }

  addNewGuest(guest: GuestDetails): Observable<GuestDetails> {

    return this.http.post<GuestDetails>(`${this.apiUrl}/CreateGuest`, guest);

  }
  editGuest(id: number, guest: GuestDetails): Observable<any> {

    return this.http.put<GuestDetails>(`${this.apiUrl}/EditGuest/${id}`, guest);

  }

  deleteGuest(id: number): Observable<Guest> {

    return this.http.delete<Guest>(`${this.apiUrl}/DeleteGuest/${id}`);

  }
}
