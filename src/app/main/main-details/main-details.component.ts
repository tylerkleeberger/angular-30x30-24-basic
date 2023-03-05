import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Item } from '../main-model';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main-details',
  templateUrl: './main-details.component.html',
  styleUrls: ['./main-details.component.scss']
})
export class MainDetailsComponent {

  @Input() set selectedItem(value: Item) {
    if (value?.name) {
      this.originalItem = value.name;
    }
    this.currentItem = Object.assign({}, value);
  }

  @Output() itemSaved = new EventEmitter<Item>();
  @Output() itemCancelled = new EventEmitter();

  currentItem: Item;
  originalItem: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainService: MainService,
  ) {}

  saveItem(item: Item) {
    this.itemSaved.emit(item);
  }

  cancelItem() {
    this.itemCancelled.emit();
  }

  

  //route param update
  // item: Item;
  // id: number

  // ngOnInit() {
  //   this.route.params
  //     .subscribe(
  //       (params: Params) => {
  //         this.id = +params['id'];
  //         this.item = this.mainService.getItemUrl(this.id);
  //       }
  //     );
  // }


}
