import {Component, Input, OnInit} from '@angular/core';
import {SearchItem} from '../../models/search-item.model';
import {faComments, faEye, faHeart, faHeartBroken, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {findDateDiff} from '../../../shared/utils/date.utils';

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
  public borderClass: string;

  constructor() {
  }

  public ngOnInit(): void {
    let dateDiff: { [p: string]: number } = findDateDiff(this.item);
    if (dateDiff.diffDays > -7) {
      this.borderClass = 'public_date_seven_days';
    } else {
      this.borderClass = dateDiff.diffMonth > -1 ? 'public_date_month' :
        (dateDiff.diffMonth < -6 ? 'public_date_six_month' : 'public_date_default');
    }
  }

}
