import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MainService } from 'src/app/main/main.service';
import { PrimaryModel } from '../minor-model';
import { MinorService } from '../minor.service';

@Component({
  selector: 'app-minor-list',
  templateUrl: './minor-list.component.html',
  styleUrls: ['./minor-list.component.scss']
})
export class MinorListComponent implements OnInit, OnDestroy{
  primaryItems: PrimaryModel[];
  subscription: Subscription;

  constructor(
    private minorService: MinorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.minorService.primaryItemsChanged
      .subscribe(
        (primaryItems: PrimaryModel[]) => {
          this.primaryItems = primaryItems;
        }
      );
      this.primaryItems = this.minorService.getPrimaryItems();
  }

  onNewPrimaryItem() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
