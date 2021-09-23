import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  phoneNumber=[];
  emailAddress=[];
  officeAddress={address:"9/A, Cirikon City hall Tower",country:"USA",city:"NY"}

  constructor(public settingService:SettingService) { }

  ngOnInit(): void {
    this.settingService.getAppSettings().subscribe(res=>{
      this.phoneNumber=res.phoneNumber;
      this.emailAddress=res.emailAddress;
      this.officeAddress=res.officeAddress;
    })
  }

}
