import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SettingService {
  baseURl = environment.API_URL;

  constructor(private http:HttpClient) { }

  getAppSettings():Observable<any>{
    return this.http.get(`${this.baseURl}/clientInfo`);
  }
}
