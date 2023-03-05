import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Item } from '../main-model';
import { MainService } from '../main.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

//base variables for methods
// items = [];
items$: Observable<Item[]>;
// currentItem = null;
// originalItem = '';
selectedItem: Item;

//other variables
currentId = null;
currentLink = null;
items = [];


constructor(
  private mainService: MainService,
  private route: ActivatedRoute,
  private router: Router
) {}

//__________LIFECYCLE HOOK___________//
ngOnInit(): void {
  this.loadItems(); //responds to the fetch subscriptions
  this.resetItem();
  this.route.paramMap.subscribe(params => {
    this.currentId = params.get('id');
    if (this.currentId) {
      this.setCurrentItem(this.currentId); //routing
    }
  })
}

//routing
setCurrentItem(id) {
  this.currentLink = this.items.find(item => item.id === id);
}



//------UI--------//
//select
selectItem(item: Item) {
  this.selectedItem = item;
}








//------API-------//

//lifecycle hook method for server
loadItems() {
  this.items$ = this.mainService.getAllItems(); //API request to find all data and list it
}

//change data -- CREATE (form) + UPDATE (form)
saveItem(item: Item) {
  if(item.id) {
    this.updateItem(item);
  } else {
    this.createItem(item);
  }
  this.resetItem();
}

  //______Component Methods for SAVE (create, update)______
  createItem(item: Item) {
    this.mainService.createItem(item).pipe(
      tap(() => this.loadItems())
    )
    .subscribe();
  }

  updateItem(item) {
    this.mainService.updateItem(item)
    .pipe(
      tap(() => this.loadItems())
    )
    .subscribe();
  }

//delete button
deleteItem(id: number) {
  this.mainService.deleteItem(id).pipe(
    tap(() => this.loadItems())
  )
  .subscribe();
}






//reset form -- connected to cancel button
resetItem() {
  const emptyItem: Item = {
    id: null,
    name: '',
    description: '',
    complete: false,
  }
  this.selectItem(emptyItem) //creates blank copy; avoids shared mutable
}


}
