import { Component, Input } from '@angular/core';
import { PrimaryModel } from '../../minor-model';

@Component({
  selector: 'app-minor-item',
  templateUrl: './minor-item.component.html',
  styleUrls: ['./minor-item.component.scss']
})
export class MinorItemComponent {
  @Input() primaryItem: PrimaryModel;
  @Input() index: number;

}
