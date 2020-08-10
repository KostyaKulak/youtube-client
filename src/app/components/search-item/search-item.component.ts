import {Component, Input, OnInit} from '@angular/core';
import {SearchItem} from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  @Input() public item: SearchItem;

  constructor() { }

  public ngOnInit(): void {
  }

}
