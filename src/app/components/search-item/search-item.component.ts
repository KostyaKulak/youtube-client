import {Component, Input, OnInit} from '@angular/core';
import {SearchItem} from '../../models/search-item.model';
import { faEye, faHeart, faHeartBroken, faComments, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  public faEye: IconDefinition = faEye;
  public faHeart: IconDefinition = faHeart;
  public faHeartBroken: IconDefinition = faHeartBroken;
  public faComments: IconDefinition = faComments;
  @Input() public item: SearchItem;

  constructor() { }

  public ngOnInit(): void {
  }

}
