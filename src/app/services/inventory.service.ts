import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Inventory} from '../models/inventory'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  inventoryItem :Inventory
  getUrl = 'https://run.mocky.io/v3/c2c21c25-db6e-4514-bf6e-88bcfca527cf';
  

  constructor(private http:HttpClient) { }

  getInventoryList():Observable<Inventory>{
    return this.http.get<Inventory>(this.getUrl)
  }

  deleteInventoryItem(itemid){
    // return this.http.delete(itemid)    // commented as api is not implemented
    return this.http.get<Inventory>(this.getUrl) 
  }

  createInventoryItem(item){
    return this.http.get<Inventory>(this.getUrl)
    // return this.http.post(item,this.otherUrl)  // commented as api is not implemented
  }

  editInventoryItem(item){
    return this.http.get<Inventory>(this.getUrl)
    // return this.http.put(item,this.otherUrl) // commented as api is not implemented
  }

  setInventoryItem(item){
    this.inventoryItem = item
  }

  getInventoryItem(){
    return this.inventoryItem
  }

  

  
}
