import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProvidersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvidersProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProvidersProvider Provider');
  }
  getData(city:string){
    return (this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=465e416c78cdc906280085750e30721d'));
    
    }
  }
 