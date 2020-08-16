import {Component, Input, OnInit} from '@angular/core';
import {SearchItem} from '../../models/search-item.model';
import { faEye, faHeart, faHeartBroken, faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  faEye = faEye;
  faHeart = faHeart;
  faHeartBroken = faHeartBroken;
  faComments = faComments;
  @Input() public item: SearchItem;

  constructor() { }

  public ngOnInit(): void {
  }

}
