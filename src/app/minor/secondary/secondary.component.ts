import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SecondaryModel } from '../shared/secondary-model';
import { SecondaryService } from './secondary.service';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.scss']
})
export class SecondaryComponent implements OnInit, OnDestroy{
  secondaryItems: SecondaryModel[];
  private smChangeSub: Subscription;

  constructor(
    private secondaryService: SecondaryService
  ) {}

  ngOnInit() {
    this.secondaryItems = this.secondaryService.getsecondaryItems();
    this.smChangeSub = this.secondaryService.secondaryItemsChanged
      .subscribe(
        (secondaryItems: SecondaryModel[]) => {
          this.secondaryItems = secondaryItems;
        }
      )
  }

  onEditItem(index: number) {
    this.secondaryService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.smChangeSub.unsubscribe()
  }

}
