import { ProvidersProvider } from './../../providers/providers/providers';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  ProvidersProvider: any;
info;
infoList;
city
constructor(public navCtrl: NavController, public navParams: NavParams, private Data:ProvidersProvider) {

       
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  onClick(selectedValue: any){
    
  
    if (this.city === "pretoria"){
      this.Data.getData().subscribe(data=>{
      this.info = data;
      console.log(data);
      this.infoList = this.info.weather;
  
  })
       

    
  }
} 
}
