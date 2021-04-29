import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {InventoryService} from '../../services/inventory.service'
import { Inventory } from '../../models/inventory';

@Component({
  selector: 'app-add-or-edit-inventory',
  templateUrl: './add-or-edit-inventory.component.html',
  styleUrls: ['./add-or-edit-inventory.component.css']
})
export class AddOrEditInventoryComponent implements OnInit {

  action:string;
  invItem:Inventory

  invItemForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    stock:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    category:new FormControl('',[Validators.required]),
  })

  constructor(private route:ActivatedRoute,private router:Router,private inventoryService:InventoryService) { }

  ngOnInit(): void {
    this.action = this.route.snapshot.paramMap.get('action')

    if(this.action === 'add'){
      this.action = 'Add Item'
    }
    else{
      this.action = 'Edit Item';
      this.invItem = this.inventoryService.getInventoryItem();
      if(this.invItem){
        this.invItemForm.patchValue({
          name:this.invItem.Name,
          stock:this.invItem.InventoryCount,
          price:this.invItem.Price,
          category:this.invItem.Category
        })
      }
      
    }
  }

  clear(){
    this.invItemForm.reset()
  }

  goback(){
    this.router.navigate(['inventoryList'])
  }

  submitItem(){
    if(this.action === 'Add Item'){
      this.inventoryService.createInventoryItem(this.invItemForm.value).subscribe(
        (success)=>{
          alert('Item added');
          this.router.navigate(['inventoryList'])
        },(error)=>{
          alert('Error creating Item')
        }
      )
    }else if(this.action === 'Edit Item'){
      this.inventoryService.editInventoryItem(this.invItemForm.value).subscribe(
        (success)=>{
          alert('Item Modified');
          this.router.navigate(['inventoryList'])
        },(error)=>{
          alert('Error modifying item')
        }
      )
    }
  }

}
