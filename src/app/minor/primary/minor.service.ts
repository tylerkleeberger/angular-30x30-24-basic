import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SecondaryService } from '../secondary/secondary.service';
import { SecondaryModel } from '../shared/secondary-model';
import { PrimaryModel } from './minor-model';

@Injectable({
  providedIn: 'root'
})
export class MinorService {

  primaryItemsChanged = new Subject<PrimaryModel[]>();

  private primaryItems: PrimaryModel[] = [];

  constructor(
    private secondaryService: SecondaryService
  ) { }

  setPrimaryItems(primaryItems: PrimaryModel[]) {
    this.primaryItems = primaryItems;
    this.primaryItemsChanged.next(this.primaryItems.slice());
  }

  getPrimaryItems() {
    return this.primaryItems.slice();
  }

  getPrimaryItem(index: number) {
    return this.primaryItems[index];
  }

  addSecondaryItemsToSecondaryList(secondaryItems: SecondaryModel[]) {
    this.secondaryService.addsecondaryItems(secondaryItems);
  }

  addPrimaryItem(primaryItem: PrimaryModel) {
    this.primaryItems.push(primaryItem);
    this.primaryItemsChanged.next(this.primaryItems.slice());
  }

  updatePrimaryItem(index: number, newPrimaryItem: PrimaryModel) {
    this.primaryItems[index] = newPrimaryItem;
    this.primaryItemsChanged.next(this.primaryItems.slice());
  }

  deletePrimaryItem(index: number) {
    this.primaryItems.splice(index, 1);
    this.primaryItemsChanged.next(this.primaryItems.slice());
  }


}
