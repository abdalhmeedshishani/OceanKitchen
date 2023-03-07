import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gender } from 'src/app/enums/gender.enum';
import { GuestDetails } from 'src/app/models/guest/guestDetails.model';
import { GuestService } from 'src/app/services/guest.service';
import { ImageUploaderConfig } from 'src/app/upload/image-uploader.config';
import { UploaderImage } from 'src/app/upload/UploaderImage.data';
import { UploaderMode, UploaderStyle, UploaderType } from 'src/app/upload/uploaderMode.enum';

@Component({
  selector: 'app-guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.css']
})
export class GuestDetailsComponent implements OnInit {


  guest?: GuestDetails
  gender = Gender

  images: UploaderImage[] = [];

  uploaderConfig = new ImageUploaderConfig(UploaderStyle.Normal, UploaderMode.Details, UploaderType.Single);

  constructor(
    private guestsvc: GuestService,
    private route: Router,
    private activatedRoute :ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.loadGuestDetails();
    this.setGuestId();
  }

  private loadGuestDetails(){
    let guestId = this.setGuestId();

  this.guestsvc.getGuest(guestId).subscribe({
    next: (guestFromApi) =>{
      this.guest = guestFromApi
    }
  })
  }

  private setGuestId():number{
    return Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

}
