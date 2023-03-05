import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../main-model';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent {

  @Input() items: Item[] = [];
  @Output() itemSelected = new EventEmitter<Item>();
  @Output() itemDeleted = new EventEmitter<number>();


  constructor(
  ) {}

  selectItem(item: Item) {
    this.itemSelected.emit(item);
  }

  deleteItem(id: number) {
    this.itemDeleted.emit(id);
  }
  

}
