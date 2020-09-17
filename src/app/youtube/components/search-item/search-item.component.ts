import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import {
  faComments,
  faEye,
  faHeart,
  faHeartBroken,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { getBorderClass } from '../../../shared/utils/class.utils';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css', '../../styles/border.css'],
})
export class SearchItemComponent implements OnInit {
  public faEye: IconDefinition = faEye;
  public faHeart: IconDefinition = faHeart;
  public faHeartBroken: IconDefinition = faHeartBroken;
  public faComments: IconDefinition = faComments;
  @Input() public item: SearchItem;
  public borderClass: string;

  constructor() {}

  public ngOnInit(): void {
    this.borderClass = getBorderClass(this.item);
  }
}
