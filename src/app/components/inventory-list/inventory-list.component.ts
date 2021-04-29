import { Component, OnInit } from '@angular/core';
import {Inventory} from '../../models/inventory';
import {Router} from '@angular/router';
import {InventoryService} from '.././../services/inventory.service'
import {Observable,of} from 'rxjs'

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  inventoryList:Observable<Inventory>;
  constructor(private inventoryService:InventoryService,private router:Router) { }

  ngOnInit(): void {
    this.getInventoryList()
  }

  getInventoryList(){
    this.inventoryList = this.inventoryService.getInventoryList()
  }

  editItem(item){
    this.inventoryService.setInventoryItem(item)
    this.router.navigate(['addInventory',{action:'edit'}])
  }

  deleteitem(item){
    this.inventoryService.deleteInventoryItem(item.ProductID).subscribe(
      (success)=>{
        alert('Item deleted')
      },(err)=>{
        alert('Error deleting item')
      }
    )
  }
  
  addItem(){
    this.router.navigate(['addInventory',{action:'add'}])
  }



}
