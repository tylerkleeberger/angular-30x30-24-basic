import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PrimaryModel } from '../minor-model';
import { MinorService } from '../minor.service';

@Component({
  selector: 'app-minor-detail',
  templateUrl: './minor-detail.component.html',
  styleUrls: ['./minor-detail.component.scss']
})
export class MinorDetailComponent implements OnInit{

  primaryItem: PrimaryModel;
  id: number;

  constructor(
    private minorService: MinorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.primaryItem = this.minorService.getPrimaryItem(this.id);
          }
        )
  }

  onAddToSecondaryList() {
    this.minorService.addSecondaryItemsToSecondaryList(this.primaryItem.secondaryItems);
  }

  onEditPrimaryItem() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeletePrimaryItem() {
    this.minorService.deletePrimaryItem(this.id);
    this.router.navigate(['/minor']);
  }

}
