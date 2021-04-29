import {NgModule} from '@angular/core'
import {Routes,RouterModule, Router} from '@angular/router'
import {InventoryListComponent} from './components/inventory-list/inventory-list.component'
import { LoginComponent } from './components/login/login.component';
import {AddOrEditInventoryComponent} from './components/add-or-edit-inventory/add-or-edit-inventory.component'

const routes:Routes = [
    {
        path:'',component:LoginComponent
    },
    {
        path:'inventoryList',component:InventoryListComponent
    },
    {
        path:'addInventory',component:AddOrEditInventoryComponent
    }
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{   }

