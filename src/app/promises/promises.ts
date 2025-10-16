import { Component } from '@angular/core';

@Component({
  selector: 'app-promises',
  imports: [],
  templateUrl: './promises.html',
  styleUrl: './promises.scss'
})
export class Promises { 

  dell = {
    brand: 'dell',
    ram: '16gb',
    cpu: 'i7'
  }

  hp = {
    brand: 'hp',
    ram: '8gb',
    cpu: 'i5'
  }

  notAvailable = {
    brand: 'not availble'
  }

  dellAvailble(){
    return false;
  }

  hpAvailble(){
    return false
  }

  promiseVal : any;

  constructor() {
    
    let buyLaptop = new Promise((resolve,reject) => {
      if(this.dellAvailble()){
        return setTimeout(()=> {
          resolve("dell is purchased")
        }, 3000)
      } else if(this.hpAvailble()){
        return setTimeout(()=> {
          resolve("hp is purchased")
        },3000)
      } else {
        return setTimeout(()=>{
          reject("No laptop available in the market")
        },3000)
      }
    });

    buyLaptop.then((data) => {
      console.log('then code => ', data);
      this.promiseVal = data;
    }).catch(err=> {
      console.log("catch message=>", err);
      this.promiseVal = err
    })
  }
}
