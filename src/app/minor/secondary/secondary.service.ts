import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SecondaryModel } from '../shared/secondary-model';

@Injectable({
  providedIn: 'root'
})
export class SecondaryService {

  secondaryItemsChanged = new Subject<SecondaryModel[]>()
  startedEditing = new Subject<number>();

  private secondaryItems: SecondaryModel[] = [
    new SecondaryModel('Secondary Item One', 5),
    new SecondaryModel('Secondary Item Two', 10),
  ];

  getsecondaryItems() {
    return this.secondaryItems.slice();
  }

  getSecondaryItem(index: number) {
    return this.secondaryItems[index];
  }

  addSecondaryItem(secondaryItem: SecondaryModel) {
    this.secondaryItems.push(secondaryItem);
    this.secondaryItemsChanged.next(this.secondaryItems.slice());
  }

  addsecondaryItems(secondaryItems: SecondaryModel[]) {
    this.secondaryItems.push(...secondaryItems);
    this.secondaryItemsChanged.next(this.secondaryItems.slice());
  }

  updateSecondaryItem(index: number, newSecondaryItem: SecondaryModel) {
    this.secondaryItems[index] = newSecondaryItem;
    this.secondaryItemsChanged.next(this.secondaryItems.slice());
  }

  deleteSecondaryItem(index: number) {
    this.secondaryItems.splice(index, 1);
    this.secondaryItemsChanged.next(this.secondaryItems.slice());
  }

  constructor() { }
}
